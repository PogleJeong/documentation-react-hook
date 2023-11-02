useState  
======

[React 공식문서](https://react.dev/reference/react/useState)

```js
const [state, setState] = useState(initialState);
```

# <center>Intro</center>

useState 는 React Component 에 state 변수를 추가하기 위해 사용되는 React Hook 이다.

Component 의 가장 높은 레벨에서 선언되는 state 변수이다. 

Component 의 가장 높은 레벨에서 선언되는 의미는 Component 작성시 어떤 코드보다 먼저 선언해야한다는 것을 의미한다.

```js
import { useState } from 'react';

function MyComponent() {
  const [age, setAge] = useState(28); // NUMBER
  const [name, setName] = useState('Pogle'); // STRING
  const [todos, setTodos] = useState(() => createTodos()); // FUNCTION
  // ...
}
```


## 💬 Parameter

파라미터는 state 변수의 초기값이다. 모든 데이터 type 을 초기값으로 설정할 수 있다. 값을 설정하지 않아도 된다. 값을 설정하지 않으면 NULL 값이 적용된다.


## 💬 Return

### state, setState

1. 해당 state 의 현재값으로 첫 랜더링 시 state 초기값이 담겨져있다.

2. state 를 수정하는 함수(setter)이다. state 값을 변경시키기 위해 사용하며 이 함수가 호출되면 re-render 가 발생한다.


## ⚠ 주의사항

- useState 는 Component 최상위레벨에서 선언되어야 한다. 조건문이나 반복문 안에 위치하지 않아야한다. Component 내에서 어떤 코드보다 더 앞에 선언되어야한다고 생각하면 된다.

- useState 의 반환값 중 setter 함수의 이름을 "set + state명" 의 카멜표기법으로 지정하는 것이 좋다.

<hr>


# <center>setState</center>

앞서 useState 의 두번째 반환값인 setter 함수에 대해서 알아보자

setState 는 state 값을 변경하기 위해서 사용한다. 이 함수가 호출되면 state 값을 변경하고 re-render 가 일어난다.

state 값을 특정값으로 변경할 수 있고, state의 이전값을 이용해서 값을 변경할 수 있다.

```js
const [name, setName] = useState('pogle');
const [age, setAge] = useState(25);

function handleClick() {
  setName('user'); // pogle -> user
  setAge(a => a + 1); // 25 -> 26
  // ...
```

## 💬 Parameter

**변경시킬 state 값 (nextState)**

모든 type 의 데이터가 전달될 수 있다. 

__function 의 경우__ 

1. parameter 로 넘기는 function 의 경우 state 를 변경시킬 수 있는 코드로 작성되야 한다. 즉, parameter 에 작성되는 function 의 return 값이, 변경 이후의 state 값이어야한다. 

2. function 을 Queue 에 넣고 re-render 한다. re-render 중에 React 가 변경된 state 값을 계산하는데 setState 의 parameter 로 쓰인 모든 function 들을 사용한다.

## 💬 Return

없음

## ⚠ 주의사항

- setState 는 re-render 이후의 state 값을 변경시킨다. 만약 console.log(state) 를 setState 이후에 작성하여도, console 에는 변경 후의 state 값이 아니라, 변경 이전의 state 값이 출력된다.

```js
function handleClick() {
  console.log(count);  // 0

  setCount(count + 1); // Request a re-render with 1
  console.log(count);  // Still 0!

  setTimeout(() => {
    console.log(count); // Also 0!
  }, 5000);
}
```


이는 state 가 snapshot 처럼 작동하기 때문이다. 변경된 state 가 새로운 값을 가지고 re-render 를 요청하지만, 이미 작동하고 있는 event handler 의 javascript 의 변수값에는 영향을 주지 못하기 때문이다.

새로운 state 값으로 re-render 가 발생하기 전에 event handler(예제에서의 handleClick) 이 이미 작동했기 때문이다. __re-render 호출 전의 count 값이므로, 이전의 state 값이 출력된디.__

<hr>

# <center>이전 값을 이용한 state 변경</center>

앞서 state 변경에 있어서 두가지 방법이 있다고 정리했다. 

이 파트는 두번째 방식인 이전 값을 활용하여 state 값을 변경하는 방법을 사용해야 하는 경우를 정리했다.

다음 두가지 코드를 살펴보자

#### 직접적인 state 값 변경
```js
// age value = 42
function handleClick() {
  setAge(age + 1); // setAge(42 + 1)
  setAge(age + 1); // setAge(42 + 1)
  setAge(age + 1); // setAge(42 + 1)
}
```


1) 어떠한 element 를 click 하여 handleClick 가 호출된다. 이때 age 의 값은 42이다.
2) 첫번째 setAge 를 호출한다. age 는 현재 42이므로 setAge(43)가 호출된다. re-render 이후 age는 43 이 된다.
3) 두번째 setAge 를 호출한다. 첫번째 setAge가 작동하기 전 호출되므로 age 는 현재 42이다. 따라서 setAge(43)이 호출된다. re-render 이후 age는 43 이 된다.
4) 세번째 setAge 를 호출한다. 두번째 setAge가 작동하기 전 호출되므로 age 는 현재 42이다. 따라서 setAge(43)이 호출된다.  re-render 이후 age는 43 이 된다.
5) event handler 가 종료된다.

<br>

#### 이전 state 값을 이용한 state 변경


setState 에서 위와 같은 function을 넘겨준다면, React 가 이 function 들을 Queue 에 넣고 re-render 를 실행한다. state 로 작동하게 된다. 따라서 event hanlder 가 모두 종료된 이후 parameter로 사용된 function 을 계산하게 된다. 이 function 의 인자 a 는 age 를 가리킨다

```js
function handleClick() {
  setAge(a => a + 1); // setAge(42 => 43)
  setAge(a => a + 1); // setAge(43 => 44)
  setAge(a => a + 1); // setAge(44 => 45)
}

```

1) 어떠한 element 를 click 하여 handleClick 가 호출된다. 이때 age 의 값은 42이다.

2) 첫번째 setAge 를 호출한다. a => a + 1 는 Queue 에 저장된다. re-render 이후 a => a + 1와 같이 인자로 쓰여 Queue 에 저장된 function 과 이전 state 값를 사용하여 state 값을 계산한다. 

3) 두번째 setAge 를 호출한다.  a => a + 1 는 Queue 에 저장된다.  re-render 이후 a => a + 1와 같이 인자로 쓰여 Queue 에 저장된 function 과 이전 state 값를 사용하여 state 값을 계산한다. 

4) 세번째 setAge 를 호출한다.  a => a + 1 는 Queue 에 저장된다.  re-render 이후 a => a + 1와 같이 인자로 쓰여 Queue 에 저장된 function 과 이전 state 값를 사용하여 state 값을 계산한다. 

5) event handler 가 종료된 이후의 age 의 값은 이전 43 과 3번의 a = a + 1 을 통해 
((42 + 1) + 1 + 1)로 계산되어 45가 된다.
