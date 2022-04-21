import { useState } from "react"

function PlusBlack({i}) {

    const [d, setD] = useState(0);

    return (
        <div className="kv kv_11" key={i}>
            {d}
            <h2 onClick={() => setD(x => x + 1)}>+</h2>
        </div>
    )
}

export default PlusBlack;