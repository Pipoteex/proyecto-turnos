import React from "react";
import logoSrc from "../../images/logo.svg";
import icono1Src from "../../images-tramites/icons-1.svg";
import icono2Src from "../../images-tramites/icons-2.svg";
import icono3Src from "../../images-tramites/icons-3.svg";
import icono4Src from "../../images-tramites/icons-4.svg";
import icono5Src from "../../images-tramites/icons-5.svg";
import icono6Src from "../../images-tramites/icons-6.svg";
import icono7Src from "../../images-tramites/icons-7.svg";
import icono8Src from "../../images-tramites/icons-8.svg";

function Tramites() {
  return (
    <div className=" w-[100vw] h-[100vh] bg-gradient-to-r from-[#216aba] from-[-30%] via-[#fafafa] via-[50%] to-[#216aba] to-[130%] flex items-center justify-between flex-col ">
      <section className="w-[100%] h-[20%] flex items-center justify-between flex-row relative ">
        <img
          src={logoSrc}
          alt=""
          className="size-[130px] w-[10%] ml-[2%]  absolute max-[850px]:size-[90px] "
        />
        <h2 className="w-[100%] h-[100%] max-[850px]:text-[20px] flex items-center justify-center font-semibold text-[28px]">
          TRAMITES
        </h2>
      </section>
      <section className="w-[70%] h-[80%] max-[850px]:w-[80%] grid grid-cols-3 grid-rows-3 gap-8 mb-[2%] ">
        <div className="w-[100%] h-[100%] bg-[#FFFFFF] rounded-[5px]   flex items-center justify-center flex-col">
          <img
            src={icono1Src}
            alt=""
            className="w-[20%] max-[750px]:w-[35%] "
          />
          <span className=" text-[#171A1F] font-semibold text-[18px] max-[750px]:text-[12px]">
            Ingresos Brutos
          </span>
        </div>
        <div className="w-[100%] h-[100%] bg-[#FFFFFF] rounded-[5px] text-[#171A1F] font-semibold text-[18px] flex items-center justify-center flex-col">
          <img
            src={icono2Src}
            alt=""
            className="w-[20%] max-[750px]:w-[35%] "
          />
          <span className="text-[#171A1F] font-semibold text-[18px] max-[750px]:text-[12px]">
            Automotores
          </span>
        </div>
        <div className="w-[100%] h-[100%] bg-[#FFFFFF] rounded-[5px] text-[#171A1F] font-semibold text-[18px]  flex items-center justify-center flex-col">
          <img
            src={icono3Src}
            alt=""
            className="w-[20%] max-[750px]:w-[35%] "
          />
          <span className="text-[#171A1F] font-semibold text-[18px] max-[750px]:text-[12px]">
            Inmobiliaria
          </span>
        </div>

        <div className="w-[100%] h-[100%] bg-[#FFFFFF] rounded-[5px] text-[#171A1F] font-semibold text-[18px]  flex items-center justify-center flex-col">
          <img
            src={icono4Src}
            alt=""
            className="w-[20%] max-[750px]:w-[35%] "
          />
          <span className="text-[#171A1F] font-semibold text-[18px] max-[750px]:text-[12px] ">
            Convenio Multilateral
          </span>
        </div>
        <div className="w-[100%] h-[100%] bg-[#FFFFFF] rounded-[5px] text-[#171A1F] font-semibold text-[18px]  flex items-center justify-center flex-col">
          <img
            src={icono5Src}
            alt=""
            className="w-[20%] max-[750px]:w-[35%] "
          />
          <span className="text-[#171A1F] font-semibold text-[18px] max-[750px]:text-[12px]">
            Pagos
          </span>
        </div>
        <div className="w-[100%] h-[100%] bg-[#FFFFFF] rounded-[5px] text-[#171A1F] font-semibold text-[18px]  flex items-center justify-center flex-col">
          <img
            src={icono6Src}
            alt=""
            className="w-[20%] max-[750px]:w-[35%] "
          />
          <span className="text-[#171A1F] font-semibold text-[18px] max-[750px]:text-[12px] ">
            Fiscalizacion
          </span>
        </div>
        <div className="w-[100%] h-[100%] bg-[#FFFFFF] rounded-[5px] text-[#171A1F] font-semibold text-[18px]  flex items-center justify-center flex-col">
          <img
            src={icono7Src}
            alt=""
            className="w-[20%] max-[750px]:w-[35%] "
          />
          <span className="text-[#171A1F] font-semibold text-[18px] max-[750px]:text-[12px] ">
            Sellos
          </span>
        </div>
        <div className="w-[100%] h-[100%] bg-[#FFFFFF] rounded-[5px] text-[#171A1F] font-semibold text-[18px]  flex items-center justify-center flex-col">
          <img
            src={icono8Src}
            alt=""
            className="w-[20%] max-[750px]:w-[35%] "
          />
          <span className="text-[#171A1F] font-semibold text-[18px] max-[750px]:text-[12px]">
            Otros Tramites
          </span>
        </div>
      </section>
      <section className="w-[100%] h-[10%] flex items-center justify-start bg-[#13496A]">
        <button className="ml-[3%] w-[10%] h-[80%] max-[850px]:ml-[6%] max-[850px]:w-[22%] flex items-center justify-center bg-gradient-to-r from-[#50376f] from-25% to-[#b6264f] to-55% text-[#FFFFFF] rounded-[5px]">
          Atras
        </button>
      </section>
    </div>
  );
}

export default Tramites;
