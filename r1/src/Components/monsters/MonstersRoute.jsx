import Pager from './Pager';
// import {useState} from 'react';
import { useParams } from 'react-router-dom';

function MonstersRoute({ monsters, monstersPerPage }) {

    const {pageNow} = useParams(1)

    return (
        <>
        <div className="kvc"><h1>{pageNow}</h1></div>
        <Pager pageNow={pageNow} total={monsters.length} perPage={monstersPerPage}></Pager>
        </>
    )
}

export default MonstersRoute;