import React from "react";
import "./Banner.css";
import video from "../Assets/jazz.mp4";
import logo from "../Assets/jb-w.svg";
const Banner = () => {
  return (
    <>
      <div className="cont-banner">
        <div className="cont-video">
          <video autoPlay loop muted>
            <source src={video} type="video/mp4" />
          </video>
          <div className="cont-el">
            <h1>Fundación Julio Bocca</h1>
            <img src={logo} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
