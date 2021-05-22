import {INC, DEC, INC100, DEC100, RESET, ADD} from "../actionTypes/counterTypes";

const initialState = {
    counter: 0,
}

export const counterReducer = (state = initialState, action) => {
    console.log(state, action);
    switch (action.type) {
        case INC:
            return {
                ...state,
                counter: state.counter + 1
            };
        case DEC:
            return {
                ...state,
                counter: state.counter - 1
            }
        case INC100:
            return {
                ...state,
                counter: state.counter + 100
            }
        case DEC100:
            return {
                ...state,
                counter: state.counter - 100
            }
        case RESET:
            return {
                ...state,
                counter: state.counter = 0
            }
        case ADD:
            return {
                ...state,
                counter: state.counter + action.payload
            }
        default:
            return state
    }
}
