import { useEffect, useState } from 'react';
import './bootstrap.css';
import Create from './Components/crud/Create';
import Top from './Components/crud/Top';
import './crud.scss';


function App() {

    const [create, setCreate] = useState(null);

    const [alio, setAlio] = useState(1);

    useEffect(() => {
        if (null === create) {
            return;
        }
        console.log(create);
    }, [create]);


    return (
        <>
            {
                alio > 5 ? null : <Top alio={alio}></Top>
            }
            
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <Create setCreate={setCreate}></Create>
                    </div>
                    <div className="col-8">
                        <button onClick={() => setAlio(s => s + 1)}>+1</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;