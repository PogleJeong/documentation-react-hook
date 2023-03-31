import React, { useState } from "react";

const useInput = (initialValue, validator) => {
    const [value, setValue] = useState(initialValue);
    const onChange = (event) => {
        const {
            target: { value }
        } = event;
        // const value = event.target.value; 와 같은 ES6 문법
        
        let willUpdate = true;
        if (typeof validator === "function") {
            willUpdate = validator(value);
        }
        if (willUpdate) {
            setValue(value);
        }
    }
    return { value, onChange };
}

function UseInput() {
    const maxLen = (value) => value.length < 10; // 유효성검사 ()
    const onlyNumber = (value) => isNaN(Number(value)) ? false : true; // 숫자이외의 문자열이 들어가면 출력X
    
    const name = useInput("Mr.Kim", maxLen); // { value , onChange } 
    const age = useInput(20 ,onlyNumber);

    return(
        <div>
            <h1>useInput page</h1>
            <input {...name} placeholder="Name" />
            <input {...age} placeholder="age" />
        </div>
    );
    // {...name} => { value={value} onChange={onChange} } 를 압축한 문법
};

export default UseInput;