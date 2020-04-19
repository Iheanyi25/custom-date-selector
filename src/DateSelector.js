import React, { useState } from "react";
import "./DateSelector.css";
import ToggleMonths from "./SelectorFunctions/ToggleMonths";

function DateSelector() {
  const [dateContainer, openContainer] = useState(false);

  const openDateContainer = () => {
    if (dateContainer === false) {
      openContainer(true);
    } else {
      openContainer(false);
    }
  };

  return (
    <div>
      <h1>
        CUSTOM<span>DATE</span>PICKER
      </h1>

      <div className="date-picker">
        <div className="selected-date" onClick={openDateContainer}>
          30 / 02 /2020
        </div>

        <div
          className={`${dateContainer === false ? "dates" : "dates active"}`}
        >
          <ToggleMonths />
          {/* <Dates/> */}
        </div>
      </div>
    </div>
  );
}

export default DateSelector;
