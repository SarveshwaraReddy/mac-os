import React, { useState } from "react";
import "./dock.scss";
const Dock = ({ windowsState, setwindowsState }) => {
  return (
    <footer className="dock">
      <div
        onClick={() => {
          setwindowsState((state) => ({ ...state, github: true }));
        }}
        className="icon github"
      >
        <img src="/doc-items/github.svg" alt="" />
      </div>
      <div
        onClick={() => {
          setwindowsState((state) => ({ ...state, note: true }));
        }}
        className="icon note"
      >
        <img src="/doc-items/note.svg" alt="" />
      </div>
      <div
        onClick={() => {
          setwindowsState((state) => ({ ...state, pdf: true }));
        }}
        className="icon pdf"
      >
        <img src="/doc-items/pdf.svg" alt="" />
      </div>
      <div className="icon calender">
        <img src="/doc-items/calender.svg" alt="" />
      </div>
      <div
        onClick={() => {
          setwindowsState((state) => ({ ...state, spotify: true }));
        }}
        className="icon spotify"
      >
        <img src="/doc-items/spotify.svg" alt="" />
      </div>
      <div 
        onClick={() => {
          setwindowsState((state) => ({ ...state, mail: true }));
        }}
        className="icon mail"
      >
        <img src="/doc-items/mail.svg" alt="" />
      </div>
      <div className="icon cli">
        <img src="/doc-items/cli.svg" alt="" />
      </div>
      <div className="icon link">
        <img src="/doc-items/link.svg" alt="" />
      </div>
      <div className="icon profile">
        <img src="/doc-items/profile-icon.png" alt="" />
      </div>
    </footer>
  );
};

export default Dock;
