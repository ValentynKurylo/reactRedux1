import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {add, dec, dec100, inc, inc100, reset} from "../../redux/actionCreators/counterCreator";

const Counter1 = () => {
    let [value, setValue] = useState(0)
    const counter = useSelector((state => state.counter))
    console.log(counter);
    const dispatch = useDispatch()
    return (<div>
            <h2>Counter: {counter.counter}</h2>
            <button onClick={() => {
                dispatch(inc())
            }}>INC
            </button>
            <button onClick={() => {
                dispatch(dec())
            }}>DEC
            </button>
            <button onClick={() => {
                dispatch(inc100())
            }}>+100
            </button>
            <button onClick={() => {
                dispatch(dec100())
            }}>-100
            </button>
            <button onClick={() => {
                dispatch(reset())
            }}>RESET
            </button>
            <br/>
            <input type={'number'} value={value} onChange={({target: {value}}) => setValue(value)}/>
            <button onClick={() => {
                dispatch(add(Number(value)))
            }}>ADD
            </button>
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

