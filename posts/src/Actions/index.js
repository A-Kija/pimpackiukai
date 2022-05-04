import { ADD_A, ADD_B, GET_MASTER_POSTS } from "../Constants";

export function getMasterPosts(posts) {
    return {
        type: GET_MASTER_POSTS,
        payload: posts
    }
}

export function addA() {
    return {
        type: ADD_A,
    }
}

export function addB() {
    return {
        type: ADD_B,
    }
}