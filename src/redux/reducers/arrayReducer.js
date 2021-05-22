import {ADD_ELEMENT} from "../actionTypes/arrayTypes";

const initialState = {
    array: [],
}

export const arrayReducer =(state = initialState, action)=>{
    switch (action.type){
        case ADD_ELEMENT:
            return {
                ...state,
                array: [...state.array, action.payload]
            }
        default: return state
    }
}