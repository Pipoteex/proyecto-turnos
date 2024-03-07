import misionesGreenSrc from "../../images/misiones-green.svg";
import misionesRedSrc from "../../images/misiones-red.svg";
import logoSrc from "../../images/logo.svg";
import botonSrc from "../../images/boton.svg";
import butomimageSrc from "../../images/butom-image.svg";

function Turnos() {
  return (
    <div className=" relative w-[100vw] h-[100vh] bg-gradient-to-br from-[#347dce] flex items-center justify-center flex-col">
      <div className="w-[100%] h-[100%] relative ">
        <img
          src={misionesGreenSrc}
          alt=""
          className=" w-[29%] absolute right-[13%] z-[1]"
        />
        <img
          src={misionesRedSrc}
          alt=""
          className=" w-[29%] absolute right-[10%] z-[2]"
        />
      </div>

      <div className=" relative w-[100%] h-[100%] flex items-center justify-center flex-col bg-[#003C60]">
        <img
          src={logoSrc}
          alt=""
          className="w-[14%] absolute left-[0%] bottom-[40%] z-[1]"
        />
        <img src={butomimageSrc} alt="" className="absolute top-0 z-[0] " />
        <div className=" flex items-center justify-center flex-col absolute bottom-[23%]  ">
          <span className=" font-semibold text-[40px] leading-[68px] text-[#FFFFFF] relative ">
            ¡realizar tus tramites ahora es mucho mas facil y rapido!
          </span>
          <img src={botonSrc} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Turnos;
