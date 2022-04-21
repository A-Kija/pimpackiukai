import { useState } from "react";
import PlusBlack from "./PlusBlack";

function ManyBlacks() {
    
    const [blacks, setBlacks] = useState([]);

    return (
        <>
            <div className="kvc">
                <button onClick={() => setBlacks(b => [...b, <PlusBlack key={b.length}></PlusBlack>])}>
                    ADD
                </button>
            </div>
            <div className="kvc">
                {blacks}
            </div>
        </>
    )

}

export default ManyBlacks;