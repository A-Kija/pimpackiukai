import './App.css';
import Africa from './Components/Africa';
import PonasPropsas from './Components/PonasPropsas';

function App() {
  return (
    <div className="App">
        <PonasPropsas color="pink" size="20px"></PonasPropsas>
        <PonasPropsas color="blue" size="35px"></PonasPropsas>
        <Africa animal="krokodilas" color="yellow" text={{o:'bannana'}}></Africa>
        <Africa animal="žirafa" color="green" text={{o:'palm'}}></Africa>
    </div>
  );
}

export default App;