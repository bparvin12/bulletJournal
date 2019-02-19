import React from "react";

import Calendar from "./Calendar";

import "./CompleteCalendar.css";

class CompleteCalendar extends React.Component {
  render() {
    return (
      <div className="calendar">
        <main>
          <Calendar />
        </main>
      </div>
    );
  }
}

export default CompleteCalendar;