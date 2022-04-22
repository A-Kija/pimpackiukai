import { useEffect, useState } from "react";

function Local() {

    const [digit, setDigit] = useState(0);

    useEffect(() => {
        let d = localStorage.getItem('local');
        if (null === d) {
            localStorage.setItem('local', 0);
            d = 0;
        }
        setDigit(d);
    }, []);

    const bu = () => {
        // let d = localStorage.getItem('local');
        let d = digit;
        d++;
        localStorage.setItem('local', d);
        setDigit(d);
    }

    return (
        <div className="kvc">
            <button className="button" onClick={bu}>^=o=^</button>
            <div className="kv kv_3"><h1>{digit}</h1></div>
        </div>
    )
}

export default Local;