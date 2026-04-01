import React, { useState } from "react";
import "./app.scss";
import Dock from "./components/Dock";
import Navbar from "./components/Navbar";
import Github from "./components/windows/Github";
import Note from "./components/Note";
import Spotify from "./components/windows/Spotify";
const App = () => {
  const [windowsState, setwindowsState] = useState({
    github: false,
    note: false,
    spotify: false,
  });
  return (
    <main>
      <Navbar />
      <Dock windowsState={windowsState} setwindowsState={setwindowsState} />
      {windowsState.github && <Github windowName="github" windowsState={windowsState} setwindowsState={setwindowsState}/>}
      {windowsState.note && <Note windowName="note" windowsState={windowsState} setwindowsState={setwindowsState}/>}
      {windowsState.spotify && <Spotify windowName="spotify" windowsState={windowsState} setwindowsState={setwindowsState}/>}
    </main>
  );
};

export default App;
