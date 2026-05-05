import React, { useEffect, useMemo, useState } from "react";
import MacWindow from "./MacWindow";
import "./calender.css";

const weekdayLabels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const Calender = ({ windowName, windowsState, setwindowsState }) => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const calendarCells = useMemo(() => {
    const year = now.getFullYear();
    const month = now.getMonth();

    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const totalDaysInMonth = new Date(year, month + 1, 0).getDate();

    const cells = [];
    for (let i = 0; i < firstDayOfMonth; i += 1) cells.push(null);
    for (let day = 1; day <= totalDaysInMonth; day += 1) cells.push(day);

    while (cells.length % 7 !== 0) cells.push(null);
    return cells;
  }, [now]);

  const todayDate = now.getDate();
  const currentDay = now.toLocaleDateString("en-US", { weekday: "long" });
  const currentDate = now.toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const liveTime = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  const monthLabel = now.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  return (
    <MacWindow
      windowName={windowName}
      windowsState={windowsState}
      setwindowsState={setwindowsState}
      width="42vw"
      height="68vh"
    >
      <div className="calendar-window">
        <div className="calendar-header">
          <h2>{monthLabel}</h2>
          <p className="live-time">{liveTime}</p>
        </div>

        <div className="today-chip">
          <p className="day">{currentDay}</p>
          <p className="date">{currentDate}</p>
        </div>

        <div className="weekdays">
          {weekdayLabels.map((label) => (
            <span key={label}>{label}</span>
          ))}
        </div>

        <div className="dates-grid">
          {calendarCells.map((day, index) => (
            <div
              key={`${day || "blank"}-${index}`}
              className={`date-cell ${day === todayDate ? "today" : ""} ${
                day ? "" : "empty"
              }`}
            >
              {day || ""}
            </div>
          ))}
        </div>
      </div>
    </MacWindow>
  );
};

export default Calender;
