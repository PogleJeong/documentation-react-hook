React Hook Form - useForm
======
<hr>

# 💬 Overview

**A powerful custom hook to validate your form with minimal re-renders**
**최소한의 re-render로 form 을 검증하기 위한 강력한 사용자설정 React hook**

# 💬 Props 


|Option|Description|
|---|---|
|mode|form 을 submit 하기 전 검증전략|
|reValidateMode|form 을 submit 한 이후 검증전략|
|defaultValues|기본 값 설정|
|value|form values 를 수정하기 위한 reactive value|
|resetOptions|새로운 form 값을 수정하는 동안에 form state를 재지정하기 위한 옵션|
|criteriaMode|유효성 검사에 대한 결과로 오류를 표시|
|shouldFocusError|bulit-in focus management 활성화 및 비활성화 옵션|
|delayError|delay error 를 즉시 나타내는 옵션|
|shouldUseNativeValidation|브라우저에 내장된 제약 API 사용 옵션|
|shouldUnregister|input 이 unmount 된 이후, 해당 input 의 저장된 값 해제에 대한 옵션

```js
import useForm from "react-hook-form"

const myForm = useForm({
    mode,
    reValidateMode,
    defaultValues,
    value,
    resetOptions,
    criteriaMode,
    shouldFocusError,
    delayError,
    shouldUseNativeValidation,
    shouldUnregister
});
```

<br><hr>

# 🍳 Option

## 1. mode 

- 기본값은 onSubmit

```js
const myForm = useForm({
    mode: { // 기본값 onSubmit
        "onSumbit", // form 이 submit 되거나, form value 가 onChange 에 의해 변경될 때 작동
        "onBlur", // focus 가 해제되었을 때 작동
        "onChange", // 각 input value 가 Change event 에 의해 변경될 때 작동. 여러 re-render 가 일어날 수 있음 : 성능문제에 큰 영향
        "onTouched", // 처음 Blur event 에서 작동 이후 모든 Change event 에서 작동함.
        "all" // onBlur, onchange 에서 작동
    }
})
```

## 2. reValidateMode

- 기본값은 onChange

```js
const myForm = useForm({
    reValidateMode: { // 기본값 onChange
        "onChange",
        "onBlur",
        "onSubmit"
    }
})
```

## 3. defaultValues

- form 에 기본값을 설정, 모든 form 에 defaultValues 를 사용하는을 추천함.
- 동기 및 비동기 할당 모두 가능함

```js
// 동기
const myForm = useForm({
    defaultValues: {
        firstName: '',
        lastName: '',
    }
})

// 비동기
const myForm = useForm({
    defaultValues: async () => fetch('/api-endpoint');
})
```

**사용시 규칙**

- 값으로 undefined 사용 지양(금지)
- defaultValues 는 cach 되므로, 해당 값을 제거하려면 useForm 의 반환속성인 reset 사용
- 기본적으로 제출결과에 포함됨.
- 값으로 프로토타입 메서드(Moment, Luxon 등)가 포함된 사용자 지정 개체를 사용 지양(금지)

## 4. values

- 외부의 Component 나 Server 를 통해 form value 가 변경될 때 사용

```js
// 외부 Component 에서 받기
function App({values}) {
    const myForm = useForm({
        values
    })
}

// 외부 서버로부터 받기
function App() {
    const values = useFetch("/api");
    const myForm = useForm({
        defaultValues : {
            firstName: '',
            lastName: '',
        }
        values,
    })
}
```

## 5. resetOptions

- values, defaultValues 의 변경 발생시 reset API 가 내부적으로 호출됨

```js
const myForm = useForm({
    values,
    resetOptions: {
        keepDirtyValues: true, // user-interacted input will be retain
        keepErrors: true, // input errors will be retained with value update
    }
})
```

## 6. criteriaMode

- 유효성 검사에 대한 결과로 오류를 표시
```js
const myForm = useForm({
    criteriaMode: {
        "firstError", // 첫 error 에 대한 유효성 검사 에러 표시
        "all", // 모든 각 필드의 error 에 대한 유효성 검사 에러를 한번씩 표시
    }
})
```
