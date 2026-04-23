import React from "react";
import MacWindow from "./MacWindow";
import "./mail.css";

const Mail = ({ windowName, windowsState, setwindowsState }) => {
  return (
    <div>
      <MacWindow
        windowName={windowName}
        windowsState={windowsState}
        setwindowsState={setwindowsState}
      >
        <div className="mail-box">
          <h1>Reach Out</h1>
          <div className="box">
            <div className="box one">
              <a href="mailto:sarveshwarareddy9@gmail.com" target="_blank" rel="noreferrer">
                <i className="ri-mail-fill"></i>
              </a>
            </div>
            <div className="box two">
              <a
                href="https://www.linkedin.com/in/sarveshwara-reddy-722384323"
                target="_blank"
                rel="noreferrer"
              >
                <i className="ri-linkedin-fill"></i>
              </a>
            </div>
            <div className="box three">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="ri-github-fill"></i>
              </a>
            </div>
          </div>
        </div>
      </MacWindow>
    </div>
  );
};

export default Mail;
