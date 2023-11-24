useEffect  
======

[React 공식문서](https://react.dev/reference/react/useEffect)

```js
useEffect(setup, dependencies?)
```

useState 처럼 Component 의 최상위레벨에서 선언한다.

## 💬 Parameter

### 1. setup

해당 부분에는 개발자가 작성한 function 이 들어간다. 이를 setup function 이라고 하자

setup function 은 return 을 통해 cleanup function 을 반환할 수 있다.

cleanup function 은 해당 Component 가 사라질 때 작동하는 function 이다.

```js
function App() {
    useEffect(()=>{
        /* 
            logic
        */
        return () => {
            // setup function 의 return 을 cleanup function 을 반환할 수 있다.
        }
    })
}
```

1. Component 가 DOM 에 추가되면, React 가 setup function 을 실행한다. 해당 Component 의 render 가 완료되면 작동하는 로직이다.

2. Component 가 DOM 에서 제거되면 setup function 의 return 값 함수인 cleanup function 을 실행시킨다.

<br>

### 2. dependencies : optional(nothing or list)

setup function 에서 __사용(참조)되는 모든 Reactive value 의 list__ 를 작성한다.
만약 setup function 안에서 Reactive value 를 사용하는데 dependencies 를 명시하지 않으면 에러가 발생한다.


> __Reactive value__
> re-render 상황에서 변경될 수 있는 props, state, and all the variables, and functions (해당 Component 안에 직접적으로 선언되어있는) 를 포함한다.

```js
function App() {
    const [a, setA] = useState(true); // state 는 Reactive value
    const [b, setB] = useState(false); // state 는 Reactive value
    useEffect(()=>{
        console.log(a == true);
        console.log(b == false);
    }, [a,b]) // setup 에서 사용된 Reactive value 들을 작성
}

```


#### 2.1 dependencies : nothing

```js
function App() {
    useEffect(()=>{
    // logic
    })
}
```

모든 Component 의 re-render 에 대해서 setup function 이 실행된다.

#### 2.2 dependencies : empty dependencies

```js
function App() {
    useEffect(()=>{
    // logic
    }, []) // empty dependencies
}
```

해당 Component 의 첫 render 에 대해서만 setup, cleanup function 이 각 한번만 실행된다. 이후 어떠한 Component 내 props, state 의 변경에도 다시 실행되지 않는다.(doesn't re-run)

물론 해당 Component 전체를 re-render 하면 다시 한번 실행된다.


## 💬 Return 

undefine 

## ⚠ 주의사항

- useEffect 는 Component 의 최상위 레벨에서 호출(call)할 수 있다. Effect 가 조건문이나 반복문 안에서 쓰여서는 안된다.

- 외부시스템(non-reactive) 과의 동기화를 하려는 것이 아니라면 useEffect 가 필요하지 않을 것이다.

- React 의 Strict mode 에서는 useEffect 는 미리 한번 setup + cleanup 을 호출한다.

- depenedenies 로 쓰인 Component 안에서 정의한 몇몇 Object, function 은 예상과는 달리 re-run 이 발생할 수 있다 이러한 문제를 해결하기 위해 2가지 방법을 사용할 수 있다.

    1. 불필요한 Object, Fucntion 들을 dependenies 에서 제외한다.

    2. state 를 변경하기 위한 코드나, non-reactive logic 을 Effect 밖으로 추출한다.


- Effect 가 상호작용(event)에 의해 발생한 것이 아니면 React 가 웹브라우저가 Effect 를 실행하기 전의 화면을 보여준다. 따라서 Effect 가 시각적인 기능을 하는데, 딜레이가 눈에 띄게 발생하는 경우 useEffect 보다 useLayoutEffect 를 사용해야한다

- Effect 가 상호작용(event)에 의해 발생한 경우에도 브라우저가 state 가 변경되기전의 화면을 render 할 수 있다. 만약 브라우저가 화면을 다시 render 하는 것을 방지하기 위해서는 useEffect 대신 useLayoutEffect 를 사용해야 한다.
