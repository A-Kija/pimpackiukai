import { useEffect, useState } from 'react';

function Pager({ total, perPage, goTo, pageNow }) {

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
        if (pageNow === 1) {
            setArrowLeft(0);
        }
        else {
            setArrowLeft(pageNow - 1);
        }
        const count = Math.ceil(total / perPage);
        if (pageNow === count) {
            setArrowRight(0);
        }
        else {
            setArrowRight(pageNow + 1)
        }

    }, [pageNow, total, perPage]);

    return (
        <div className="kvc">
            {
                arrowLeft ? <div onClick={() => goTo(arrowLeft)} className="page-link">◀</div> : null
            }
            {
                pages.map(p => <div key={p} onClick={() => goTo(p)} className="page-link">{p}</div>)
            }
            {
                arrowRight ? <div onClick={() => goTo(arrowRight)} className="page-link">▶</div> : null
            }
        </div>
    )
}

export default Pager;