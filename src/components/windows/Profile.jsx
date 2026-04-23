import React from "react";
import MacWindow from "./MacWindow";

const Profile = ({ windowName, windowsState, setwindowsState }) => {
  return (
    <MacWindow
      windowName={windowName}
      windowsState={windowsState}
      setwindowsState={setwindowsState}
    >
      <div style={{ padding: "1rem", color: "#fff" }}>
        <p>note.txt address: /note.txt</p>
      </div>
    </MacWindow>
  );
};

export default Profile;
