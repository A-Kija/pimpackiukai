import './App.css';
import Mygtukas from './Components/Mygtukas';
import {useState} from 'react';
import H2 from './Components/H2';

function App() {


    const [sk, setSk] = useState(0);

    const add = () => {
        setSk(s => s + 1);
    }


  return (
    <div className="App">
        <h1>STaTE UPLiFTiNG</h1>
        <H2 skaicius={sk}></H2>
        <Mygtukas sniurelis={add}></Mygtukas>

    </div>
  );
}

export default App;