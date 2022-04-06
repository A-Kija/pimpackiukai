import './App.css';
import A from './Components/A';
import B from './Components/B';

function App() {
  return (
    <div className="App">
        <h1>RePEAT</h1>
        <A letter="A"></A>
        <B letter="B" letter1="C"></B>
    </div>
  );
}

export default App;