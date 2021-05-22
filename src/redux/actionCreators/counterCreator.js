import {INC, DEC, INC100, DEC100, RESET, ADD} from "../actionTypes/counterTypes";

export const inc = () =>({type : INC})
export const dec = () =>({type: DEC})
export const inc100 = ()=>({type: INC100})
export const dec100 = ()=>({type: DEC100})
export const reset = ()=>({type: RESET})
export const add = (payload)=>({type: ADD, payload})