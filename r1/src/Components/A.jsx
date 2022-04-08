import { useState } from "react";

function A({virvute}) {

    const [laukelioReiksme, setlaukelioReiksme] = useState('tuscia');
    
   
    const keistiReiksme = e => {
        setlaukelioReiksme(e.target.value);
        virvute(e.target.value);
    }


    return (
        <>
            
            <input type="text" value={laukelioReiksme} onChange={keistiReiksme}></input>
        </>
    )
}

export default A;