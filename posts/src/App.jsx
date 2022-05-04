import { useEffect, useReducer } from 'react';
import axios from 'axios';
import masterReducer from './Reducers';
import './App.css';
import { getMasterPosts } from './Actions';

function App() {

const [masterPosts, dispach] = useReducer(masterReducer, []);

useEffect(() => {
  axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(res => {
    dispach(getMasterPosts(res.data));
    console.log(res.data);
  })
}, []);

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
      </header>
    </div>
  );
}

export default App;
