import React from "react";
import { Rnd } from "react-rnd";
import './window.scss'

const MacWindow = ({children , height='40vh',width='80vw' ,windowName, setwindowsState}) => {
  return (
    <Rnd
    default={{
      width:height,
      height:width,
      x:200,
      y:100
    }}
    >
      <div className="window">
        <div className="nav">
            <div className="dots">
                <div
                onClick={()=> setwindowsState(state=>({...state, [windowName]:false}))}                
                className="dot red"></div>
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
