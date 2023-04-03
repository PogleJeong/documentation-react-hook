import React from "react";
import defaultAxios from "axios";
import "../styles/common.css";
import { useState } from "react";

// axios 는 custom instance 만드는 것을 허용함.
const useAxios = (options, axiosInstance = defaultAxios ) => {
    const [state, setState] = useStatete({
        loading: true,
        error: null,
        data: null
    })
    const [trigger, setTrigger] = useState(0);
    if(!options.url) {
        return;
    }
    const refetch = () => {
        setState({
            ...state,
            loading: true
        });
        setTrigger(Date.now());
    }
    useEffect(()=> {
        axiosInstance(options).then(data => {
            setState({
                ...state,
                loading: false,
                data
            })
        }).catch(error => {
            setState({...state, loading: false, error})
        });
    },[trigger]) //recetch 를 위한 dependency
    return {...state, refetch};
}

const UseAxios = () => {
    const { loading, data, refetch } = useAxios({ url: "https://yts.mx/api/v2/list_movies.json"})
    return (
        <div style={{height: "1000vh"}}>
            <h1>useAxios</h1>
            <h3>{data && data.status}</h3>
            <p>{loading && "Loading"}: </p>
            <button onClick={refetch}>Refetch</button>
        </div>
    );
}

export default UseAxios;