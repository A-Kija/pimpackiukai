import { useState } from 'react';
import './App.css';

import A from './Components/A';
import B from './Components/B';

function App() {

  const virvute = duomenys => {
    setKvadratoSpalva(duomenys ? 'green' : 'blue')
  }

  const [kvadratoSpalva, setKvadratoSpalva] = useState('green');
  return (
    <div className="App">
        <h1>RePEAT 3</h1>

        <A virvute={virvute}></A>
        <B kvadratoSpalva={kvadratoSpalva}></B>

    </div>
  );
}

export default App;