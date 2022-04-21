import './App.css';
import My1 from './Components/u/My1';
import My2 from './Components/u/My2';
import My3 from './Components/u/My3';
import Suo1 from './Components/u/Suo1';
import Suo2 from './Components/u/Suo2';
import Suo3 from './Components/u/Suo3';
import Suo4 from './Components/u/Suo4';
import Suo5 from './Components/u/Suo5';
const dogs = ['šuo', 'šunius', 'Bobikas', 'kudlius', 'Šarikas', 'avigalvis'];

function App() {
  return (
    <div className="App">
        <Suo1 dogs={dogs}></Suo1>
        <Suo2 dogs={dogs.slice().sort((a, b) => b.length - a.length)}></Suo2>
        <Suo3 dogs={dogs}></Suo3>
        <Suo4 dogs={dogs}></Suo4>
        <Suo5 dogs={dogs}></Suo5>
        <My1></My1>
        <My2></My2>
        <My3></My3>
		

    </div>
  );
}

export default App;