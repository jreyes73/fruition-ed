import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div className='thumbnail'>
        <div className='old-macdonald-thumbnail'><p>Old Macdonald Had A Farm</p>
        </div>
        <h1>Old Macdonald Had A Farm</h1>
        <p>Sprout Series</p>
        <p>Story description here</p>
      </div>
    </div>
  );
}

export default App;
