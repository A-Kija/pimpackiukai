import { ADD_SQ } from "../Constants";

function sqReducer(state, action) {
    const c = [...state]; // steito kopija

    switch (action.type) {
        case ADD_SQ:
            c.push(1);
            break;
        default:
    }

    return c;
}

export default sqReducer;