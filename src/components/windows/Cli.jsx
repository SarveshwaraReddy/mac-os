import React from "react";
import MacWindow from "./MacWindow";
import "./cli.css";

const Cli = ({ windowName, windowsState, setwindowsState }) => {
  return (
    <MacWindow
      windowName={windowName}
      windowsState={windowsState}
      setwindowsState={setwindowsState}
      height="55vh"
      width="45vw"
    >
      <div className="cli-window">
        <div className="cli-header">Terminal</div>
        <pre className="cli-body">
{`$ whoami
Sarveshwara Reddy

$ role
Frontend Developer

$ skills --top
HTML, CSS, SCSS, Tailwind CSS, JavaScript, React, Three.js

$ location
Hyderabad, India

$ status
Open to opportunities and collaborations.`}
        </pre>
      </div>
    </MacWindow>
  );
};

export default Cli;
