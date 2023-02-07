import React from "react";
import img2 from "../../../assets/images/treatment.png";
import PrimaryBtn from "../../../Components/PrimaryBtn/PrimaryBtn";

const DentalCare = () => {
  return (
    <div className="lg:mt-40 lg:mb-16">
      <div className="lg:flex bg-base-100 lg:h-[576px]  mt-20 w-[80%] mx-auto">
        <figure className="lg:w-[40%]">
          <img src={img2} alt="Movie" />
        </figure>
        <div className="justify-center flex flex-col lg:w-[60%] lg:p-24 mt-5 lg:mt-0">
          <h2 className="card-title lg:text-5xl text-3xl font-bold">
            Exceptional Dental Care, on Your Terms
          </h2>
          <p className="mt-6">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <div className="mt-6">
            <PrimaryBtn>Get Started</PrimaryBtn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DentalCare;
