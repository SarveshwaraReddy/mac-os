import React, { useEffect, useState } from "react";
import Markdown from "react-markdown";
import MacWindow from "./windows/MacWindow";
import rehypeRaw from "rehype-raw";
import './note.scss'
const Note = ({windowName,windowsState, setwindowsState}) => {
  const [markDown, setmarkDown] = useState(null);

  useEffect(() => {
    fetch("/note.txt")
      .then((res) => res.text())
      .then((text) => setmarkDown(text));
  }, []);
  return (
    <MacWindow windowName={windowName} windowsState={windowsState} setwindowsState={setwindowsState}>
      <div className="note-window">
        {markDown ? <Markdown rehypePlugins={[rehypeRaw]}>{markDown}</Markdown> : <p>Loading....</p>}
      </div>
    </MacWindow>
  );
};

export default Note;
