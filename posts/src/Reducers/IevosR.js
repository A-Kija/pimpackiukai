import { ADD_B } from "../Constants";

function IevosR(state, action) {
    console.log('Aliuo');
    let stateCopy = state;
    switch (action.type) {
        case ADD_B:
            stateCopy += 3;
            break;
    }
    return stateCopy;

}

export default IevosR;