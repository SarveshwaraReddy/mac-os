import React from "react";
import { Rnd } from "react-rnd";
import './window.scss'

const MacWindow = ({children}) => {
  return (
    <Rnd
      default={{ x: 0, y: 0, width: 600, height: 400 }}
      minWidth={300}
      minHeight={300}
      bounds="parent"
      enableResizing={{
        top: true,
        right: true,
        bottom: true,
        left: true,
        topRight: true,
        bottomRight: true,
        bottomLeft: true,
        topLeft: true,
      }}
      dragHandleClassName="nav"
    >
      <div className="window">
        <div className="nav">
            <div className="dots">
                <div className="dot red"></div>
                <div className="dot yellow"></div>
                <div className="dot green"></div>
            </div>
            <div className="title">sarve ~ zsh</div>
        </div>
        <div className="main-content">{children}</div>
      </div>
    </Rnd>
  );
};

export default MacWindow;
