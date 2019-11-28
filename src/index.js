import React from "react";
import ReactDOM from "react-dom";

import Workspace from "./components/Screens/Workspace";

function App() {
  return (
    <div className="App">
      <Workspace />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
