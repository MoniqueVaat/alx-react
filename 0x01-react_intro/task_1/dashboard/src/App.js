import logo from './logo.jpg';
import './App.css';
import { getFooterCopy, getFullYear } from './utils'; // Adjust the path accordingly
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </header>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
      </div>
      <div className="App-footer">
        <p>Copyright 2020 - holberton School</p>
        <p>
          Copyright {getFullYear()} - {getFooterCopy(isIndex)}
        </p>
      </div>
    </div>
  );
}

export default App;
