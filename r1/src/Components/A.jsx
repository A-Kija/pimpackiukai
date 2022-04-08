import { useState } from "react";

function A({makeShow}) {

    const [check, setCheck] = useState(false);
   
    const handleInput = () => {
        makeShow(!check);
        setCheck(c => !c)           
    }

    return (
        <>
            <input type="checkbox" checked={check} onChange={handleInput}></input>
        </>
    )
}

export default A;