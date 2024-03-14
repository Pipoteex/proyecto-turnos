import React from "react";
import logoSrc from "../../images/logo.svg";
import WaveSrc from "../../images/wave.login.svg";

const Login = () => {
  return (
    <div className=" relative w-[100vw] h-[100vh] ">
      <img src={WaveSrc} alt="" className=" absolute w-[500%] h-[100%] " />
      <img src={logoSrc} alt="" className="absolute" />
      <section className="relative w-[100%] h-[100%]">
        <div>
          <h2>Iniciar Sesion</h2>
          <div>
            <div>
              <span>USUARIO</span>
              <input type="text" placeholder="ingrese su Usuario" />
            </div>
            <div>
              <span>CONTRASEÑA</span>
              <input type="text" placeholder="ingrese su Contraseña" />
            </div>
            <button>Ingresar</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
