import React, { useState } from "react";
import "./app.scss";
import Dock from "./components/Dock";
import Navbar from "./components/Navbar";
import Github from "./components/windows/Github";
import Note from "./components/Note";
import Spotify from "./components/windows/Spotify";
import Pdf from "./components/windows/Pdf";
import Mail from "./components/windows/Mail";
const App = () => {
  const [windowsState, setwindowsState] = useState({
    github: false,
    note: false,
    spotify: false,
    pdf: false,
    mail: false,
  });
  return (
    <main>
      <Navbar />
      <Dock windowsState={windowsState} setwindowsState={setwindowsState} />
      {windowsState.github && <Github windowName="github" windowsState={windowsState} setwindowsState={setwindowsState}/>}
      {windowsState.note && <Note windowName="note" windowsState={windowsState} setwindowsState={setwindowsState}/>}
      {windowsState.spotify && <Spotify windowName="spotify" windowsState={windowsState} setwindowsState={setwindowsState}/>}
      {windowsState.pdf && <Pdf windowName="pdf" windowsState={windowsState} setwindowsState={setwindowsState}/>}
      {windowsState.mail && <Mail windowName="mail" windowsState={windowsState} setwindowsState={setwindowsState}/>}

    </main>
  );
};

export default App;
