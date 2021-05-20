import React, {useState}  from "react";
import {useSelector, useDispatch} from "react-redux";

const Counter1 = () => {
    let [value, setValue] = useState(0)
    const counter = useSelector((state) => state.counter)
    const dispatch = useDispatch()
    return (<div>
            <h2>Counter: {counter}</h2>
            <button onClick={() => {
                dispatch({type: 'INC'})
            }}>INC</button>
            <button onClick={()=>{
                dispatch({type: 'DEC'})
            }}>DEC</button>
            <button onClick={()=>{
                dispatch({type: 'INC100'})
            }}>+100</button>
            <button onClick={()=>{
                dispatch({type: 'DEC100'})
            }}>-100</button>
            <button onClick={()=>{
                dispatch({type: 'RESET'})
            }}>RESET</button>
            <br/>
            <input type={'number'} value={value} onChange={({target: {value}})=> setValue(value)}/>
            <button onClick={()=>{
                dispatch({type: 'ADD', payload: Number(value)})
            }}>ADD</button>
        </div>
    )
}

export default function Counter() {
    return (
        <div>
            <Counter1/>
        </div>
    )
}
