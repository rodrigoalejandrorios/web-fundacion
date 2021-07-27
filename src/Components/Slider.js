import { useState } from "react";
import "./Slider.css";
import img1 from "../Assets/img1.jpg";
import img2 from "../Assets/img2.jpg";
import img3 from "../Assets/img3.jpg";
import img4 from "../Assets/img4.jpg";
import leftbtn from "../Assets/left.svg";
import rightbtn from "../Assets/right.svg";

const Slider = () => {
  const [slider, setSlider] = useState(1);

  const handleLeft = () => {
    setSlider(slider - 1);
    if (slider == 1) {
      console.log("Llego");
      setSlider(4);
    }
  };
  const handleRight = () => {
    setSlider(slider + 1);
    if (slider == 4) {
      console.log("Llego");
      setSlider(1);
    }
  };
  //setInterval(handleSlider, 3000);

  return (
    <>
      <div className="cont-slider">
        <div className="cont-img-sl">
          <div className="cont-btn-sl">
            <img onClick={handleLeft} src={leftbtn} alt="img-izquierda" />
            <img onClick={handleRight} src={rightbtn} alt="img-derecha" />
          </div>

          {ImgSlider(`img${slider}`)}
        </div>
      </div>
    </>
  );
};

const ImgSlider = (img) => {
  switch (img) {
    case "img1":
      return <img src={img3} />;
    case "img2":
      return <img src={img2} />;
    case "img3":
      return <img src={img1} />;
    case "img4":
      return <img src={img4} />;
  }
};

export default Slider;
