import { ADD_MANY_SQ, ADD_SQ, REM_SQ } from "../Constants";

function sqReducer(state, action) {
    const c = [...state]; // steito kopija

    switch (action.type) {
        case ADD_SQ:
            c.push(1);
            break;
        case REM_SQ:
            c.shift();
            break;
        case ADD_MANY_SQ:
            for (let i = 0; i < action.payload.inp; i++) {
                c.push(1);
            }
            break;
        default:
    }

    return c;
}

export default sqReducer;