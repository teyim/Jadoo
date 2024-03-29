import React, { useState } from "react";
import "./Calender.css";
import DatePicker from "react-datepicker";

export default function Calender({padding}) {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(
    new Date().setMonth(startDate.getMonth() + 1),
  );

  return (
    <div className="bg-gray-200 rounded-md">
          <DatePicker
            className={`${padding} w-full rounded-md`}
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            minDate={new Date()}
            maxDate={endDate}
            nextMonthButtonLabel=">"
            previousMonthButtonLabel="<"
          />
      </div>
  );
}
