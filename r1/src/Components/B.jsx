import C from "./C";

function B({letter, letter2, letter3}) {


    return (
        <>
        <h2 style={{fontSize: '100px'}}>{letter}</h2>
        <C letter={letter2} letter3={letter3}></C>
        </>
    )
}

export default B;