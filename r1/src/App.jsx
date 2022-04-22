import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>

            <div className="App">
                <h1>ROU-TER</h1>
                <Link to="/">Home Page</Link>
                <Link to="/dramblys">Dramblys</Link>
                <Link to="/pingvinas">Pingvinas</Link>
            </div>

            <div className="kvc">
            <Routes>
                <Route path="/" element={<h2>HOME</h2>}></Route>
                <Route path="/dramblys" element={<div className="kv kv_3">DRABLIUS</div>}></Route>
                <Route path="/pingvinas" element={<div className="kv kv_1">PINVIUS</div>}></Route>
                <Route path="*" element={<h2>404 NOT FOUND</h2>}></Route>
            </Routes>
            </div>

        </BrowserRouter>
    );
}

export default App;