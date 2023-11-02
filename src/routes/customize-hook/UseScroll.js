import React, { useState, useEffect } from "react";
import { Navi, NaviUseEffect } from "../../components/Navi";

// 스크롤 위치에 따라 요소의 style 이 바뀜.
// 스크롤에 대한 이벤트는 따로 설정해야한다.

const useScroll = () => {
    const [state, setState] = useState({
        x: 0,
        y: 0,
    });
    const onScroll = () => {
        setState({ y: window.scrollY, x: window.scrollX });
    }
    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        return () =>{
            window.removeEventListener("scroll", onScroll);
        }
    })
    return state;

}
const UseScroll = () => {
    const { y } = useScroll(); // y만 뽑아서 사용
    return (
        <div style={{ height: "1000vh"}}>
            <Navi />
            <hr/>
            <NaviUseEffect />
            <h1>useScroll</h1>
            <h3 style={{position: "fixed", color: y > 100 ? "red" : "blue" }}>I can change color if you scroll</h3>
        </div>
    );
}

export default UseScroll;