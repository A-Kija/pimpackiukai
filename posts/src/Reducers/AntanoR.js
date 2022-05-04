import { ADD_A } from "../Constants";

function AntanoR(state, action) {
    let stateCopy = state;
    switch (action.type) {
        case ADD_A:
            stateCopy += 1;
    }
    return stateCopy;
}

export default AntanoR;