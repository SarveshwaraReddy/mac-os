import React from "react";
import MacWindow from "./MacWindow";

const Profile = ({ windowName, windowsState, setwindowsState }) => {
  return (
    <MacWindow
      windowName={windowName}
      windowsState={windowsState}
      setwindowsState={setwindowsState}
    >
      <div className="profile-header text-center text-2xl font-bold text-white mb-4 text-bold p-4" >About Me</div>
      <div className="profile-content text-center text-lg font-normal text-white mb-4 text-bold p-4" >
        <p>I’m an AI-augmented Full-Stack Developer graduating in 2026, specializing in high-velocity product shipping through vibe coding and agentic workflows.<br/> <br/> While I pilot AI agents to move at 10x speed, I’m deeply grounded in the MERN stack, which allows me to act as the "technical architect" who ensures every build is production-ready, secure, and scalable.</p>
      </div>

      <div className="profile-content text-center text-lg font-normal text-white mb-4 text-bold p-4" >
      <h2 className="text-2xl font-bold text-white mt-8 mb-4 text-bold p-4" ><br />Featured Projects</h2>
      <br /><strong>DevResilience Full-Stack Peer Support Platform:</strong> I’m currently building a dedicated ecosystem for developers to troubleshoot and collaborate. It’s built on a React and Node.js architecture, featuring real-time peer support tools and a high-performance UI designed to handle complex developer workflows.<br/> <br/> <strong>DrawVault | AI-Orchestrated Performance Engine:</strong> I built an AI-driven performance engine where I manually engineered a complex $50/30/20$ revenue split logic to ensure the financial data flow was bulletproof.<br/> <br/> <strong>NeuWrap | Immersive Frontend Architecture:</strong> I created a visually sophisticated web experience using React.js and GSAP, implementing scroll-triggered animations while optimizing assets to ensure smooth 60FPS performance.<br/> <br/> <strong>Action Hub | All-in-one Productivity Dashboard:</strong> I created a all-in-one productivity dashboard with customizable themes, daily goal tracking, motivational quotes, personalized task management, pomodoro timers, and weather updates.
      </div>
    </MacWindow>
  );
};

export default Profile;
