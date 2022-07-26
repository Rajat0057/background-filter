import React from "react";
import Filter from "../src/Components/Filter/Filter";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h3 className="text">Manual editing for your photo is complete now.</h3>
      <div className="text-2">
        <h2>
          You can <span className="color">download </span>your photo.{" "}
        </h2>
      </div>
      <Filter />
    </div>
  );
}

export default App;
