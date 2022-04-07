import { useState } from "react";

function B() {

    const [colors, setColors] = useState('');
    const [goValaue, setGoValaue] = useState('');
   

    const handleInput = e => {
        setColors(e.target.value);
    }

    const go = () => {
        setGoValaue(colors);
    }

    return (
        <>
       
            <h2 style={{fontSize: '100px'}}>{goValaue}</h2>

            <select value={colors} onChange={handleInput}>
                <option value="blue">Blue</option>
                <option value="pink">Pink</option>
                <option value="green">Green</option>
            </select>
            <button onClick={go}>GO</button>

        </>
    )
}

export default B;