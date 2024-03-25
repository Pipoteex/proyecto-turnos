import Campanita from "../../images/campanita-formato.svg?react";
import UserFoto from "../../images/foto-user-formato.svg?react";
import Logo from "../../images/logo.svg?react";
import Icons1 from "../../images/icons-1-formato.svg?react";
import Icons2 from "../../images/icons-2-formato.svg?react";
import Icons3 from "../../images/icons-3-formato.svg?react";
import Icons4 from "../../images/icons-4-formato.svg?react";
import Icons5 from "../../images/icons-5-formato.svg?react";
import Icons6 from "../../images/lupita-input-formato.svg?react";
import Icons7 from "../../images/icons-7-formato.svg?react";
import { useState } from "react";

function Admin() {
    const [Formato2, setFormato2] = useState(false);
    return (
        <div className="w-[100vw] h-[100vh] flex items-center justify-between flex-row ">
            <section className="w-[5%] h-[100%] flex items-center justify-start flex-col ">
                <Logo className="size-[56px] mb-[15%]" />
                <Icons1 className="size-[56px] fill-[#FFFFFF] hover:fill-[#DEE1E6] my-[5%]" />
                <Icons2 className="size-[56px] fill-[#FFFFFF] rounded-[5px] hover:bg-[#DEE1E6] my-[5%]" />
            </section>
            <section className="w-[100%] h-[100%] flex items-center justify-between flex-col pt-[1%] pb-[3%]  ">
                <nav className="w-[100%] h-[10%] flex items-center justify-end flex-row px-[1%] border-[#D7E5D5] border-[2px] border-[solid] gap-[1%] ">
                    <Campanita className="size-[45px] " />
                    <UserFoto className="size-[45px]" />
                </nav>
                <div className="w-[100%] h-[100%]  flex items-start justify-between flex-row ">
                    <section className="w-[30%] h-[97%] flex items-start justify-between flex-col bg-[#DEE1E6] shadow-[0px_5px_0px_0px_rgba(0,0,0,0.3)]">
                        <div className="w-[100%] h-[10%] flex items-start justify-between flex-row px-[5%] border-b-[2px] border-[solid] border-[#F8F9FA] ">
                            {Formato2 ? (
                                <h2 className=" font-semibold h-[75%] w-[100%]  flex items-center justify-start">
                                    Views
                                </h2>
                            ) : (
                                <h2 className=" font-semibold h-[75%] w-[100%]  flex items-center justify-start">
                                    Tramites
                                </h2>
                            )}
                            <Icons3 className="size-[36px]" />
                        </div>
                        <div className="w-[100%] h-[100%] flex items-center justify-start flex-col px-[8%] py-[5%] ">
                            <label
                                className="w-[100%] h-[9%] flex items-center justify-between flex-row my-[8px] hover:bg-[#FFFFFF] hover:text-[#9A105C]  px-[5%] rounded-[5px]"
                                onClick={() => {
                                    setFormato2(false);
                                }}
                            >
                                <span className=" w-[100%] flex items-center justify-between flex-row gap-4 ">
                                    <Icons4 className="size-[24px] stroke-[#9095A0] hover:stroke-[#9A105C]" />
                                    <p className="font-semibold text-[15px] w-[100%]">
                                        Tickes a Resolver
                                    </p>
                                </span>
                                <span className=" font-semibold text-[15px] w-[20%] text-end">
                                    5
                                </span>
                            </label>
                            <label
                                className="w-[100%] h-[9%] flex items-center justify-between flex-row my-[8px] hover:bg-[#FFFFFF] hover:text-[#9A105C] px-[5%] rounded-[5px]"
                                onClick={() => {
                                    setFormato2(true);
                                }}
                            >
                                <span className=" w-[100%] flex items-center justify-between flex-row gap-4 ">
                                    <Icons5 className="size-[24px] stroke-[#9095A0] hover:stroke-[#9A105C] " />
                                    <p className="font-semibold text-[15px] w-[100%]">
                                        Tickes Resueltos
                                    </p>
                                </span>
                                <span className=" font-semibold text-[15px]">
                                    2
                                </span>
                            </label>
                        </div>
                    </section>
                    <section className="w-[100%] h-[100%] flex items-center justify-center flex-col my-[0.2%] gap-2">
                        <header className="w-[97%] h-[100%] flex items-start justify-center flex-col  ">
                            {Formato2 ? (
                                <h2 className="w-[100%] h-[100%] flex items-center justify-start text-[20px] font-semibold   ">
                                    Tramites Resueltos
                                </h2>
                            ) : (
                                <h2 className="w-[100%] h-[100%] flex items-center justify-start text-[20px] font-semibold ">
                                    Tramites
                                </h2>
                            )}
                            <span className="w-[40%] h-[100%] flex items-center justify-start flex-row gap-3 px-[1%] bg-[#F3F4F6] rounded-[5px]">
                                <Icons6 className="size-[20px]" />
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className=" bg-transparent w-[100%] h-[100%] py-[2%] outline-none font-semibold text-[16px]"
                                />
                            </span>
                        </header>
                        {Formato2 ? (
                            <div className="w-[97%] h-[100%] flex items-center justify-between flex-col   ">
                                <label className="w-[100%] flex gap-1 ">
                                    <h2 className="font-semibold text-[24px]">
                                        Ticket
                                    </h2>
                                    <span className="text-[#9A105C] font-semibold text-[24px]">
                                        total:2
                                    </span>
                                </label>
                                <div className="w-[100%] h-[100%] flex justify-between flex-col gap-3  ">
                                    {[0, 1].map((_, i) => {
                                        return (
                                            <div
                                                key={i}
                                                className="w-[100%] h-[100%]   flex items-center justify-between flex-col py-[1%] bg-[#F3F4F6] rounded-[5px]  "
                                            >
                                                <div className="w-[97%] h-[100%]  flex items-start justify-start  ">
                                                    <label className="w-[100%] h-[100%] flex items-center justify-start gap-5 ">
                                                        <Icons7 className="size-[24px]" />
                                                        <span className=" font-semibold text-[16px]">
                                                            Ticket 1
                                                        </span>
                                                    </label>
                                                    <span className="w-[100%] h-[100%] flex items-center justify-end text-[#9A105C]  font-semibold text-[16px]">
                                                        Ingresos Brutos
                                                    </span>
                                                </div>
                                                <div className="w-[97%] h-[100%] flex items-center justify-between gap-2 ">
                                                    <label className=" flex items-start  flex-col  ">
                                                        <span className="text-[#6E7787] text-[16px]">
                                                            DNI
                                                        </span>
                                                        <span>42614936</span>
                                                    </label>
                                                    <label className="  flex items-start  flex-col ">
                                                        <span className="text-[#6E7787] text-[16px]">
                                                            Nombre
                                                        </span>
                                                        <span>Fabrizio</span>
                                                    </label>
                                                    <label className="  flex items-start  flex-col ">
                                                        <span className="text-[#6E7787] text-[16px]">
                                                            Apellido
                                                        </span>
                                                        <span>Martinez</span>
                                                    </label>
                                                    <label className="  flex items-start flex-col ">
                                                        <span className="text-[#6E7787] text-[16px]">
                                                            Email
                                                        </span>
                                                        <span>
                                                            Fabrizioadri00@hotmail.com
                                                        </span>
                                                    </label>
                                                    <label className="  flex items-start  flex-col ">
                                                        <span className="text-[#6E7787] text-[16px]">
                                                            Numero de Telefono
                                                        </span>
                                                        <span>3764839728</span>
                                                    </label>
                                                    <label className=" h-[75%] flex flex-col ">
                                                        <span className="text-[#6E7787] text-[16px]  ">
                                                            Estado
                                                        </span>
                                                        <button className="w-[100%] h-[100%] flex items-center justify-center p-[4%] rounded-[10px] bg-[#02760E] ">
                                                            <span className=" text-[14px] text-[#FFFFFF]  ">
                                                                Resuelto
                                                            </span>
                                                        </button>
                                                        <span className="text-[#6E7787] text-[16px]">
                                                            Usuario
                                                        </span>
                                                    </label>
                                                </div>
                                                <div className="w-[97%] h-[100%] flex items-start justify-center flex-col  ">
                                                    <span className="text-[#6E7787]">
                                                        Observaciones
                                                    </span>
                                                    <p className="w-[100%] h-[5rem] bg-[#e6e6e7] p-[1%] rounded-[5px]">
                                                        Tramite Resuelto
                                                        Correctamente
                                                    </p>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        ) : (
                            <div className="w-[97%] h-[100%] flex flex-col  ">
                                <label className="w-[100%] h-[100%] flex items-center justify-between  px-[6%] font-semibold text-[14px] ">
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
                                            className="w-[100%] h-[100%] py-[0.5%]  px-[6%] font-semibold text-[14px] flex items-center justify-between  border-t-[1px] border-[solid] border-[#000] "
                                        >
                                            <button className="h-[100%] px-[0.6%] flex items-center justify-center bg-[#379AE6] rounded-[10px] text-[13px] text-[#FFFFFF] ">
                                                En Espera
                                            </button>
                                            <span>Ingresos Brutos</span>
                                            <span>42614936</span>
                                            <span>Fabrizio</span>
                                            <span>HH MM YYY</span>
                                        </label>
                                    );
                                })}
                                <div className="w-[100%] h-[100%] flex items-center justify-end">
                                    <button className=" w-[20%] h-[100%] py-[1%]  text-[#FFFFFF] rounded-[5px]  text-[15px] bg-gradient-to-r from-[#50376f] from-25% to-[#b6264f] to-60%">
                                        Asignarme
                                    </button>
                                </div>
                            </div>
                        )}
                        {!Formato2 && (
                            <div className="w-[97%] h-[100%] flex items-center justify-center flex-col bg-[#F3F4F6] p-[1%]  gap-2 ">
                                <section className="w-[100%] h-[100%] flex items-center justify-start gap-4">
                                    <label className="w-[15%] h-[100%] flex items-center justify-between  ">
                                        <Icons7 className="size-[24px]" />
                                        <span className=" font-semibold ">
                                            Tickes 1
                                        </span>
                                    </label>
                                    <div className="w-[100%] h-[100%] flex items-center justify-between pl-[2%] ">
                                        <label className=" w-[100%] h-[100%] flex items-center justify-start gap-3 ">
                                            <span className="text-[#6E7787] text-[17px]">
                                                Tramite
                                            </span>
                                            <select className="w-[50%] h-[100%] rounded-[5px] py-[2%] outline-none">
                                                {[0, 1, 2, 3, 4].map(() => {
                                                    return (
                                                        <option>
                                                            Ingresos Brutos
                                                        </option>
                                                    );
                                                })}
                                            </select>
                                        </label>
                                        <label className=" w-[100%] h-[100%] flex items-center justify-end gap-3  ">
                                            <span className="text-[#6E7787] text-[17px] ">
                                                Prioridad
                                            </span>
                                            <select className="w-[50%] h-[100%] rounded-[5px] py-[2%] outline-none ">
                                                {[0, 1, 2, 3, 4].map(() => {
                                                    return (
                                                        <option>Alta</option>
                                                    );
                                                })}
                                            </select>
                                        </label>
                                    </div>
                                </section>
                                <section className="w-[100%] h-[100%] flex items-center justify-between gap-4 ">
                                    <label className=" w-[100%] h-[100%] flex items-center justify-between flex-col  ">
                                        <span className="text-[#6E7787] w-[100%] h-[100%] ">
                                            DNI
                                        </span>
                                        <input
                                            type="text"
                                            placeholder="DNI"
                                            className="w-[100%] h-[100%] py-[4%] pl-[5%] bg-[#e6e6e7] text-[#171A1F] rounded-[5px] outline-none "
                                        />
                                    </label>
                                    <label className=" w-[100%] flex items-center justify-between flex-col  ">
                                        <span className="text-[#6E7787] w-[95%]">
                                            Nombre{" "}
                                        </span>
                                        <input
                                            type="text"
                                            placeholder="Ingresar Nombre"
                                            className="w-[100%] h-[100%] py-[5%] pl-[5%] bg-[#e6e6e7] text-[#171A1F] rounded-[5px] outline-none"
                                        />
                                    </label>
                                    <label className=" w-[100%] flex items-center justify-between flex-col ">
                                        <span className="text-[#6E7787] w-[95%]">
                                            Apellido
                                        </span>
                                        <input
                                            type="text"
                                            placeholder="Ingresar Apellido"
                                            className="w-[100%] h-[100%] py-[5%] pl-[5%] bg-[#e6e6e7] text-[#171A1F] rounded-[5px] outline-none "
                                        />
                                    </label>
                                    <label className=" w-[100%] flex items-center justify-between flex-col  ">
                                        <span className="text-[#6E7787] w-[95%]">
                                            Email
                                        </span>
                                        <input
                                            type="text"
                                            placeholder="Ingresar Email"
                                            className="w-[100%] h-[100%] py-[5%] pl-[5%] bg-[#e6e6e7] text-[#171A1F] rounded-[5px] outline-none "
                                        />
                                    </label>
                                    <label className=" w-[100%] flex items-center justify-between flex-col   ">
                                        <span className="text-[#6E7787] w-[95%]">
                                            Numero de Telefono
                                        </span>
                                        <input
                                            type="text"
                                            placeholder="Ingresar Telefono"
                                            className="w-[100%] h-[100%] py-[5%] pl-[5%] bg-[#e6e6e7] text-[#171A1F] rounded-[5px] outline-none"
                                        />
                                    </label>
                                </section>
                                <section className="w-[100%] h-[100%] flex items-start justify-start flex-col ">
                                    <span className="text-[#6E7787]">
                                        Observaciones
                                    </span>
                                    <textarea className="bg-[#e6e6e7] w-[100%] h-[100%] outline-none p-[0.5%]"></textarea>
                                </section>
                                <section className="w-[100%] h-[100%] flex items-center justify-between">
                                    <div className="w-[100%] h-[100%] ">
                                        <button className="w-[25%] h-[100%] py-[1%] text-[#FFFFFF] rounded-[5px]  text-[15px] bg-gradient-to-r from-[#50376f] from-25% to-[#b6264f] to-60% ">
                                            Historial
                                        </button>
                                    </div>
                                    <div className="w-[100%] h-[100%] flex items-center justify-between gap-[2%]">
                                        <button className="text-[#6E7787] h-[100%] w-[100%] py-[1%] rounded-[5px] bg-[#e6e6e7]">
                                            Derivar
                                        </button>
                                        <button className="text-[#6E7787] h-[100%] w-[100%] py-[1%] rounded-[5px] bg-[#e6e6e7]">
                                            Cancelar
                                        </button>
                                        <button className="text-[#FFFFFF] h-[100%] w-[100%] py-[1%] rounded-[5px]  text-[15px] bg-gradient-to-r from-[#50376f] from-25% to-[#b6264f] to-60%">
                                            Resolver
                                        </button>
                                    </div>
                                </section>
                            </div>
                        )}
                    </section>
                </div>
            </section>
        </div>
    );
}

export default Admin;
