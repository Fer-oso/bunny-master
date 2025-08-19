import React from "react";

import { Outlet } from "react-router-dom";
import { Footer } from "../../components/footer/Footer";
import NavBar from "../../components/navbar/NavBar";
import ScrollToTop from "../../hooks/ScrollToTop";
import { GeneralContainer } from "./GeneralContainer";

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
