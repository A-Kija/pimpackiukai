import { useState } from 'react';
import './App.css';

import A from './Components/A';
import B from './Components/B';

function App() {

const [show, setShow] = useState(false);


const makeShow = doShow => {
  setShow(doShow);
}

  return (
    <div className="App">
        <h1>RePEAT 3</h1>

        <A makeShow={makeShow}></A>
        <B showBlue={show}></B>
    </div>
  );
}

export default App;