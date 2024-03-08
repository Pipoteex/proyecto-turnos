import misionesGreenSrc from "../../images/misiones-green.svg";
import misionesRedSrc from "../../images/misiones-red.svg";
import logoSrc from "../../images/logo.svg";

import butomimageSrc from "../../images/butom-image.svg";

function Turnos() {
  return (
    <div className="relative w-[100vw] h-[100vh] bg-gradient-to-r from-[#347dce] from-40% flex items-center justify-center flex-col">
      <div className="w-[100%] h-[100%] relative ">
        <img
          src={misionesGreenSrc}
          alt=""
          className=" w-[100%] h-[95%] absolute right-[-26%] z-[1] max-[1020px]:right-[-15%] max-[720px]:right-[-6%]"
        />
        <img
          src={misionesRedSrc}
          alt=""
          className=" w-[100%] h-[100%] absolute right-[-29%]  z-[1] max-[1020px]:right-[-20%] max-[720px]:right-[-13%]"
        />
      </div>

      <div className=" relative w-[100%] h-[100%] flex items-center justify-center flex-col bg-[#003C60] z-[0]">
        <img
          src={logoSrc}
          alt=""
          className=" size-[150px] z-[1] absolute top-[5%] left-[0%] max-[1150px]:top-[0%] max-[1000px]:top-[-2%] max-[900px]:top-[-4%]  max-[800px]:top-[-5.5%]  max-[700px]:size-[130px]"
        />
        <img src={butomimageSrc} alt="" className="absolute top-[0%] z-[0]  " />
        <div className=" flex items-center justify-center flex-col absolute bottom-[23%] w-[100%] h-[40%]  ">
          <span className=" w-[100%] h-[100%] max-[1120px]:text-[30px] max-[920px]:text-[25px] max-[720px]:text-[20px] font-semibold text-[40px]  text-[#FFFFFF] flex items-center justify-center ">
            ¡realizar tus tramites ahora es mas facil y rapido!
          </span>
          <button className="w-[23%] h-[100%] max-[720px]:h-[70%] flex items-center justify-center bg-gradient-to-r from-[#50376f] from-25% to-[#b6264f] to-60% rounded-[5px] text-[#FFFFFF] text-[20px] font-[lato]">
            Continuar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Turnos;
