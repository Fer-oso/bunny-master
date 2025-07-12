import React from "react";

import { Outlet } from "react-router-dom";


import { Footer } from "../../components/footer/Footer";
import NavBar from "../../components/navbar/NavBar";

export const GeneralLayout = () => {
  return (
    <div>
      <NavBar />
      <div className="w-7xl mx-auto"> 
      <Outlet />
      </div>
      <Footer />
    </div>
  );
};
