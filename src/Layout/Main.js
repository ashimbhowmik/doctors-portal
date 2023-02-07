import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Page/Shared/Footer/Footer";
import Navber from "../Page/Shared/Navber/Navber";

const Main = () => {
  return (
    <div>
      <Navber></Navber>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
