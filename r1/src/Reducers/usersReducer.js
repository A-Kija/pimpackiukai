import { GET_USERS_FROM_SERVER } from "../Constants/users";

function usersReducer(state, action) {
    let c = [...state];

    switch (action.type) {
        case GET_USERS_FROM_SERVER:
            c = action.payload;
            break;
        default:
    }


    return c;
}

export default usersReducer;