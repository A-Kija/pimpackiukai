import { GET_MASTER_POSTS } from "../Constants";

function masterReducer(state, action) {
    let stateCopy;
    switch (action.type) {
        case GET_MASTER_POSTS:
            stateCopy = action.payload;
            break;
        default:
    }
    return stateCopy;
}

export default masterReducer;