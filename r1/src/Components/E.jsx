import { useState } from "react";

function E() {

    const [blue, setBlue] = useState(false);
    const [green, setGreen] = useState(false);

    const handleBlue = () => {
        setBlue(c => !c);
    }

    const handleGreen = () => {
        setGreen(c => !c);
    }

    return (
        <div className="kvc">
            <input type="checkbox" checked={blue} onChange={handleBlue}></input>
            <input type="checkbox" checked={green} onChange={handleGreen}></input>
            <div className="kv" style={{background: blue && green ? 'pink' : 'transparent'}}>
                
            </div>

        </div>
    )
}

export default E;