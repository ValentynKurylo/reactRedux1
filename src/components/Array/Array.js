import React, {useState}  from "react";
import {useSelector, useDispatch} from "react-redux";

export default function Array() {
    let [value, setValue] = useState(0)
    const dispatch = useDispatch()
    const array = useSelector((state => state.array))
    return (
        <div>
            <input value={value} onChange={({target: {value}})=> setValue(value)}/>
            <button onClick={()=>{
                dispatch({type: 'ADD_Element', payload: value})
                console.log(value);
            }}>Add</button>
            <br/>
            <h5>Array : {array} </h5>
        </div>
    )
}