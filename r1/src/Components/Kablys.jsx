import { useState } from 'react';
function Kablys({color}) {

    const [nr, setNr] = useState(11);


    const changeNr = () => {
        setNr(257);
    }

    return (
        <>
        <div style={{color: color}}>Aš Kablys Nr. {nr} </div>
        <button onClick={changeNr}>GO</button>
        </>
    )
}


export default Kablys;