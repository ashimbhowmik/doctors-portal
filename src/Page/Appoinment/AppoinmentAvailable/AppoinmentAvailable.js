import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import AppoinmentOption from "./AppoinmentOption";
import BookingModal from "../BookingModal/BookingModal";

const AppoinmentAvailable = ({ selectedDate }) => {
  const [appoinmentOptions, setAppoinmentOptions] = useState([]);
  const [treatment, setTreatment] = useState(null);
  const date = format(selectedDate, "PPPP");

  // ekhane hoy default value [] ayta use korbo na hoy isLoading use korbo
  // data load diyar new poddhoti

  useEffect(() => {
    fetch("service.json")
      .then((res) => res.json())
      .then((data) => setAppoinmentOptions(data));
  }, []);
  return (
    <div>
      <div className="flex justify-center lg:mt-10 mt-6 w-[85%] mx-auto lg:mb-24 mb-10 lg:w-full">
        <p className="text-primary text-xl text-center font-bold">
          Available Appoinments on {format(selectedDate, "PP")}
        </p>
      </div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {appoinmentOptions.map((option) => (
          <AppoinmentOption
            key={option._id}
            appointmentOptions={option}
            setTreatment={setTreatment}
          ></AppoinmentOption>
        ))}
      </div>
      {treatment && (
        <BookingModal
          treatment={treatment}
          selectedDate={selectedDate}
          setTreatment={setTreatment}
        ></BookingModal>
      )}
    </div>
  );
};

export default AppoinmentAvailable;
