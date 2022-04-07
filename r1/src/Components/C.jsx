import { useState } from "react";

function C() {

    const [checkbox, setCheckbox] = useState(false);
    const [showBlue, setShowBlue] = useState(false);

    const handleInput = () => {
        setCheckbox(c => !c);
    }

    const show = () => {
        setShowBlue(checkbox);
    }

    return (
        <div>
        { showBlue ?
        <h2 style={{
            width: '100px',
            height: '100px',
            background: 'blue'
            }}></h2>
        : null
        }

            <input type="checkbox" checked={checkbox} onChange={handleInput}  />
            <button onClick={show}>Show or not to Show</button>
        </div>

    )
}

export default C;