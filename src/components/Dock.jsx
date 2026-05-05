import React from "react";
import "./dock.scss";
const Dock = React.forwardRef(({ windowsState, setwindowsState, onOpenWindow, iconRefs }, ref) => {
  const openWindow = (windowName, iconRef) => {
    if (onOpenWindow) {
      onOpenWindow(windowName, iconRef);
      return;
    }
    setwindowsState((state) => ({ ...state, [windowName]: true }));
  };

  return (
    <footer className="dock" ref={ref}>
      <div
        ref={iconRefs.github}
        onClick={() => openWindow("github", iconRefs.github.current)}
        className="icon github"
      >
<img src="/doc-items/github.svg" alt="" />
      </div>
      <div
        ref={iconRefs.calender}
        onClick={() => openWindow("calender", iconRefs.calender.current)}
        className="icon calender"
      >
        <img src="/doc-items/calender.svg" alt="" />
      </div>
      <div
        ref={iconRefs.spotify}
        onClick={() => openWindow("spotify", iconRefs.spotify.current)}
        className="icon spotify"
      >
<img src="/doc-items/spotify.svg" alt="" />
      </div>
      <div 
        ref={iconRefs.mail}
        onClick={() => openWindow("mail", iconRefs.mail.current)}
        className="icon mail"
      >
        <img src="/doc-items/mail.svg" alt="" />
      </div>
      <div
        ref={iconRefs.profile}
        onClick={() => openWindow("profile", iconRefs.profile.current)}
        className="icon profile"
      >
      <i className="ri-user-3-fill"></i>
      </div>
    </footer>
  );
});

Dock.displayName = 'Dock';


export default Dock;
