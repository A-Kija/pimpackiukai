import { GET_USERS_FROM_SERVER } from '../Constants/users';

export function getUsersFromServer(users) {
    return {
        type: GET_USERS_FROM_SERVER,
        payload: users
    }
}