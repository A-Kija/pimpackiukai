import { useState } from "react"

function Sort({doSort}) {

    const [select, setSelect] = useState(1);


    return (
        <div className="sort">
            <h5>Sort by:</h5>
            <select value={select} onChange={e => {
                    setSelect(e.target.value);
                    doSort(e.target.value);
                    }
                }>
                <option value="1">A-Z weight</option>
                <option value="2">Z-A weight</option>
                <option value="3">A-Z type</option>
                <option value="4">Z-A type</option>
            </select>
        </div>
    )
}

export default Sort