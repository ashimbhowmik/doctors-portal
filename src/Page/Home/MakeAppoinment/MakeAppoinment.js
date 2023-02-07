import React from "react";
import doctor from "../../../assets/images/doctor.png";
import appoinment from "../../../assets/images/appointment.png";
import PrimaryBtn from "../../../Components/PrimaryBtn/PrimaryBtn";

const MakeAppoinment = () => {
  return (
    <section
      className="lg:mt-44 mt-20"
      style={{
        background: `url(${appoinment})`,
      }}
    >
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row p-7 py-10 lg:py-0 lg:p-0">
          <img
            src={doctor}
            className="lg:w-1/2 -mt-40 rounded-lg hidden lg:block"
            alt=""
          />
          <div>
            <h4 className="text-lg text-primary font-bold">Appoinment</h4>
            <h1 className="text-4xl font-bold text-white">
              Make an appoinment Today
            </h1>
            <p className="py-6 text-white">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <PrimaryBtn>Appoinment</PrimaryBtn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAppoinment;
