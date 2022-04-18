import { useEffect, useReducer } from 'react';
import './App.css';
import usersReducer from './Reducers/usersReducer';
import axios from 'axios';
import { getUsersFromServer } from './Actions/users';




function App() {

    const [users, dispachUsers] = useReducer(usersReducer, []);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => dispachUsers(getUsersFromServer(res.data)));
    })

  return (
    <div className="App">

        <ul>
            {
                users.map(u => <li key={u.id}>{u.name}</li>)
            }
        </ul>

    </div>
  );
}

export default App;