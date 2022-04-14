import { useEffect, useState } from 'react';
import './bootstrap.css';
import Create from './Components/crud/Create';
import Top from './Components/crud/Top';
import './crud.scss';
import axios from 'axios';
import List from './Components/crud/List';
import Show from './Components/crud/Show';


function App() {

    const [create, setCreate] = useState(null);
    const [edit, setEdit] = useState(null);
    const [animals, setAnimals] = useState([]);
    const [updateTime, setUpdateTime] = useState(Date.now());
    const [showId, setShowId] = useState(0);

    useEffect(() => {
        if (null === create) {
            return;
        }
        axios.post('http://localhost:3003/zoo', create)
        .then(res => {
            setUpdateTime(Date.now());
        })
    }, [create]);


    useEffect(() => {
        if (null === edit) {
            return;
        }
        axios.put('http://localhost:3003/zoo/'+ edit.id, edit)
        .then(res => {
            setUpdateTime(Date.now());
        })
    }, [edit]);


    useEffect(() => {
        axios.get('http://localhost:3003/zoo')
        .then(res => {
            setAnimals(res.data);
        });
    }, [updateTime]);

    const deleteAnimal = id => {
        axios.delete('http://localhost:3003/zoo/' + id)
        .then(res => {
            setUpdateTime(Date.now());
        })
    }

    const show = () => {
        return animals.filter(a => a.id === showId)[0];
    }


    return (
        <>
            <Top></Top>
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <Create setCreate={setCreate}></Create>
                    </div>
                    <div className="col-8">
                        <List animals={animals} deleteAnimal={deleteAnimal} setShowId={setShowId}></List>
                    </div>
                </div>
            </div>
            <Show showId={showId} setShowId={setShowId} show={show} setEdit={setEdit}></Show>
        </>
    );
}

export default App;