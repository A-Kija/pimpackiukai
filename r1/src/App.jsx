import './App.css';
import Kvadratukai from './Components/Kvadratukai';
import State from './Components/State';

const mas = [
    <div key="a">A</div>,
    <div key="bla">B</div>,
    <div key="2222">C</div>
];

const mas3 = ['Pilkis', 'Murka', 'Mulkis'];

function App() {
  return (
    <div className="App">
        {
            // mas3.map((k, i) => <h2 key={i}>{k}</h2>)
        }
        {/* <State c="green" hello="Sveikutė, Silkutė"></State> */}
        <Kvadratukai></Kvadratukai>

    </div>
  );
}

export default App;