import {combineReducers} from "redux";
import {counterReducer} from './counterReducer'
import {arrayReducer} from "./arrayReducer";

export default combineReducers({
    counter: counterReducer,
    array: arrayReducer
})