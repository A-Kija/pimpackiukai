import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
function Pager({ total, perPage, pageNow }) {

    const [pages, setPages] = useState([]);
    const [arrowLeft, setArrowLeft] = useState(0);
    const [arrowRight, setArrowRight] = useState(0);

    useEffect(() => {
        const p = [];
        const count = Math.ceil(total / perPage);
        for (let i = 0; i < count; i++) {
            p.push(i + 1);
        }
        setPages(p);
    }, [total, perPage]);

    useEffect(() => {
        const pn = parseInt(pageNow);
        if (pn  === 1) {
            setArrowLeft(0);
        }
        else {
            setArrowLeft(pn  - 1);
        }
        const count = Math.ceil(total / perPage);
        if (pn  === count) {
            setArrowRight(0);
        }
        else {
            setArrowRight(pn  + 1)
        }

    }, [pageNow, total, perPage]);

    return (
        <div className="kvc">
            {
                arrowLeft ? <Link to={'/'+ arrowLeft} className="page-link">◀</Link> : null
            }
            {
                pages.map(p => <Link key={p} to={'/' + p} className="page-link">{p}</Link>)
            }
            {
                arrowRight ? <Link to={'/' + arrowRight} className="page-link">▶</Link> : null
            }
        </div>
    )
}

export default Pager;