import React from "react";
import "../styles/common.css";

// 윈도우 창 닫기 시 저장했나 여부묻기
const usePreventLeave = () => {
    const listener = (event) => {
        // 브라우져 호환을 위해 2줄 코드 작성
        // confirm 보여줌.
        event.preventDefault();
        event.returnValue = "";
    }
    //event : beforeunload : window 가 닫히기 전에 function이 실행되는 것을 허락함.
    const enablePrevent = () => window.addEventListener("beforeunload", listener);
    const disablePrevent = () => window.removeEventListener("beforeunload", listener);

    return { enablePrevent, disablePrevent };
}

const UsePreventLeave = () => {
    const { enablePrevent, disablePrevent} = usePreventLeave();
    return (
        <div>
            <h3>탭 닫기 시 저장여부 묻는 confirm 출력</h3>
            <button onClick={enablePrevent}>Protect</button>
            <button onClick={disablePrevent}>Unprotect</button>
        </div>
    );
};

export default UsePreventLeave;