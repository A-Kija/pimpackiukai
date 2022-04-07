import { useState } from "react";

function F() {

    const [check, setCheck] = useState(false);

    const handleCheck = () => {
        setCheck(c => !c);
    }

    return (
        <div className="kvc">
            <input type="checkbox" checked={check} onChange={handleCheck}></input>
            <input type="checkbox" checked={!check} onChange={handleCheck}></input>
        </div>
    )
}

export default F;