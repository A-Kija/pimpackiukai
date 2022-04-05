import './App.css';
import Mygtukas from './Components/Mygtukas';
import {useState} from 'react';
import H2 from './Components/H2';
import Kv from './Components/Kv';

function App() {


    const [sk, setSk] = useState(0);
    const [kv, setKv] = useState([]);

    const add = () => {
        setSk(s => {
          setKv(k => {
            return k.map(_ => s + 1)
          });
          return s + 1;
      });
    }

    const addKv = () => {
        setKv(k => [...k, sk * 3]);
    }


  return (
    <div className="App">
        <h1>STaTE UPLiFTiNG</h1>
        <H2 skaicius={sk}></H2>
        <Mygtukas sniurelis={add} sniurelis2={addKv} count={kv.length}></Mygtukas>
        <Kv kv={kv}></Kv>
      </div>
  );
}

export default App;