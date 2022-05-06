import { useEffect, useReducer } from 'react';
import axios from 'axios';
import masterReducer from './Reducers';
import './App.css';
import { getMasterPosts, getMasterAuthors } from './Actions';

function App() {

const [masterPosts, dispatch] = useReducer(masterReducer, new Map());
const [masterAuthors, dispatchA] = useReducer(masterReducer, new Map());

useEffect(() => {
  axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(res => {
    dispatch(getMasterPosts(res.data));
    
  })
}, []);

useEffect(() => {
  axios.get('https://jsonplaceholder.typicode.com/users')
  .then(res => {
    dispatchA(getMasterAuthors(res.data));
    
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
      <div className="posts-list">
        {
          [...masterPosts].map(p => <div key={p[0]}><h6>
            {masterAuthors.has(p[1].userId) ? masterAuthors.get(p[1].userId).name : '-'}</h6>
            {p[1].title}</div>)
        }
      </div>
      <div className="authors-list">
        {
          [...masterAuthors].map(p => <div key={p[0]}>{p[1].name}</div>)
        }
      </div>
    </div>
  );
}

export default App;
