import LogoSrc from "../../images/logo.svg?react";
import WaveopcionesSrc from "../../images/imagen-opciones-butom.svg?react";
import etiquetainputSrc from "../../images/etiqueta-input-opciones.svg";

const Opciones = () => {
  return (
    <div className="relative w-[100vw] h-[100vh] bg-gradient-to-br from-[#689ad1]  overflow-hidden">
      <WaveopcionesSrc className="absolute  w-[100%] h-[85%] " />
      <LogoSrc className="absolute  size-[140px] max-[700px]:size-[130px] " />
      <section className="w-[100%] h-[100%] flex items-center justify-center ">
        <div className="  w-[50%] h-[60%] max-[1000px]:w-[80%]   bg-[#fdfdfd] z-[1] rounded-[15px] flex items-center justify-between flex-col   ">
          <h2 className=" font-bold text-[#171A1F ] p-0 m-0 leading-[48px] text-[22px] w-[100%] h-[40%] flex items-center justify-center">
            ingrese su DNI
          </h2>
          <form className="w-[70%] h-[60%] flex center justify-start flex-col gap-[8px] ">
            <span className="font-bold text-[#424955] text-[14px] w-[100%] p-0 m-[0] flex items-center justify-start  ">
              DNI
            </span>
            <div className=" w-[100%] h-[13%] flex items-center justify-center gap-[10px] bg-[#BCC1CA] rounded-[5px]">
              <img
                src={etiquetainputSrc as unknown as string}
                alt=""
                className="text-[#F3F4F6] ml-[10px]"
              />
              <input
                type="text"
                placeholder="ingrese su DNI"
                className=" w-[100%] h-[100%] bg-transparent outline-none text-[#F3F4F6] text-[14px] text-[mulish] "
              />
            </div>
            <button className="w-[100%] h-[13%] bg-gradient-to-r from-[#50376f] from-25% to-[#b6264f] to-60% rounded-[5px] text-[#FFFFFF] text-[16px] font-lato ">
              Enviar
            </button>
          </form>
        </div>
      </section>
      <div className=" w-[100%] absolute bottom-0 h-[10%] bg-[#13496A] flex items-center justify-start ">
        <button className="w-[12%] h-[75%] max-[1000px]:w-[15%] max-[720px]:w-[25%] max-[1000px]:ml-[4%]  bg-gradient-to-r from-[#50376f] from-25% to-[#b6264f] to-55%  ml-[3%] rounded-[5px] text-[#FFFFFF] text-[16px] cursor-pointer">
          Cancelar
        </button>
      </div>
    </div>
  );
};

export default Opciones;
