import { BY_ZIP, GET_USERS_FROM_SERVER, SORT_USERS_AY, SORT_USERS_YA } from "../Constants/users";

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
        case BY_ZIP:
            c.sort((a, b) => {
                if (a.address.zipcode > b.address.zipcode) {
                    return 1 * action.payload;
                }
                if (a.address.zipcode < b.address.zipcode) {
                    return -1 * action.payload;
                }
                return 0;
            })
        default:
    }
    return c;
}

export default usersReducer;