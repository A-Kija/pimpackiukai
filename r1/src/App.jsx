import { useEffect, useState } from 'react';
import './bootstrap.css';
import Create from './Components/crud/Create';
import Top from './Components/crud/Top';
import './crud.scss';
import axios from 'axios';
import List from './Components/crud/List';


function App() {

    const [create, setCreate] = useState(null);
    const [animals, setAnimals] = useState([]);
    const [updateTime, setupdateTime] = useState(Date.now());

    useEffect(() => {
        if (null === create) {
            return;
        }
        axios.post('http://localhost:3003/zoo', create)
        .then(res => {
            setupdateTime(Date.now());
        })
    }, [create]);


    useEffect(() => {
        axios.get('http://localhost:3003/zoo')
        .then(res => {
            setAnimals(res.data);
        });
    }, [updateTime]);


    return (
        <>
            <Top></Top>
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <Create setCreate={setCreate}></Create>
                    </div>
                    <div className="col-8">
                        <List animals={animals}></List>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;