import { GET_USERS_FROM_SERVER, SORT_USERS_AY, SORT_USERS_YA } from "../Constants/users";

function usersReducer(state, action) {
    const c = [...state];

    switch (action.type) {
        case GET_USERS_FROM_SERVER:
            return action.payload;
        case SORT_USERS_AY:
            c.sort((a, b) => {
                if (a.username > b.username) {
                    return 1;
                }
                if (a.username < b.username) {
                    return -1;
                }
                return 0;
            });
            break;
        case SORT_USERS_YA:
            c.sort((a, b) => {
                if (a.username > b.username) {
                    return -1;
                }
                if (a.username < b.username) {
                    return 1;
                }
                return 0;
            });
            break;
        default:
    }
    return c;
}

export default usersReducer;