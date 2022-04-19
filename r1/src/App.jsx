import { useEffect, useRef, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {

    const [c, setC] = useState(0);

    const [users, setUsers] = useState([]);

    const masterUsers = useRef([]);


    // let count = 123;
    const count = useRef(123);

    const green = useRef();

    const focus = useRef();

    const go = () => {
        console.log(++count.current);
    }

    const goC = () => {
        console.log(c + 1);
        setC(a => a + 1)
    }

    const goGreen = () => {
        // document.querySelector('h2').style.color = 'green';
        green.current.style.color = 'green';
    }

    const all = () => {
        setUsers(masterUsers.current);
    }

    const filter = () => {
        setUsers(masterUsers.current.filter(u => u.first_name === 'George' || u.first_name === 'Lindsay'));
    }

    useEffect(() => {

        focus.current.focus();

    }, []);


    useEffect(() => {

        axios.get('https://reqres.in/api/users?page=2')
        .then(res=> {
            masterUsers.current = res.data.data;
            setUsers(res.data.data.filter(u => u.first_name === 'George' || u.first_name === 'Lindsay'))
            console.log(res.data.data);
        })

    }, []);

    const [del, setDel] = useState([]);

    useEffect(() => {
        axios.get('https://reqres.in/api/users?delay=3')
        .then(res => setDel(res.data.data))
    }, [])

    return (
        <div className="App">
            
            <span>Use Ref</span>
            <br/>
            <span>let {count.current}</span>
            <br/>
            <span>state {c}</span>
            <br/>

            <button onClick={go}>ADD</button>

            <button onClick={goC}>ReRender</button>

            <button onClick={goGreen}>GREEN</button>

            <button onClick={all}>ALL</button>
            <button onClick={filter}>FILTER</button>

            <h2 ref={green}>Want to be green</h2>

            <input type="text"></input>
            <input type="text"></input>
            <input type="text" ref={focus}></input>

            {
                // users.map(u => <img key={u.id} src={u.avatar}></img>)
            }

            <div className="kvc">
                {
                    del.length ? del.map(u => <img key={u.id} src={u.avatar}></img>) : <div class="lds-hourglass"></div>
                }


            </div>



        </div>
    );
}

export default App;