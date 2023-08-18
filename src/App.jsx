import React from "react";
import "./App.css";
import { MiniDrawer } from "./muiDrawer";
import { DisplayGraph } from "./components/sigma";
import { SignIn } from "./components/login";

const App = () => {
  const [data, setData] = React.useState("");

  return (
    <>
      <MiniDrawer>
        <DisplayGraph />
      </MiniDrawer>
    </>
  );
};

export default App;
