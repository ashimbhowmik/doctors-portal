import React from "react";
import chair from "../../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import background from "../../../assets/images/bg.png";

const AppoinmentBanner = ({ selectedDate, setSelectedDate }) => {
  return (
    <header>
      <div
        className="hero lg:py-36 py-7 "
        style={{
          background: `url(${background})`,
          backgroundSize: "cover",
        }}
      >
        <div className="hero-content flex-col lg:flex-row-reverse lg:gap-36">
          <img
            src={chair}
            className="lg:w-1/2 rounded-lg shadow-2xl"
            alt="dentist chair"
          />
          <div className=" shadow-md rounded-lg mt-10 lg:mt-0">
            <DayPicker
              fromYear={1971}
              toYear={3025}
              captionLayout="dropdown"
              ISOWeek
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppoinmentBanner;
