import LoginWave from "../../images/login-wave.svg?react";
import LogoSrc from "../../images/logo.svg?react";

const Login = () => {
  return (
    <div className=" relative w-[100vw] h-[100vh] bg-gradient-to-r from-[#689AD1] from-[-20%] overflow-hidden  ">
      <div className=" bg-[#13496A] z-[1] bottom-0 absolute w-[100%] h-[8%]"></div>
      <LoginWave className="absolute  !w-[100%] !h-[85%] z-0 max-[720px]:!w-[350%] max-[720px]:!h-[85%] " />
      <LogoSrc className="absolute size-[140px]  max-[700px]:size-[130px] " />
      <section className="relative w-[100%] h-[100%]  flex items-center justify-center ">
        <div className="w-[60%] h-[65%] max-[850px]:w-[70%] flex items-center justify-start flex-col bg-[#FFFFFF] rounded-[8px] gap-[5%]   ">
          <h2 className="w-[70%] h-[20%] flex items-center justify-center text-[32px] font-semibold text-[#171A1F] my-[2%] ">
            Iniciar Sesion
          </h2>
          <div className="w-[70%] h-[55%] flex items-center flex-col ">
            <div className="w-[100%] h-[100%] flex items-start justify-start flex-col my-[5px] gap-[5%]">
              <span className=" font-semibold  text-[15px]">USUARIO</span>
              <input
                type="text"
                placeholder="ingrese su Usuario"
                className="bg-[#BCC1CA] w-[100%] h-[60%] rounded-[5px] px-[8%] "
              />
            </div>
            <div className="w-[100%] h-[100%] flex items-start justify-start flex-col my-[5px] gap-[5%]">
              <span className=" font-semibold text-[15px] ">CONTRASEÑA</span>
              <input
                type="text"
                placeholder="ingrese su Contraseña"
                className="bg-[#BCC1CA] w-[100%] h-[60%] rounded-[5px] px-[8%] "
              />
            </div>
            <button className="w-[100%] h-[60%] bg-gradient-to-r from-[#50376f] from-25% to-[#b6264f] text-[#FFFFFF] to-60% rounded-[5px] my-[2%] font-semibold ">
              Ingresar
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
