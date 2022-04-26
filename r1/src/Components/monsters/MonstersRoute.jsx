import Pager from './Pager';
import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

function MonstersRoute({ monsters, monstersPerPage }) {

    const {pageNow} = useParams(1);

    const [showMonsters, setShowMonsters] = useState([]);

    useEffect(() => {
        const end = pageNow * monstersPerPage;
        const start = (pageNow - 1) * monstersPerPage;
        setShowMonsters(monsters.slice(start, end));

    }, [pageNow, monsters, monstersPerPage]);


    return (
        <>
        <div className="kvc"><h1>{pageNow}</h1></div>
        <div className="kvc">
            {
                showMonsters.map(m => <div key={m.id} className="kv kv_1">{m.type}</div>)
            }
        </div>
        <Pager pageNow={pageNow} total={monsters.length} perPage={monstersPerPage}></Pager>
        </>
    )
}

export default MonstersRoute;