import './App.css';
import Senelis from './Components/Senelis';
import { useState } from 'react';
import SenelioZinios from './Contexts/SenelioZinios';
import SenelioZinios2 from './Contexts/SenelioZinios2';

function App() {

    const [kaSakoSenelis, keistiKaSakoSenelis] = useState(0);
    const [kaSakoSenelis2, keistiKaSakoSenelis2] = useState(0);

    return (
        <div className="App">
            <h1>{kaSakoSenelis} {kaSakoSenelis2}</h1>
            <button onClick={() => {
                keistiKaSakoSenelis(c => c + 1);
                keistiKaSakoSenelis2(c => c + 333);
            }
            }>Sakyk, Seneli</button>

            <SenelioZinios.Provider value={kaSakoSenelis}>
            <SenelioZinios2.Provider value={kaSakoSenelis2}>
    
                <Senelis></Senelis>

            </SenelioZinios2.Provider>
            </SenelioZinios.Provider>

        </div>
    );
}

export default App;