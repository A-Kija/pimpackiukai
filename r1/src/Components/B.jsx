import C from "./C";

function B({letter, letter1}) {


    return (
        <>
        <h2 style={{fontSize: '100px'}}>{letter}</h2>
        <C letter={letter1}></C>
        </>
    )
}

export default B;