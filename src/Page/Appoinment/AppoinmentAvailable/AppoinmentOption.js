import React from "react";

const AppoinmentOption = ({ appointmentOptions, setTreatment }) => {
  const { name, slots } = appointmentOptions;
  return (
    <div>
      <div className="card lg:w-[425px] shadow-xl mx-auto">
        <div className="card-body text-center">
          <h2 className="text-2xl text-secondary font-bold">{name}</h2>
          <p>{slots.length > 0 ? slots[0] : "Try Another Day"}</p>
          <p>
            {slots.length} {slots.length > 1 ? "spaces" : "space"} available
          </p>
          <div className="card-actions justify-center">
            <label
              disabled={slots.length === 0}
              onClick={() => setTreatment(appointmentOptions)}
              htmlFor="booking-modal"
              className="btn btn-primary text-white"
            >
              Book Appoinment
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppoinmentOption;
