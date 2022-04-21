import {useState} from 'react';

function My3() {

    const [state, setState] = useState(0);

    return (
        <div className="kvc">
            <button className="button" onClick={() => setState(s => s + 1)}>PLUS 1</button>
            <button className="button" onClick={() => setState(s => s - 3)}>MINUS 3</button>
            <div className="kv kv_1"><h1>{state}</h1></div>

        </div>
    )

}

export default My3;