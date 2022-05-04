import { useEffect, useReducer } from 'react';
import axios from 'axios';
import masterReducer from './Reducers';
import './App.css';
import { getMasterPosts, addA, addB } from './Actions';

function App() {

// const [masterPosts, dispatch] = useReducer(masterReducer, new Map());

const [countA, dispatchA] = useReducer(masterReducer, 0);
const [countB, dispatchB] = useReducer(masterReducer, 0);

// useEffect(() => {
//   axios.get('https://jsonplaceholder.typicode.com/posts')
//   .then(res => {
//     dispatch(getMasterPosts(res.data));
//     console.log(res.data);
//   })
// }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Posts
          <svg className="arrow arrow-right">
            <use xlinkHref="#arrow"></use>
          </svg>
        </h1>
        <h1>
          <svg className="arrow arrow-left">
            <use xlinkHref="#arrow"></use>
          </svg>
          Authors
        </h1>
        <button onClick={() => dispatchA(addA())}>A {countA}</button>
        <button onClick={() => dispatchB(addB())}>B {countB}</button>
      </header>
    </div>
  );
}

export default App;
