import { useState } from 'react';

function My5() {

    const [state, setState] = useState([]);

    return (
        <>
            <div className="kvc">
                {
                    state.map((k, i) => k ? <div key={i} className="kv kv_2"></div> : <div key={i} className="kv kv_1"></div>)
                }
            </div>
            <div className="kvc">
                <button className="button" onClick={() => setState(s => [...s, 1])}>ADD BLUE</button>
                <button className="button" onClick={() => setState(s => [...s, 0])}>ADD RED</button>
                <button className="button" onClick={() => setState([])}>DESTROY ALL</button>
            </div>
        </>
    )

}

export default My5;