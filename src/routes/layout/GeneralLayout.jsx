import React from "react";

import { Outlet } from "react-router-dom";

import NavBar from "../../components/navbar/NavBar";
import ScrollToTop from "../../hooks/ScrollToTop";
import { GeneralContainer } from "./GeneralContainer";
import { Footer } from "../../components/footer/Footer";

export const GeneralLayout = () => {
  return (
    <div className="" >
      <ScrollToTop />
      <NavBar />
      <GeneralContainer>
        <Outlet /> 
      </GeneralContainer>
      <Footer />
    </div>
  );
};
