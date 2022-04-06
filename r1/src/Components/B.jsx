import { useState } from "react";

function B() {

    const [letter, setLetter] = useState('B');

    const go = () => {
        setLetter(l => l === 'B' ? '' : 'B');
    }

    return (
        <>
        <h2 style={{fontSize: '100px'}}>{letter}</h2>
        <button onClick={go}>X</button>
        </>
    )
}

export default B;