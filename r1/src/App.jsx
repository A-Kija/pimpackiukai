import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import TetaZita from './Components/routes/TetaZita';
import Monster from './Components/routes/Monster';

export const monsters = [
    { id: 8, type: 'Big Black' },
    { id: 74, type: 'Long Tail Monster' },
    { id: 13, type: 'Five Legs Freak' },
    { id: 99, type: 'Invisible Small Rat' },
    { id: 1478, type: 'Sweet White Kitty' },
];

export const tz = [
    {id: 1, what: 'miega'},
    {id: 2, what: 'valgo'},
    {id: 3, what: 'TV'}
];

function App() {
    return (
        <BrowserRouter>

            <div className="App">
                <h1>ROU-TER</h1>
                <Link to="/">Home Page</Link>
                <Link to="/dramblys">Dramblys</Link>
                <Link to="/pingvinas">Pingvinas</Link>
                <h1>Monsters</h1>
                {
                    monsters.map(m => <Link key={m.id} to={'/monsters/' + m.id}>{m.type}</Link>)
                }
                <h1>Zita</h1>
                {
                    tz.map(m => <Link key={m.id} to={'/zita/' + m.id}>{m.what}</Link>)
                }
            </div>

            <div className="kvc">
                <Routes>
                    <Route path="/" element={<h2>HOME</h2>}></Route>
                    <Route path="/dramblys" element={<div className="kv kv_3">DRABLIUS</div>}></Route>
                    <Route path="/pingvinas" element={<div className="kv kv_1">PINVIUS</div>}></Route>
                    <Route path="/monsters/:id" element={<Monster></Monster>}></Route>
                    <Route path="/zita/:id" element={<TetaZita></TetaZita>}></Route>
                    <Route path="*" element={<h2>404 NOT FOUND</h2>}></Route>
                </Routes>
            </div>

        </BrowserRouter>
    );
}

export default App;