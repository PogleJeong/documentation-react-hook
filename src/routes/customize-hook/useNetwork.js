import React, { useState, useEffect } from "react";
import { Navi, NaviUseEffect } from "../../components/Navi";

const useNetwork = (onChange) => {
    const [status, setStatus] = useState(navigator.onLine);
    const handleChange = () => {
        if (typeof onChange === "function") {
            onChange(navigator.onLine); //onChange == handleNetworkChange : 콘솔출력
        }
        setStatus(navigator.onLine);
    }
    useEffect(()=>{
        window.addEventListener("online", handleChange);
        window.addEventListener("offline", handleChange);
        return () => {
            window.removeEventListener("online", handleChange);
            window.removeEventListener("offline", handleChange);
        }
    }, [])
    return status;

}
const UseNetwork = () => {
    const handleNetworkChange = (online) => {
        console.log(online ? "We just went online" : "We are offline");
    }
    const online = useNetwork(handleNetworkChange);
    return (
        <div>
            <Navi />
            <hr/>
            <NaviUseEffect />
            <h1>useNetwork</h1>
            <p>{online ? "Online" : "offline"}</p>
        </div>
    );
}

export default UseNetwork;