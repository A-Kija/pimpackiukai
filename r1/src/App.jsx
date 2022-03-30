import './App.css';
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
            mas3.map((k, i) => <h2 key={i}>{k}</h2>)
        }
        <State hello="Sveikutė, Silkutė"></State>
    </div>
  );
}

export default App;