import B from "./B";

function A({letter, letter1, letter2, letter3}) {


    return (
        <>
        <h2 style={{fontSize: '100px'}}>{letter}</h2>
        <B letter={letter1} letter2={letter2} letter3={letter3}></B>
        </>
    )
}

export default A;