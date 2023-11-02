import React from "react";
import { Link } from "react-router-dom";
import "../styles/common.css";
import { NaviUseEffect } from "../../components/Navi";

// useConfirm 은 입력시 한번 더 확인하는 메세지
// usePreventLeave 는

const useConfirm = (message = "", onConfirm, onCancel) => {
    if (typeof onConfirm !== "function") { // onConfirm 이 비었거나 fucntion 이 아닌경우
        return;
    }
    const confirmAction = () => {
        if(window.confirm(message)){ //confirm = 확인창 (window.confirm) 
            onConfirm();
        } else {
            try {
                onCancel();
            }catch(error){
                return;
            }
        }
    }
    return confirmAction;
}

const UseConfirm = () => {
    const deleteWorld = () => console.log("Deleting the world");
    const abort = () => console.log("Aborted");
    const confirmDelete = useConfirm("Are you sure?", deleteWorld, abort);
    return(
        <div>
            <h1>useConfirm</h1>
            <Link to="/useEffect">useEffectHome</Link>
            <NaviUseEffect />
            <hr/>
            <h3>누르면 확인창이 쓰고, 확인 취소에 따라 console.log 가 달라짐.</h3>
            <button onClick={confirmDelete}>Delete the world</button>
        </div>
    )
}

export default UseConfirm;