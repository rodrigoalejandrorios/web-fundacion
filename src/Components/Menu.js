import React from "react";
import "./Menu.css";
import logo from "../Assets/jb.svg";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <div className="cont-menu">
        <div className="esp-izq">
          <img src={logo} alt="logo-fjb" />
        </div>
        <div className="esp-der">
          <Link to="/login">
            <button className="campus">Para miembros</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Menu;
