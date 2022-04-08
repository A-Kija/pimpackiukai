import { useState } from "react";

function A({virvute}) {

    const [laukelioReiksme, setlaukelioReiksme] = useState(false);
       
    const keistiReiksme = () => {
        setlaukelioReiksme(c => !c);
    }

    const but = () => {
        virvute(laukelioReiksme);
    }

    return (
        <>
            <input type="checkbox" checked={laukelioReiksme} onChange={keistiReiksme}></input>
            <button onClick={but}>Ja</button>
        </>
    )
}

export default A;