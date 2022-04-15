import { ADD_1, REM_1 } from "../Constants";

function c2Reducer(state, action) {
    let c = state; // steito kopija

    switch (action.type) {
        case ADD_1:
            c++;
            break;
        case REM_1:
            c--;
            break;
        default:
    }

    return c;
}

export default c2Reducer;