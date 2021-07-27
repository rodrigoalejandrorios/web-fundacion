import React from "react";
import Menu from "../Components/Menu";
import Slider from "../Components/Slider";
import PanelIngresos from "../Components/Ingresos";
import Banner from "../Components/Banner";

const AppPublic = () => {
  return (
    <>
      <Menu />
      <Slider />
      <PanelIngresos />
      <Banner />
    </>
  );
};

export default AppPublic;
