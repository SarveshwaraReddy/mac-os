import React from "react";
import "./app.scss";
import Dock from "./components/Dock";
import Navbar from "./components/Navbar";
import MacWindow from "./components/windows/MacWindow";
const App = () => {
  return (
    <main>
      <Navbar />
      <Dock />
      <MacWindow />
    </main>
  );
};

export default App;
