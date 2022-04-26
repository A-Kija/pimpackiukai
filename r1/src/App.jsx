import './App.css';
import MonstersRoute from './Components/monsters/MonstersRoute';
import { monsters, monstersPerPage } from './Data/monsters';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

    return (
        <>
        <BrowserRouter>
            <Routes>
                <Route path={'/:pageNow'} element={<MonstersRoute monsters={monsters} monstersPerPage={monstersPerPage}></MonstersRoute>}></Route>
            </Routes>
        </BrowserRouter>
        </>
    );
}
export default App;