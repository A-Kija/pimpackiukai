import { useState } from "react"

function Cats() {

    const [cat, setCat] = useState('');
    const [catsList, setCatsList] = useState([]);

    const add = () => {
        setCatsList(c => [...c, cat]);
        setCat('');
    }


    return (
        <>
        <button onClick={add}>Add Cat</button>
        <input onChange={e => setCat(e.target.value)} value={cat}/>
        <div className="kvc">
        {
            catsList.map((c,i) => {
                return (<div key={i} className="cat" style={{
                    width: (c.length * 14) + 10 + 'px',
                    height: (c.length * 14) + 10 + 'px'
                }}>
                    {c}
                </div>
                )
            })
        }
        </div>
        </>
    )
}

export default Cats;