import { ADD_1, ADD_MANY_SQ, ADD_SQ, REM_1, REM_SQ } from "../Constants";

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

export function remSq() {
    return {
        type: REM_SQ
    }
}



export function addManySq(howMuch) {
    return {
        type: ADD_MANY_SQ,
        payload: howMuch
    }
}