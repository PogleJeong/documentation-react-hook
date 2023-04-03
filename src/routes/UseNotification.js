import React from "react";
import "../styles/common.css";

// 알람기능 (꼭 설정에서 알람 설정켜주어야함.)
// notification API : window.Notification
const useNotification = (title, options) => {
    if(!("Notification" in window)) { // 브라우저에 따라 지원여부가 있기 때문
        return;
    }
    const fireNotification = () => {
        if(Notification.permission !== "grainted"){ // 알람설정 허용 유무
            Notification.requestPermission().then(permission => {
                if(permission === "granted") {
                    new Notification(title, options);
                }
            })
        } else {
            return;
        }
    }
    return fireNotification;
}

const UseNotification = () => {
    const triggerNoti = useNotification("Can I steal your Kimchi?", {
        body: "I love Kimchi don't you?"
    });
    return(
        <div>
            <button onClick={triggerNoti}>Hello!</button>
        </div>
    );
}
export default UseNotification;