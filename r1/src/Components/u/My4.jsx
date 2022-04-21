import { useState } from 'react';

function My4() {

    const [state, setState] = useState([]);

    return (
        <>
            <div className="kvc">
                {
                    state.map((_, i) => <div key={i} className="kv kv_3"></div>)
                }
            </div>
            <div className="kvc">
                <button className="button" onClick={() => setState(s => [...s, 1])}>ADD</button>
            </div>
        </>
    )

}

export default My4;