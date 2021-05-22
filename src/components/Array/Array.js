import React, {useState}  from "react";
import {useSelector, useDispatch} from "react-redux";
import {ADD_ELEMENT} from "../../redux/actionTypes/arrayTypes";
import {addElement} from "../../redux/actionCreators/arrayCreator";

export default function Array() {
    let [value, setValue] = useState(0)
    const dispatch = useDispatch()
    const array = useSelector((state => state.array))
    console.log(array);
    return (
        <div>
            <input value={value} onChange={({target: {value}})=> setValue(value)}/>
            <button onClick={()=>{
                dispatch(addElement(value))
                console.log(value);
            }}>Add</button>
            <br/>
            <h5>Array : {array.array} </h5>
        </div>
    )
}