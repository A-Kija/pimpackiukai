import { useState } from "react";

function A() {

    const [letter, setLetter] = useState('');

    const go = () => {
        setLetter('A');
    }

    return (
        <>
        <h2 style={{fontSize: '100px'}}>{letter}</h2>
        <button onClick={go}>A</button>
        </>
    )
}

export default A;