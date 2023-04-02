import React, { useEffect, useRef } from "react";
import { Navi, NaviUseEffect } from "../components/Navi";

const useFadeIn = (duration = 1, deray = 0) => {
    const ref = useRef();
    
    useEffect(() => {
        const element = ref;
        if (typeof duration !== "number" || typeof deray !== "number") {
            return;
        }
        if(element.current) {
            const { current } = element;
            current.style.transition = `opacity ${duration}s ease-in-out ${deray}s`;
            current.style.opacity = 1;
        }
    }, []);
    return {ref , style: {opacity: 0 }} // 속성을 반환하고
}

const UseFadeIn = () => {
    const fadeInElement = useFadeIn(1,2); // animation 시간 입력
    const fadeInElement2 = useFadeIn(1,4);
    // 반환받은 속성을 H1 태그에 직접 넣기
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