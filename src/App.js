import React from "react";
import Weather from "./Weather";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Weather Search Engine Homework</h1>
      <Weather />
      <p>
        <a
          className="open-source"
          href="https://github.com/KendraLa/weather-search-engine-project"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open-source code
        </a>
        , by Kendra Lambillon
      </p>
    </div>
  );
}

export default App;
