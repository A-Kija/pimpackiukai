import { GET_MASTER_POSTS } from "../Constants";

export function getMasterPosts(posts) {
    return {
        type: GET_MASTER_POSTS,
        payload: posts
    }
}