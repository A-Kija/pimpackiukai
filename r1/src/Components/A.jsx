import { useState } from "react";
import C from './C';

function A() {

    const [letter, setLetter] = useState('A');
    const [letter1, setLetter1] = useState('C');

    const go = () => {
        setLetter(l => l === 'C' ? 'A' : 'C');
        setLetter1(l => l === 'C' ? 'A' : 'C');
    }

    return (
        <>
       <button onClick={go}>C</button>
       <h2 style={{fontSize: '100px'}}>{letter1}</h2>

        <C letter={letter}></C>
        </>
    )
}

export default A;