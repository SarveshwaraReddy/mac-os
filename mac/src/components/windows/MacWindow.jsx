import React from "react";
import { Rnd } from "react-rnd";
import './window.scss'
import Title from "../../templates/Title";

const MacWindow = ({children , height='60vh',width='30vw' ,windowName, setwindowsState}) => {
  return (
    <Rnd
    default={{
      width:width,
      height:height,
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
            
        </div>
        <div className="main-content">{children}</div>
      </div>
    </Rnd>
  );
};

export default MacWindow;
