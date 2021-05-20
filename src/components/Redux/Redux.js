import React from "react";
import {createStore} from "redux";
import {Provider} from "react-redux";
import ReactDOM from "react-dom";
import App from "../../App";

const initialState ={
    counter: 0
}
let reducer = (state = initialState, action) =>{
    console.log(state, action);
    switch (action.type){
        case 'INC':
            return {
                ...state,
                counter: state.counter + 1
            };
        case 'DEC':
            return {
                ...state,
                counter: state.counter - 1
            }
        case 'RESET':
            return {
                ...state,
                counter: state.counter = 0
            }
        case 'ADD':
            return {
                ...state,
                counter: state.counter + action.payload
            }
        default: return state
    }
}
const store = createStore(reducer)
store.dispatch({type: ''})

