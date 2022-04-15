import { ADD_1, ADD_SQ, REM_1 } from "../Constants";

export function add1() {
    return {
        type: ADD_1
    }
}

export function rem1() {
    return {
        type: REM_1
    }
}


export function addSq() {
    return {
        type: ADD_SQ
    }
}