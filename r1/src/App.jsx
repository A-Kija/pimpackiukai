import { useReducer, useState } from 'react';
import { add1, rem1 } from './Actions/basic';
import './App.css';
import c2Reducer from './Reducers/c2Reducer';

function App() {

    const [c1, setC1] = useState(0);

    const [c2, dispachC2] = useReducer(c2Reducer, 0);

    return (
        <div className="App">
            <h1>ReDUCeR</h1>
            <h2>state count: {c1}</h2>
            <h2>state count: {c2}</h2>

            <fieldset>
                <legend>STATE</legend>
                <button onClick={() => setC1(c => c + 1)}>+1</button>
                <button onClick={() => setC1(c => c - 1)}>-1</button>
            </fieldset>

            <fieldset>
                <legend>REDUCER</legend>
                <button onClick={() => dispachC2(add1())}>+1</button>
                <button onClick={() => dispachC2(rem1())}>-1</button>
            </fieldset>

        </div>
    );
}

export default App;