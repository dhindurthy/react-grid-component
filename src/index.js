import React from "react";
import ReactDOM from "react-dom";
import GridComponentDemo from "./GridComponentDemo";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <GridComponentDemo />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
