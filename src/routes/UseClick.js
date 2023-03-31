import React, { useEffect, useRef } from "react";

const useClick = (onClick) => {
    const ref = useRef();
    
    useEffect(()=>{
        //onClick 이 함수가 아니라면 x
        const element = ref.current;
        if (typeof onClick !== "function") {
            return;
        }
        // mount 시
        if (element) {
            element.addEventListener("click", onClick);
        }
        // unmount 시
        return () => {
            if(element){
                element.removeEventListener("click", onClick);
            }
        }
    },[onClick]); // function 도 dependency 에 적용가능
    return ref.current;
}

const UseClick = () => {
    // REACT 에서 모든 Component는 reference element를 가지고 있음
    const sayHello = () => console.log("say hello ~");
    const title = useClick(sayHello);
    return (
        <div>
            <h3 ref={title}>Hi</h3>
        </div>
    )
}
export default UseClick;