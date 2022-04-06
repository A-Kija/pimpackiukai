import D from "./D";

function A({letter, letter2}) {


    return (
        <>
        <h2 style={{fontSize: '100px'}}>{letter}</h2>
        <D letter={letter2}></D>
        </>
    )
}

export default A;