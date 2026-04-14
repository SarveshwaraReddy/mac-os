import React, { useEffect, useState } from "react";
import Markdown from "react-markdown";
import MacWindow from "./windows/MacWindow";
import rehypeRaw from "rehype-raw";
import './note.scss'
const Note = () => {
  const [markDown, setmarkDown] = useState(null);

  useEffect(() => {
    fetch("/note.txt")
      .then((res) => res.text())
      .then((text) => setmarkDown(text));
  }, []);
  return (
    <MacWindow>
      <div className="note-window">
        {markDown ? <Markdown rehypePlugins={[rehypeRaw]}>{markDown}</Markdown> : <p>Loading....</p>}
      </div>
    </MacWindow>
  );
};

export default Note;
