import React from "react";
import logoSrc from "../../images/logo.svg";
import butomopcionesSrc from "../../images/imagen-opciones-butom.svg";
import etiquetainputSrc from "../../images/etiqueta-input-opciones.svg";
import botonopcionesSrc from "../../images/boton-opciones-input.svg";
import botonCancelarSrc from "../../images/boton-cancelar-opciones.svg";

const Opciones = () => {
  return (
    <div className="w-[100vw] h-[100vh] bg-gradient-to-br from-[#689ad1] relative flex items-center justify-center flex-col">
      <img src={logoSrc} alt="" className="absolute inset-0 z-[1] w-[10%] " />
      <img
        src={butomopcionesSrc}
        alt=""
        className="absolute h-[100%] w-[100%] inset-0 z-[0] "
      />
      <div className=" w-[50%] h-[60%] bg-[#fdfdfd] z-[1] rounded-[15px] flex items-center justify-between flex-col   ">
        <h2 className=" font-bold text-[#171A1F ] p-0 m-0 leading-[48px] text-[22px] w-[100%] h-[40%] flex items-center justify-center">
          ingrese su DNI
        </h2>
        <form className="w-[70%] h-[60%] flex center justify-start flex-col gap-[8px] ">
          <span className="font-bold text-[#424955] text-[14px] w-[100%] p-0 m-[0] flex items-center justify-start  ">
            DNI
          </span>
          <div className=" w-[100%] h-[13%] flex items-center justify-center gap-[10px] bg-[#BCC1CA] rounded-[5px]">
            <img
              src={etiquetainputSrc}
              alt=""
              className="text-[#F3F4F6] ml-[10px]"
            />
            <input
              type="text"
              placeholder="ingrese su DNI"
              className=" w-[100%] h-[100%] bg-transparent outline-none text-[#F3F4F6] text-[14px] text-[mulish] "
            />
          </div>
          <img src={botonopcionesSrc} alt="" className=" cursor-pointer" />
        </form>
      </div>
      <div className=" w-[100%] absolute bottom-0 h-[10%] bg-[#13496A] flex items-center justify-start ">
        <img
          src={botonCancelarSrc}
          alt=""
          className="h-[70%] relative ml-[3%] cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Opciones;
