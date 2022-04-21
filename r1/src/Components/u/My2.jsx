import {useState} from 'react';
import rand from '../../Functions/rand'

function My2() {

    const [state, setState] = useState(true);
    const [state2, setState2] = useState(rand(5, 25));

    return (
        <div className="kvc">
            <button className="button v" onClick={() => setState(s => !s)}>Do Magic</button>
            <button className="button red" onClick={() => setState2(rand(5, 25))}>Do Random</button>
            {
                state ? <div className="kv kv_2 aps"><h1>{state2}</h1></div> : <div className="kv kv_1"><h1>{state2}</h1></div>
            }
        </div>
    )

}

export default My2;