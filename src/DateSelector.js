import React, { useState, useEffect } from "react";
import "./DateSelector.css";

let date = new Date();
let day = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();

function DateSelector() {
  const [dateContainer, openContainer] = useState(false);

  const openDateContainer = () => {
    if (dateContainer === false) {
      openContainer(true);
    } else {
      openContainer(false);
    }
  };

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const [newMonth, setnewMonth] = useState(months[month] + " " + year);
  const [currentDay, setCurrentDay] = useState(day);
  const [currentMonth, setCurrMonth] = useState(month);
  const [currentYear, setcurrentYear] = useState(year)
  const [displayDate, setdisplayDate] = useState(
    "0" + day + " / " + (month + 1) + " / " + year
  );

  const selectDay = (day) => {
    setCurrMonth(month);
    setCurrentDay(day);
    setcurrentYear(year);
  };

  let amount_days = 31;
  if (month === 1) {
    if (year % 4 === 0 && year !== 0) {
      amount_days = 29;
    } else {
      amount_days = 28;
    }
  } else if (month === 3 || month === 5 || month === 8 || month === 10) {
    amount_days = 30;
  }

  let dateHolder = [];
  for (let i = 0; i < amount_days; i++) {
    let days = i + 1;
    dateHolder.push(days);
  }

  // Formatted Date for view
  const formatDate = () => {
    if (currentDay < 10 && currentMonth + 1 > 9) {
      setdisplayDate("0" + currentDay + " / " + (currentMonth + 1) + " / " + currentYear);
    } else if (currentDay > 9 && currentMonth + 1 < 10) {
      setdisplayDate(currentDay + " / " + "0" + (currentMonth + 1) + " / " + currentYear);
    } else {
      setdisplayDate("0" + currentDay + " / " + "0" + (currentMonth + 1) + " / " + currentYear);
    }
  };

  useEffect(() => {
    formatDate();
  }, [selectDay]);

  //Function for going to the previous month
  const clickPrevMonth = () => {
    month--;
    if (month < 0) {
      month = 11;
      year--;
    }
    setnewMonth(months[month] + " " + year);
  };

  //Function for going to the next month
  const ClickNextMonth = () => {
    month += +1;
    if (month > 11) {
      month = 0;
      year++;
    }
    setnewMonth(months[month] + " " + year);
  };

  return (
    <div>
      <h1>
        CUSTOM<span>DATE</span>PICKER
      </h1>

      <div className="date-picker">
        <div className="selected-date" onClick={openDateContainer}>
          {/* {day + " / " + "0" + (month + 1) + " / " + year} */}
          {displayDate}
        </div>

        <div
          className={`${dateContainer === false ? "dates" : "dates active"}`}
        >
          <div className="month">
            <div className="arrows prev-mth" onClick={clickPrevMonth}>
              &lt;
            </div>
            <div className="mth">{newMonth}</div>
            <div className="arrows next-mth" onClick={ClickNextMonth}>
              &gt;
            </div>
          </div>
          <div className="days">
            {dateHolder.map((dateHolder) => (
              <div
                className={
                  dateHolder === currentDay && month === currentMonth
                    ? "day selected"
                    : "day"
                }
                onClick={() => selectDay(dateHolder)}
              >
                {dateHolder}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DateSelector;
