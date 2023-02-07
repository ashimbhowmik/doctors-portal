import React, { useState } from "react";
import AppoinmentAvailable from "../AppoinmentAvailable/AppoinmentAvailable";
import AppoinmentBanner from "../AppoinmentBanner/AppoinmentBanner";

const Appoinment = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <div>
      <AppoinmentBanner
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      ></AppoinmentBanner>
      <AppoinmentAvailable selectedDate={selectedDate}></AppoinmentAvailable>
    </div>
  );
};

export default Appoinment;
