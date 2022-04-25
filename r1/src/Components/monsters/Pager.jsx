import { useEffect, useState } from 'react';

function Pager({ total, perPage, goTo }) {

    const [pages, setPages] = useState([])

    useEffect(() => {
        const p = [];
        const count = Math.ceil(total / perPage);
        for (let i = 0; i < count; i++) {
            p.push(i + 1);
        }
        setPages(p);
    }, [total, perPage])

    return (
        <div className="kvc">
            {
                pages.map(p => <div key={p} onClick={() => goTo(p)} className="page-link">{p}</div>)
            }
        </div>
    )
}

export default Pager;