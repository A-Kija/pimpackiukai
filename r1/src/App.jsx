import { useReducer, useState } from 'react';
import { add1, addManySq, addSq, rem1, remSq } from './Actions/basic';
import './App.css';
import c2Reducer from './Reducers/c2Reducer';
import sqReducer from './Reducers/sqReducer';

function App() {

    const [c1, setC1] = useState(0);

    const [inp, setInp] = useState('');

    const [c2, dispachC2] = useReducer(c2Reducer, 0);

    const [sq, dispachSq] = useReducer(sqReducer, []);

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

            <fieldset>
                <legend>SQUARES</legend>
                <button onClick={() => dispachSq(addSq())}>Add</button>
                <button onClick={() => dispachSq(remSq())}>Remove</button>
                <input value={inp} onChange={e => setInp(e.target.value)}></input>
                <button onClick={() => dispachSq(addManySq(inp))}>Add Many</button>
            </fieldset>

            <div className="kvc">
                {
                    sq.map((_, i) => <div key={i} className="kv kv_1"></div>)
                }
            </div>

        </div>
    );
}

export default App;