import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Posts
          <svg className="arrow arrow-right">
            <use xlinkHref="#arrow"></use>
          </svg>
        </h1>
        <h1>
          <svg className="arrow arrow-left">
            <use xlinkHref="#arrow"></use>
          </svg>
          Authors
        </h1>
      </header>
    </div>
  );
}

export default App;
