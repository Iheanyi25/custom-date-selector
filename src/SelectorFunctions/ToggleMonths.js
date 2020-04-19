import React, { useState } from "react";
import "../DateSelector.css";

let date = new Date();
let day = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();
let selectedDay = day;
let selectedMonth = month;
let selectedYear = year;

function ToggleMonths() {
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
  // const [selected, setselected] = useState("day");
  // console.log(selected);

  let amount_days = 31;
  switch (month) {
    case 1:
      if (year % 4 === 0 && year !== 0) {
        amount_days = 29;
      } else {
        amount_days = 28;
      }
      break;
    case 3:
      amount_days = 30;
      break;
    case 5:
      amount_days = 30;
      break;
    case 8:
      amount_days = 30;
      break;
    case 10:
      amount_days = 30;
      break;
    default:
      break;
  }
  let dateHolder = [];
  for (let i = 0; i < amount_days; i++) {
    let days = i + 1;
    dateHolder.push(days);
    if (
      selectedDay === i + 1 &&
      selectedMonth === month &&
      selectedYear === year
    ) {
      // return <div className="day selected">{dateHolder[i]}</div>;
    }
  }

  const clickPrevMonth = () => {
    month--;
    if (month < 0) {
      month = 11;
      year--;
    }
    setnewMonth(months[month] + " " + year);
  };
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
          <div className="day">{dateHolder}</div>
        ))}
      </div>
    </div>
  );
}

export default ToggleMonths;
