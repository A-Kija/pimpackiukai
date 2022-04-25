import { useState } from 'react';
import './App.css';
import Pager from './Components/monsters/Pager';
import { monsters, monstersPerPage } from './Data/monsters';


function App() {

    const [pageNow, setPageNow] = useState(1);

    const goTo = p => {
        setPageNow(p);
    }

    return (
        <>
            <div className="kvc"><h1>{pageNow}</h1></div>
            <Pager goTo={goTo} total={monsters.length} perPage={monstersPerPage}></Pager>
        </>
    );
}
export default App;