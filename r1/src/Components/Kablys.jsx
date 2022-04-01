import { useState } from 'react';
function Kablys({color}) {

    const [nr, setNr] = useState(11);
    const [fs, setFs] = useState(20);


    const changeNr = () => {
        setNr(257);
    }

    const changeFs = () => {
        // if (fs == 20) {
        //     setFs(40);
        // } else {
        //     setFs(20)
        // }
        setFs(oldFs => oldFs == 20 ? 40 : 20);
    }

    return (
        <>
        <div style={{
            color: color,
            fontSize: fs + 'px'
            
            }}>Aš Kablys Nr. {nr} </div>
        <button onClick={changeNr}>GO</button>
        <button onClick={changeFs}>FS</button>
        </>
    )
}


export default Kablys;