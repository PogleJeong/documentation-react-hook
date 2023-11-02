import React, { useEffect, useRef } from "react";
import { Navi, NaviUseEffect } from "../../components/Navi";

/**
 * 
 * @param {*} duration number
 * @param {*} deray number
 * @returns 
 */
const useFadeIn = (duration = 1, deray = 0) => {
    
    const ref = useRef();
    
    useEffect(() => { // useEffect 는 html이 모두 랜더링 된 다음에 실행되므로 ref , style: opacity: 0이 적용된 이후 변경된다.
        const element = ref; // 사용하고자 하는 useRef는 꼭 copy 해서 쓰기.
        if (typeof duration !== "number" || typeof deray !== "number") {
            return;
        }
        if(element.current) {
            const { current } = element;
            current.style.transition = `opacity ${duration}s ease-in-out ${deray}s`;
            current.style.opacity = 1;
        }
    }, []);

    return {ref , style: {opacity: 0 }} // 속성 반환
}

const UseFadeIn = () => {
    const fadeInElement = useFadeIn(1, 2); // animation 시간 입력
    const fadeInElement2 = useFadeIn(1, 4);
    
    return (
        <div>
            <Navi />
            <hr/>
            <NaviUseEffect />
            <h1 {...fadeInElement}>useFadeIn</h1>
            <p {...fadeInElement2}>It is useFadeIn hooks</p>
        </div>
    );
}

export default UseFadeIn;