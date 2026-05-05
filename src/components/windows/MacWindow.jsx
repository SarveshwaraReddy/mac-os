import React, { useRef } from "react";
import { Rnd } from "react-rnd";
import './window.scss';

const MacWindow = ({children, height='60vh', width='30vw', windowId, bringToFront, onClose, windowName, windowsState, setwindowsState}) => {
  const windowRef = useRef(null);

  const closeWindow = (e) => {
    e.stopPropagation();
    if (onClose && windowId) {
      onClose(windowId);
    } else if (setwindowsState && windowName) {
      setwindowsState(state => ({...state, [windowName]: false}));
    }
  };

  const bringForward = () => {
    if (bringToFront && windowId) {
      bringToFront(windowId);
    }
  };

  const handleStart = () => {
    bringForward();
    if (windowRef.current) {
      windowRef.current.style.backdropFilter = 'none';
      windowRef.current.style.transform = 'translateZ(0)';
    }
  };

  const handleComplete = () => {
    if (windowRef.current) {
      windowRef.current.style.backdropFilter = 'blur(20px)';
    }
  };

  return (
    <Rnd
      default={{
        width,
        height,
        x: 200,
        y: 100
      }}
      onDragStart={handleStart}
      onResizeStart={handleStart}
      onDragStop={handleComplete}
      onResizeStop={handleComplete}
    >
      <div ref={windowRef} className="window" data-window-id={windowId} style={{willChange: 'transform', transform: 'translateZ(0)'}}>
        <div 
          className="nav" 
          onMouseDown={bringForward}
        >
          <div className="dots">
            <div
              onClick={closeWindow}
              className="dot red"
            />
            <div className="dot yellow"/>
            <div className="dot green"/>
          </div>
        </div>
        <div className="main-content">{children}</div>
      </div>
    </Rnd>
  );
};

export default MacWindow;

