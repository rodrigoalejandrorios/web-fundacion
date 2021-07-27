import React from "react";
import useCForm from "../Utils/useForm";
import "./Login.css";
import video from "../Assets/jazz.mp4";
import logo from "../Assets/jb-w.svg";

const Login = () => {
  const [values, handler, setValues] = useCForm();
  const handleForm = (e) => {
    e.preventDefault();
    setValues({});
    console.log(values);
  };
  return (
    <>
      <div className="panel-login">
        <video autoPlay loop muted>
          <source src={video} type="video/mp4" />
        </video>
        <div className="cont-dist">
          <div className="cont-logo-log">
            <img src={logo} alt="logo" />
          </div>
          <div className="cont-login">
            <div className="cont-box-login">
              <h1>Inicio de Sesión</h1>
              <form onSubmit={handleForm} className="form-login">
                <input
                  type="email"
                  className="input-st"
                  name="email"
                  placeholder="ejemplo@ejemplo.com"
                  value={values.email || ""}
                  onChange={handler}
                  required
                />
                <input
                  type="password"
                  className="input-st"
                  name="pass"
                  placeholder="*********"
                  value={values.pass || ""}
                  onChange={handler}
                  required
                />
                <p>
                  Olvidaste tu contraseña? <a href="#">Recuperala</a>
                </p>
                <button className="btn-submit">Ingresar</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
