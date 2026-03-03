import React from "react";
import "./dock.scss"
const Dock = () => {
  return <footer className="dock">
    <div className="icon github"><img src="/doc-items/github.svg" alt="" /></div>
    <div className="icon note"><img src="/doc-items/note.svg" alt="" /></div>
    <div className="icon pdf"><img src="/doc-items/pdf.svg" alt="" /></div>
    <div className="icon calender"><img src="/doc-items/calender.svg" alt="" /></div>
    <div className="icon spotify"><img src="/doc-items/spotify.svg" alt="" /></div>
    <div className="icon mail"><img src="/doc-items/mail.svg" alt="" /></div>
    <div className="icon cli"><img src="/doc-items/cli.svg" alt="" /></div>
    <div className="icon link"><img src="/doc-items/link.svg" alt="" /></div>
  </footer>;
};

export default Dock;
