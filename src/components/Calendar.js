import { width } from "@fortawesome/free-brands-svg-icons/fa42Group";
import { useState } from "react";

function CalendarDays(props) {
  const firstDayOfMonth = new Date(
    props.day.getFullYear(),
    props.day.getMonth(),
    1
  );
  const weekdayOfFirstDay = firstDayOfMonth.getDay();
  const currentDays = [];

  return <div className="table-content"></div>;
}

export default function Calendar() {
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
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
  const today = new Date();

  const to2dArr = (data = [], size = 5) => {
    let accumulator = [];
    const result = [];

    data.forEach((x, i) => {
      accumulator.push(x);
      if ((i + 1) % size === 0) {
        result.push(accumulator);
        accumulator = [];
      } else if (i + 1 === data.length) {
        result.push(accumulator);
      }
    });
    return result;
  };
  const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
  const daysOfMonth = () => {
    const weekdayOfFirstDay = firstDayOfMonth.getDay();
    const days = [];
    for (let day = 0; day < 42; day++) {
      if (day === 0 && weekdayOfFirstDay === 0) {
        firstDayOfMonth.setDate(firstDayOfMonth.getDate() - 7);
      } else if (day === 0) {
        firstDayOfMonth.setDate(
          firstDayOfMonth.getDate() + (day - weekdayOfFirstDay)
        );
      } else {
        firstDayOfMonth.setDate(firstDayOfMonth.getDate() + 1);
      }
      const dayNum = firstDayOfMonth.getDay();
      let calendarDay = {
        weekend: dayNum === 0 || dayNum === 6,
        number: firstDayOfMonth.getDate(),
        inMonth: today.getMonth() === firstDayOfMonth.getMonth(),
        today: firstDayOfMonth.toDateString() === today.toDateString(),
      };

      days.push(calendarDay);
    }
    return days;
  };

  const cellStyle = { width: (1 / 7) * 100 + "%", aspectRatio: 3 / 2 };

  return (
    <div className="w-full">
      <div>
        {months[today.getMonth()]} {today.getFullYear()}
      </div>
      <div className="flex flex-wrap uppercase font-bold text-xl">
        {weekdays.map((day, i) => (
          <div
            key={i}
            className="flex justify-center items-center border border-slate-700"
            style={cellStyle}
          >
            <span>{day}</span>
          </div>
        ))}
        {daysOfMonth().map((day, i) => (
          <div
            key={i}
            className={
              "flex text-2xl justify-center items-center border border-slate-700 " +
              (day.weekend ? "text-[#e44c4c]" : "text-slate-50") +
              (day.today ? " bg-[#586cbb36]" : "") +
              (false ? "#58bbad36" : "")
            }
            style={cellStyle}
          >
            <span className={day.inMonth ? "" : "opacity-60"}>
              {day.number}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
