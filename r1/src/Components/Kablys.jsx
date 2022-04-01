import { useState } from 'react';
import rand from '../Functions/rand';
function Kablys({color}) {

    const [nr, setNr] = useState(11);
    const [fs, setFs] = useState(20);
    const [kv, setKv] = useState([]);


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

    const addKv = () => {
        const copy = [...kv];
        copy.push(rand(10, 99));
        setKv(copy);

        // setKv(items => [...items, rand(10, 99)]);
    }

    return (
        <>
        <div style={{
            color: color,
            fontSize: fs + 'px'
            
            }}>Aš Kablys Nr. {nr} </div>
        <button onClick={changeNr}>GO</button>
        <button onClick={changeFs}>FS</button>
        <button onClick={addKv}>KV</button>
            <div className="kvc">
            {
            kv.map((k, i) => <div key={i} className="kv kv_1">{k}</div>)
            }
        </div>
        </>
    )
}


export default Kablys;