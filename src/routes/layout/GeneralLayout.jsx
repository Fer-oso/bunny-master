import React from "react";

import { Outlet } from "react-router-dom";
import { Footer } from "../../components/footer/Footer";
import NavBar from "../../components/navbar/NavBar";

export const GeneralLayout = () => {
  return (
    <div >
      <NavBar />
      <div className="mx-auto sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl"> 
      <Outlet />
      </div>
      <Footer />
    </div>
  );
};
