import React, { useState } from "react";
import "./Calender.css";
import DatePicker from "react-datepicker";

export default function Calender() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(
    new Date().setMonth(startDate.getMonth() + 1),
  );

  return (
    <div className="bg-gray-100">
      <div className="flex items-center max-w-2xl mx-auto justify-center space-x-4">
        <div>
          <DatePicker
            className="py-3 "
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            minDate={new Date()}
            maxDate={endDate}
            nextMonthButtonLabel=">"
            previousMonthButtonLabel="<"
          />
        </div>
      </div>
    </div>
  );
}
