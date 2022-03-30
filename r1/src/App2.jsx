import './App.css';
import Africa from './Components/Africa';
import Animal from './Components/Animal';
import Auto from './Components/Auto';
import BlueRed from './Components/BlueRed';
import PonasPropsas from './Components/PonasPropsas';

function App() {
  return (
    <div className="App">
        <PonasPropsas color="pink" size="20px"></PonasPropsas>
        <PonasPropsas color="blue" size="35px"></PonasPropsas>
        <Africa animal="krokodilas" color="yellow" text={{o:'bannana'}}></Africa>
        <Africa animal="žirafa" color="green" text={{o:'palm'}}></Africa>
        <Animal animal="makaka"></Animal>
        <Auto maker1="Volovo"></Auto>
        <Auto maker1="Opel"></Auto>
        <Auto maker1="Kamaz"></Auto>
        <BlueRed color="B"></BlueRed>
        <BlueRed color="C"></BlueRed>
        <BlueRed color="R"></BlueRed>
    </div>
  );
}

export default App;