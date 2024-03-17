import Campanita from "../../images/campanita-formato.svg?react";
import UserFoto from "../../images/foto-user-formato.svg?react";
import Logo from "../../images/logo.svg?react";
import Icons1 from "../../images/icons-1-formato.svg?react";
import Icons2 from "../../images/icons-2-formato.svg?react";
import Icons3 from "../../images/icons-3-formato.svg?react";
import Icons4 from "../../images/icons-4-formato.svg?react";
import Icons5 from "../../images/icons-5-formato.svg?react";
import Icons6 from "../../images/lupita-input-formato.svg?react";

function Formato() {
  return (
    <div className="w-[100vw] h-[100vh] flex items-center justify-between flex-row ">
      <section className="w-[5%] h-[100%] flex items-center justify-start flex-col ">
        <Logo className="size-[56px] mb-[15%]" />
        <Icons1 className="size-[56px] fill-[#FFFFFF] hover:fill-[#DEE1E6] my-[5%]" />
        <Icons2 className="size-[56px] fill-[#FFFFFF] rounded-[5px] hover:bg-[#DEE1E6] my-[5%]" />
      </section>
      <section className="w-[100%] h-[100%] flex items-center justify-between flex-col py-[1%]  ">
        <nav className="w-[100%] h-[10%] flex items-center justify-end flex-row px-[1%] border-[#D7E5D5] border-[2px] border-[solid] gap-[1%] ">
          <Campanita className="size-[45px] " />
          <UserFoto className="size-[45px]" />
        </nav>
        <div className="w-[100%] h-[100%] flex items-start justify-between flex-row ">
          <section className="w-[30%] h-[100%] flex items-start justify-between flex-col bg-[#DEE1E6]">
            <div className="w-[100%] h-[10%] flex items-start justify-between flex-row px-[5%] border-b-[2px] border-[solid] border-[#F8F9FA] ">
              <h2 className=" font-semibold h-[75%] w-[100%]  flex items-center justify-start">
                Tramites
              </h2>
              <Icons3 className="size-[36px]" />
            </div>
            <div className="w-[100%] h-[100%] flex items-center justify-start flex-col px-[8%] py-[5%] ">
              <label className="w-[100%] h-[9%] flex items-center justify-between flex-row my-[8px] hover:bg-[#FFFFFF] px-[5%] rounded-[5px]">
                <span className=" w-[100%] flex items-center justify-between flex-row gap-4 ">
                  <Icons4 className="size-[24px] " />
                  <p className="font-semibold text-[15px] w-[100%]">
                    Tickes a Resolver
                  </p>
                </span>
                <span className=" font-semibold text-[15px] w-[20%] text-end">
                  5
                </span>
              </label>
              <label className="w-[100%] h-[9%] flex items-center justify-between flex-row my-[8px] hover:bg-[#FFFFFF] px-[5%] rounded-[5px]">
                <span className=" w-[100%] flex items-center justify-between flex-row gap-4 ">
                  <Icons5 className="size-[24px] " />
                  <p className="font-semibold text-[15px] w-[100%]">
                    Tickes Resueltos
                  </p>
                </span>
                <span className=" font-semibold text-[15px]">2</span>
              </label>
            </div>
          </section>
          <section className="w-[100%] h-[100%] flex items-start justify-start flex-col px-[2%] py-[1.5%] gap-4">
            <header className="w-[100%] h-[15%] flex items-start justify-between flex-col gap-4">
              <h2 className="w-[100%] h-[30%] flex items-center justify-start text-[20px] font-semibold ">
                Tramites
              </h2>
              <span className="w-[40%] h-[100%] flex items-center justify-start flex-row gap-3 px-[1%] bg-[#BCC1CA] rounded-[5px]">
                <Icons6 className="size-[20px]" />
                <input
                  type="text"
                  placeholder="Search..."
                  className=" bg-transparent w-[100%] h-[100%] outline-none font-semibold text-[16px]"
                />
              </span>
            </header>
            <div className="w-[100%] h-[70%] flex items-start justify-between flex-col gap-2 ">
              <label className="w-[100%] h-[100%] flex items-center justify-between flex-row px-[6%] ">
                <span>Estado</span>
                <span>Tramite</span>
                <span>DNI</span>
                <span>Nombre</span>
                <span>Fecha</span>
              </label>
              {[0, 1, 2, 3, 4].map((_, i) => {
                return (
                  <label
                    key={i}
                    className="w-[100%] h-[100%] py-[1%] px-[6%]  font-semibold text-[14px] flex items-center justify-between flex-row  border-t-[1px] border-[solid] border-[#000] "
                  >
                    <span className="h-[100%] flex items-center justify-center  bg-[#379AE6] rounded-[20px] text-[14px] text-[#FFFFFF] text-center">
                      En Espera
                    </span>
                    <span className="h-[100%] flex items-center justify-center  ">
                      Ingresos Brutos
                    </span>
                    <span className="h-[100%] flex items-center justify-center ">
                      42614936
                    </span>
                    <span className="h-[100%] flex items-center justify-center ">
                      Fabrizio
                    </span>
                    <span className="h-[100%] flex items-center justify-center ">
                      HH MM YYY
                    </span>
                  </label>
                );
              })}
              <button className=" w-[40%] h-[40%] py-[8px]  bg-gradient-to-r from-[#50376f] from-25% to-[#b6264f] to-60%">
                Asignarme
              </button>
            </div>
            <div></div>
          </section>
        </div>
      </section>
    </div>
  );
}

export default Formato;
