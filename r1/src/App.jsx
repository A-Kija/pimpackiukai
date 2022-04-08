import { useState } from 'react';
import './App.css';

import A from './Components/A';
import B from './Components/B';

function App() {

  const virvute = duomenys => {
    setMelynosRaides(duomenys)
  }

  const [melynosRaides, setMelynosRaides] = useState('tuscia');
  return (
    <div className="App">
        <h1>RePEAT 3</h1>

        <A virvute={virvute}></A>
        <B melynosRaides={melynosRaides}></B>

    </div>
  );
}

export default App;