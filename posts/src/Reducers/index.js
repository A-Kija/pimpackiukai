import { GET_MASTER_POSTS } from "../Constants";
import AntanoR from "./AntanoR";
import IevosR from "./IevosR";

// function masterReducer(state, action) {
//     let stateCopy;
//     switch (action.type) {
//         case GET_MASTER_POSTS:

//             stateCopy = action.payload;
//             break;
//         default:
//     }
//     return stateCopy;
// }


function masterReducer(state, action) {
    if (action.type <= 200) {
        return AntanoR(state, action);
    }
    if (action.type <= 400) {
        return IevosR(state, action);
    }
}


export default masterReducer;