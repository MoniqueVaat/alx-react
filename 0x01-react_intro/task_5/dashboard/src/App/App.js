import React, { useRef } from "react";
import logo from "../assets/logo.jpg";
import "./App.css";
import { getFooterCopy, getFullYear } from "../utils/utils"; // Adjust the path accordingly
function App() {
  const emailRef = useRef(null)
  const passRef = useRef(null)
  const handleLabelClick = (inputRef) => {
    inputRef.current.focus();
  };
  const isIndex = true
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </header>
      <div className="App-body">
        <div>
          <label htmlFor="email" onClick={() => handleLabelClick(emailRef)}>
            Email:
          </label>
          <input type="email" id="email" ref={emailRef} />
        </div>
        <div>
          <label htmlFor="password" onClick={() => handleLabelClick(passRef)}>
            Password:
          </label>
          <input type="password" id="password" ref={passRef} />
        </div>
        <button>OK</button>
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
