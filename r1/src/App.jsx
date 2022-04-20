import './App.css';
import Suo1 from './Components/u/Suo1';
import Suo2 from './Components/u/Suo2';
import Suo3 from './Components/u/Suo3';
import Suo4 from './Components/u/Suo4';
const dogs = ['šuo', 'šunius', 'Bobikas', 'kudlius', 'Šarikas', 'avigalvis'];

function App() {
  return (
    <div className="App">
        <Suo1 dogs={dogs}></Suo1>
        <Suo2 dogs={dogs.slice().sort((a, b) => b.length - a.length)}></Suo2>
        <Suo3 dogs={dogs}></Suo3>
        <Suo4 dogs={dogs}></Suo4>
    </div>
  );
}

export default App;