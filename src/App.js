import React from "react";
import Weather from "./Weather";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Weather Search Engine Homework</h1>
      <Weather />
      <a
        className="open-source"
        href=""
        target="_blank"
        rel="noopener noreferrer"
      >
        <p>Open-source</p>
        by Kendra Lambillon
      </a>
    </div>
  );
}

export default App;
