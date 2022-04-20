import './App.css';
import Suo1 from './Components/u/Suo1';
import Suo2 from './Components/u/Suo2';
const dogs = ['šuo', 'šunius', 'Bobikas', 'kudlius', 'Šarikas', 'avigalvis'];

function App() {
  return (
    <div className="App">
        <Suo1 dogs={dogs}></Suo1>
        <Suo2 dogs={dogs.slice().sort((a, b) => b.length - a.length)}></Suo2>
    </div>
  );
}

export default App;