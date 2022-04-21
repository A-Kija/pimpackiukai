import { useState } from "react";
import Tree from "./Tree";

function Trees() {

    const [s1, setSt1] = useState([]);
    const [s2, setSt2] = useState([]);
    const [s3, setSt3] = useState([]);


    return (
        <>
        <div className="kvc">
            <button className="button" onClick={() => setSt1(t => [...t, 1])}>ąžuolas</button>
            <button className="button" onClick={() => setSt2(t => [...t, 1])}>beržas</button>
            <button className="button" onClick={() => setSt3(t => [...t, 1])}>uosis</button>
        </div>
        <div className="kvc g">
            <Tree name='ąžuolas' trees={s1}></Tree>
            <Tree name='beržas' trees={s2}></Tree>
            <Tree name='uosis' trees={s3}></Tree>
        </div>
        
        </>
    )


}

export default Trees;