import { useState } from "react";

function A({virvute}) {

    const [laukelioReiksme, setlaukelioReiksme] = useState('tuscia');
    
   
    const keistiReiksme = e => {
        setlaukelioReiksme(e.target.value);
        
    }

    const but = () => {
        virvute(laukelioReiksme);
    }


    return (
        <>
            <input type="text" value={laukelioReiksme} onChange={keistiReiksme}></input>
            <button onClick={but}>Ja</button>
        </>
    )
}

export default A;