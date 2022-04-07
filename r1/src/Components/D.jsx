import { useState } from "react";

function D() {

    const [blue, setBlue] = useState(true);
    const [green, setGreen] = useState(true);

    const handleBlue = () => {
        setBlue(c => !c);
    }

    const handleGreen = () => {
        setGreen(c => !c);
    }

    return (
        <div className="kvc">
            <div className="kv" style={{background: blue ? 'blue' : 'transparent'}}>
                <input type="checkbox" checked={blue} onChange={handleBlue}></input>
            </div>
            <div className="kv" style={{background: green ? 'green' : 'transparent'}}>
                <input type="checkbox" checked={green} onChange={handleGreen}></input>
            </div>
        </div>
    )
}

export default D;