import React, { useEffect, useRef } from "react";
import { NaviUseEffect } from "../components/Navi";

const useClick = (onClick) => {
    const ref = useRef();

    useEffect(() => {
        // 1. 변수를 안에서 copy하지 않으면 warning (ref가 unmount 시점에 null이 된다.)
        const element = ref;
        if (element.current) {
        // 'click' is keyword
        element.current.addEventListener('click', onClick);
        }
        // ComponentWillUnmount()
        return () => {
            if (element) {
                element.current.removeEventListener('click', onClick);
            }
        };
    }, [onClick]);

    return ref;
};

const UseClick = () => {
    // REACT 에서 모든 Component는 reference element를 가지고 있음
    const sayHello = () => {
        console.log("say hello ~");
    }
    const title = useClick(sayHello);
    return (
        <div>
            <h1>useClick</h1>
            <NaviUseEffect />
            <p>밑에 Hi 를 누르면 console.log 실행.</p>
            <h3 ref={title}>Hi</h3>
        </div>
    )
}
export default UseClick;