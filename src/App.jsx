import React from "react";
import "./App.css";
import { DisplayGraph } from "./components/sigma";

const App = () => {
  React.useState(() => {
    console.log("Hello there");
  });

  return (
    <div className="container-graph">
      <DisplayGraph />
    </div>
  );
};

export default App;
