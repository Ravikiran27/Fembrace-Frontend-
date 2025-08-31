import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./calendar.css";

const MenstrualCalendar = () => {
  const [startDate, setStartDate] = useState(null);
  const [cycleLength, setCycleLength] = useState(28);
  const [periodLength, setPeriodLength] = useState(5);

  const getPeriodDates = (baseDate, cycles = 0) => {
    if (!baseDate) return [];
    let dates = [];
    let start = new Date(baseDate);
    start.setDate(start.getDate() + cycles * cycleLength);

    for (let i = 0; i < periodLength; i++) {
      dates.push(new Date(start.getFullYear(), start.getMonth(), start.getDate() + i));
    }
    
    return dates;
  };

  const currentPeriodDates = getPeriodDates(startDate, 0);
  const nextPeriodDates = getPeriodDates(startDate, 1);
  const followingPeriodDates = getPeriodDates(startDate, 2);

  const getMonthName = (offset) => {
    const today = new Date();
    const month = new Date(today.getFullYear(), today.getMonth() + offset, 1);
    return month.toLocaleString("default", { month: "long" });
  };

  const tileClassName = ({ date, view }) => {
    if (view === "month" && startDate) {
      const dateString = date.toDateString();

      if (currentPeriodDates.some((d) => d.toDateString() === dateString)) return "current-period";
      if (nextPeriodDates.some((d) => d.toDateString() === dateString) || 
          followingPeriodDates.some((d) => d.toDateString() === dateString)) return "predicted-period";
    }
  };

  return (
    <div className="calendar-container">
      <div className="input-section">
        <div className="input-box">
          <label>Start Date:</label>
          <input 
            type="date" 
            onChange={(e) => setStartDate(new Date(e.target.value))} 
          />
        </div>

        <div className="input-box">
          <label>Cycle Length (days):</label>
          <input 
            type="number" 
            value={cycleLength} 
            onChange={(e) => setCycleLength(Number(e.target.value))} 
            min="21" max="35"
          />
        </div>

        <div className="input-box">
          <label>Period Length (days):</label>
          <input 
            type="number" 
            value={periodLength} 
            onChange={(e) => setPeriodLength(Number(e.target.value))} 
            min="3" max="10"
          />
        </div>
      </div>

      <div className="calendar-grid">
        <div className="calendar-box">
          <h3>{getMonthName(0)}</h3>
          <Calendar tileClassName={tileClassName} />
        </div>
      </div>
    </div>
  );
};

export default MenstrualCalendar;
