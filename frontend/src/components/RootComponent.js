import React from "react";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import { Outlet } from "react-router-dom";
const RootComponent = () => {
  return (
    <div>
      {" "}
      <Navbar />
      <Outlet/>
      <Footer />
    </div>
  );
};

export default RootComponent;
