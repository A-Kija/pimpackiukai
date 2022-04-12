import { useEffect, useState } from 'react';
import './bootstrap.css';
import Create from './Components/crud/Create';
import Top from './Components/crud/Top';
import './crud.scss';
import axios from 'axios';


function App() {

    const [create, setCreate] = useState(null);

    useEffect(() => {
        if (null === create) {
            return;
        }
        axios.post('http://localhost:3003/zoo', create);
    }, [create]);


    return (
        <>
            <Top></Top>
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <Create setCreate={setCreate}></Create>
                    </div>
                    <div className="col-8">
                        111
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;