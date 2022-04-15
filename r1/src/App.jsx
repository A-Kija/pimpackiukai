import { useReducer, useState } from 'react';
import './App.css';
import c2Reducer from './Reducers/c2Reducer';

function App() {

    const [c1, setC1] = useState(0);

    const [c2, dispachC2] = useReducer(c2Reducer, 0);

    return (
        <div className="App">
            <h1>ReDUCeR</h1>
            <h2>state count: {c1}</h2>

            <fieldset>
                <legend>STATE</legend>
                <button onClick={() => setC1(c => c + 1)}>+1</button>
                <button onClick={() => setC1(c => c - 1)}>-1</button>
            </fieldset>

        </div>
    );
}

export default App;