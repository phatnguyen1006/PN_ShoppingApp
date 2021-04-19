import React from "react";
// AppBar

import "./index.css";

function App() {
  const [color, setColor] = React.useState("green");

  return <h1 style={{ "color" : color }}>This is HOME!!!</h1>;
}

export default App;
