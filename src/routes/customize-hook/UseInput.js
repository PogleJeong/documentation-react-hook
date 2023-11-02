import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NaviUseState } from "../../components/Navi";
import "../styles/common.css";

const useInput = (initialValue, validator, valid) => {
    const [value, setValue] = useState(initialValue);
    const onChange = (event) => {
        const {
            target: { value }
        } = event;
        // const value = event.target.value; 와 같은 ES6 문법
        
        let willUpdate = true;
        if (typeof validator === "function") {
            willUpdate = validator(value, valid);
        }
        if (willUpdate) {
            setValue(value);
        }
    }
    return { value, onChange };
}

function UseInput() {
    const maxLen = (value, max) => value.length < max; // 유효성검사 ()
    const onlyNumber = (value) => isNaN(Number(value)) ? false : true; // 숫자이외의 문자열이 들어가면 출력X
    
    const name = useInput("Mr.Kim", maxLen); // { value , onChange } 
    const age = useInput(20 ,onlyNumber);

    return(
        <div>
            <h1>useInput page</h1>
            <Link to="/useState">&larr; UseState Home</Link>
            <NaviUseState />
            <label for="name" >Name : max 20 string</label><br/>
            <input id="name" {...name} placeholder="Name" /><br/>
            <label for="age">Age : only number</label><br/>
            <input id="age" {...age} placeholder="age" />
        </div>
    );
    // {...name} => { value={value} onChange={onChange} } 를 압축한 문법
};

export default UseInput;