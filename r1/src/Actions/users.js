import { GET_USERS_FROM_SERVER, SORT_USERS_AY, SORT_USERS_YA } from '../Constants/users';

export function getUsersFromServer(users) {
    return {
        type: GET_USERS_FROM_SERVER,
        payload: users
    }
}

export function sortUsersAy() {
    return {
        type: SORT_USERS_AY
    }
}

export function sortUsersYa() {
    return {
        type: SORT_USERS_YA
    }
}