import React, { useEffect, useState, useRef } from "react";
import "./app.scss";
import DesktopBackground from "./components/DesktopBackground";
import WindowsManager from "./components/WindowsManager";
import Dock from "./components/Dock";
import Navbar from "./components/Navbar";
import Github from "./components/windows/Github";
import Spotify from "./components/windows/Spotify";
import Mail from "./components/windows/Mail";
import Profile from "./components/windows/Profile";
import Calender from "./components/windows/calender";
import defaultWall from "./assets/wall.jpeg";

const wallpaperLoaders = {
  github: () => import("./assets/download.jpeg"),
  spotify: () => import("./assets/download (1).jpeg"),
  mail: () => import("./assets/download (3).jpeg"),
  profile: () => import("./assets/download (3).jpg"),
};

const App = () => {
  const [windowsState, setwindowsState] = useState({
    github: false,
    spotify: false,
    calender: false,
    mail: false,
    profile: false,
  });

  const [activeApp, setActiveApp] = useState("");
  const [currentWall, setCurrentWall] = useState(defaultWall);
  const [loadedWallpapers, setLoadedWallpapers] = useState({});
  const [displayWall, setDisplayWall] = useState(defaultWall);
  const [fadeWall, setFadeWall] = useState("");
  const [isFading, setIsFading] = useState(false);

  const iconRefs = useRef({
    github: React.createRef(),
    calender: React.createRef(),
    spotify: React.createRef(),
    mail: React.createRef(),
    profile: React.createRef(),
  });

  const dockRef = useRef(null);

  const handleOpenWindow = (windowName, iconEl) => {
    setwindowsState((state) => ({ ...state, [windowName]: true }));
    setActiveApp(windowName);
    if (iconEl) {
      console.log('Flip ready:', iconEl.getBoundingClientRect());
    }
  };

  const onCloseWindow = (windowName) => {
    setwindowsState((state) => ({ ...state, [windowName]: false }));
  };

  const bringToFront = () => {
    console.log('bring to front called');
  };

  const handleResetDesktop = () => {
    setwindowsState({
      github: false,
      spotify: false,
      calender: false,
      mail: false,
      profile: false,
    });
    setActiveApp("");
    setCurrentWall(defaultWall);
  };

  // ... useEffect logic same as before ...

  useEffect(() => {
    const openApps = Object.keys(windowsState).filter((app) => windowsState[app]);
    if (!openApps.length) {
      setActiveApp("");
      return;
    }
    if (!activeApp || !windowsState[activeApp]) {
      setActiveApp(openApps[openApps.length - 1]);
    }
  }, [windowsState, activeApp]);

  useEffect(() => {
    if (!activeApp || activeApp === "calender") {
      setCurrentWall(defaultWall);
      return;
    }

    if (loadedWallpapers[activeApp]) {
      setCurrentWall(loadedWallpapers[activeApp]);
      return;
    }

    const loader = wallpaperLoaders[activeApp];
    if (!loader) {
      setCurrentWall(defaultWall);
      return;
    }

    let isCancelled = false;
    loader()
      .then((module) => {
        if (isCancelled) return;
        const wall = module?.default || defaultWall;
        setLoadedWallpapers((prev) => ({ ...prev, [activeApp]: wall }));
        setCurrentWall(wall);
      })
      .catch(() => {
        if (!isCancelled) {
          setCurrentWall(defaultWall);
        }
      });

    return () => {
      isCancelled = true;
    };
  }, [activeApp, loadedWallpapers]);

  useEffect(() => {
    if (currentWall === displayWall) return;

    setFadeWall(currentWall);
    setIsFading(true);

    const timeoutId = setTimeout(() => {
      setDisplayWall(currentWall);
      setIsFading(false);
      setFadeWall("");
    }, 450);

    return () => clearTimeout(timeoutId);
  }, [currentWall, displayWall]);

  return (
    <main>
      <DesktopBackground 
        displayWall={displayWall} 
        fadeWall={fadeWall} 
        isFading={isFading} 
      />
      <div className="desktop-content">
        <Navbar onOpenWindow={handleOpenWindow} onResetDesktop={handleResetDesktop} />
        <Dock
          ref={dockRef}
          iconRefs={iconRefs.current}
          windowsState={windowsState}
          setwindowsState={setwindowsState}
          onOpenWindow={handleOpenWindow}
        />
        <WindowsManager 
          windowsState={windowsState}
          setwindowsState={setwindowsState}
          bringToFront={bringToFront}
          onClose={onCloseWindow}
        />
      </div>
    </main>
  );
};

export default App;

