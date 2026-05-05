import React from 'react';
import Github from './windows/Github';
import Spotify from './windows/Spotify';
import Mail from './windows/Mail';
import Profile from './windows/Profile';
import Calender from './windows/calender';

const WindowsManager = ({ windowsState, setwindowsState, bringToFront, onClose }) => {
  const windowComponents = {
    github: Github,
    spotify: Spotify,
    calender: Calender,
    mail: Mail,
    profile: Profile,
  };

  const renderedWindows = Object.keys(windowsState).filter(key => windowsState[key]).map((windowName) => {
    const WindowComp = windowComponents[windowName];
    if (!WindowComp) return null;
    return (
      <WindowComp 
        key={windowName}
        windowName={windowName}
        windowsState={windowsState}
        setwindowsState={setwindowsState}
        windowId={windowName}
        bringToFront={bringToFront}
        onClose={onClose}
      />
    );
  });

  return (
    <div className="windows-manager">
      {renderedWindows}
    </div>
  );
};

export default WindowsManager;

