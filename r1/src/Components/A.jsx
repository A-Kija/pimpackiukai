import { useState } from "react";
import C from './C';

function A() {

    const [letters, setLetters] = useState('');
    const [goValaue, setGoValaue] = useState('');
   

    const handleInput = e => {
        setLetters(e.target.value);
    }

    const go = () => {
        setGoValaue(letters);
    }

    return (
        <>
       
            <h2 style={{fontSize: '100px'}}>{goValaue}</h2>

            <input type="text" value={letters} onChange={handleInput}></input>
            <button onClick={go}>GO</button>


        </>
    )
}

export default A;