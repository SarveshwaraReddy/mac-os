import React, { useEffect, useRef, useState } from "react";
import "./nav.scss";
import DateTime from "./DateTime";

const Navbar = ({ onOpenWindow, onResetDesktop }) => {
  const [isWifiOn, setIsWifiOn] = useState(true);
  const [openMenu, setOpenMenu] = useState("");
  const navRef = useRef(null);

  const handleWifiToggle = () => {
    setIsWifiOn((state) => !state);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenMenu("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMenu = (menuName) => {
    setOpenMenu((menu) => (menu === menuName ? "" : menuName));
  };

  const runMenuAction = (action) => {
    action();
    setOpenMenu("");
  };

  return (
    <nav ref={navRef}>
      <div className="left">
        <div className="apple-icon nav-item" onClick={onResetDesktop}>
          <img src="/doc-items/apple.svg" alt="" />
        </div>
        <button className="nav-item" onClick={onResetDesktop}>
          MSR
        </button>
        <div className="menu-wrap">
        <button className="nav-item" onClick={() => toggleMenu("file")}>
          File
        </button>
        {openMenu === "file" && (
          <div className="dropdown-menu">
            <button onClick={() => runMenuAction(() => onOpenWindow?.("github"))}>Open Projects</button>
            <button onClick={() => runMenuAction(() => onOpenWindow?.("mail"))}>Open Mail</button>
            <button onClick={() => runMenuAction(() => onOpenWindow?.("profile"))}>Open Profile</button>
          </div>
        )}
        </div>

        <div className="menu-wrap">
        <button className="nav-item" onClick={() => toggleMenu("window")}>
          Window
        </button>
        {openMenu === "window" && (
          <div className="dropdown-menu">
            <button onClick={() => runMenuAction(() => onOpenWindow?.("spotify"))}>Open Music</button>
            <button onClick={() => runMenuAction(() => onOpenWindow?.("calender"))}>Open Calendar</button>
            <button onClick={() => runMenuAction(() => onResetDesktop?.())}>Close All Windows</button>
          </div>
        )}
        </div>
        <button className="nav-item" onClick={() => onOpenWindow?.("spotify")}>
          Music
        </button>
      </div>
      <div className="right">
        <button
          className={`nav-icon nav-item ${isWifiOn ? "wifi-on" : "wifi-off"}`}
          onClick={handleWifiToggle}
          title={isWifiOn ? "Wi-Fi On" : "Wi-Fi Off"}
        >
          <img src="/doc-items/wifi.svg" alt="" />
        </button>
        <div className="nav-item">
          <DateTime />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;