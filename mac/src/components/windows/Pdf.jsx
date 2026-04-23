import React from 'react'
import MacWindow from './MacWindow'
import "./mail.css";
const pdf = ({windowName,windowsState, setwindowsState}) => {
  return (
    <div>
        <MacWindow windowName={windowName} windowsState={windowsState} setwindowsState={setwindowsState}>
          <div className="mail-box">
            <h1>Resume</h1>
            <p>Frontend Developer profile and project details are available on the live portfolio.</p>
            <div className="box">
              <div className="box one">
                <a href="https://sarveshwarareddy-portfolio.netlify.app/" target="_blank" rel="noreferrer">
                  <i className="ri-external-link-line"></i>
                </a>
              </div>
              <div className="box two">
                <a href="mailto:sarveshwarareddy9@gmail.com" target="_blank" rel="noreferrer">
                  <i className="ri-mail-send-line"></i>
                </a>
              </div>
            </div>
          </div>
        </MacWindow>
    </div>
  )
}

export default pdf