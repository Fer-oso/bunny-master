import React from "react";

import { Outlet } from "react-router-dom";
import { Footer } from "../../components/footer/Footer";
import NavBar from "../../components/navbar/NavBar";
import ScrollToTop from "../../hooks/ScrollToTop";

export const GeneralLayout = () => {
  return (
    <div className="" >
       <ScrollToTop/>
      <NavBar />
      <div className="mx-auto  px-1 sm:px-0 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl  bg-gradient-to-br  "> 
      <Outlet />
      </div>
      <Footer />
    </div>
  );
};
