import React from "react";
import Banner from "../Banner/Banner";
import InfoCards from "../InfoCards/InfoCards";
import Services from "../Services/Services";
import DentalCare from "../DentalCare/DentalCare";
import MakeAppoinment from "../MakeAppoinment/MakeAppoinment";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div className="mx-5">
      <Banner></Banner>
      <InfoCards></InfoCards>
      <Services></Services>
      <DentalCare></DentalCare>
      <MakeAppoinment></MakeAppoinment>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
