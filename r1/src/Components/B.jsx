import C from "./C";
import D from "./D";

function B({letter, letter1, letter2}) {


    return (
        <>
        <h2 style={{fontSize: '100px'}}>{letter}</h2>
        <C letter={letter1}></C>
        <D letter={letter2}></D>
        </>
    )
}

export default B;