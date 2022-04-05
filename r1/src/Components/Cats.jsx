import { useState } from "react"

function Cats() {

    const [cat, setCat] = useState('');
    const [catsList, setCatsList] = useState([]);
    const [catColor, setCatColor] = useState('brown');

    const add = () => {
        setCatsList(c => [...c, {catName:cat, catColor:catColor}]);
        setCat('');
    }

    return (
        <>
        <button onClick={add}>Add Cat</button>

        <select onChange={e => setCatColor(e.target.value)} value={catColor}>
            <option value="brown">Brown</option>
            <option value="gray">Gray</option>
            <option value="bisque">Biskvitas</option>
        </select>
        
        <input onChange={e => setCat(e.target.value)} value={cat}/>
        <div className="kvc">
        {
            catsList.map((c,i) => {
                return (<div key={i} className="cat" style={{
                    width: (c.catName.length * 14) + 10 + 'px',
                    height: (c.catName.length * 14) + 10 + 'px',
                    background: c.catColor
                }}>
                    {c.catName}
                </div>
                )
            })
        }
        </div>
        </>
    )
}

export default Cats;