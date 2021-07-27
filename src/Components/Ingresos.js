import React from "react";
import "./Ingresos.css";
import btn1 from "../Assets/btn1.jpg";
import btn2 from "../Assets/btn2.jpg";
import btn3 from "../Assets/btn3.jpg";

const PanelIngresos = () => {
  return (
    <>
      <div className="cont-cards">
        <div className="card-box">
          <img src={btn1} />
          <button>Ingresar a WebSite</button>
        </div>
        <div className="card-box">
          <img src={btn2} />
          <button>Campus Virtual</button>
        </div>
        <div className="card-box">
          <img src={btn3} />
          <button>Estudios Homologados</button>
        </div>
      </div>
    </>
  );
};

export default PanelIngresos;
