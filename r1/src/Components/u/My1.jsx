import {useState} from 'react';

function My1() {

    const [state, setState] = useState(true);

    return (
        <div className="kvc">
            <button className="button" onClick={() => setState(s => !s)}>Do Magic</button>
            {
                state ? <div className="kv kv_1 aps"></div> : <div className="kv kv_1"></div>
            }
        </div>
    )

}

export default My1;