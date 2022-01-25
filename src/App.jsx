import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Movie } from "./modules/Movie";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Movie />
      </header>
    </div>
  );
}

export default App;
