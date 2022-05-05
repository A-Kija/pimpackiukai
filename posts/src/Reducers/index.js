import { GET_MASTER_POSTS } from "../Constants";
import rand from "../Functions/rand";


function masterReducer(state, action) {
    let stateCopy;
    switch (action.type) {
        case GET_MASTER_POSTS:
            stateCopy = new Map();
            action.payload.map(post => stateCopy.set(post.id, post));
            // random kažkiek postų išmest
            const to = stateCopy.size;
            do {
                stateCopy.delete(rand(1, to));
            } while(stateCopy.size > 30);
            console.log(stateCopy);
            break;
        default:
    }
    return stateCopy;
}


// function masterReducer(state, action) {
//     if (action.type <= 200) {
//         return AntanoR(state, action);
//     }
//     if (action.type <= 400) {
//         return IevosR(state, action);
//     }
// }


export default masterReducer;