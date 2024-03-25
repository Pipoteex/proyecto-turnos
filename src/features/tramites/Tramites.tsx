import logoSrc from "../../images/logo.svg";
import icono1Src from "../../images/icons-1-tramite.svg";
import icono2Src from "../../images/icons-2-tramite.svg";
import icono3Src from "../../images/icons-3-tramite.svg";
import icono4Src from "../../images/icons-4-tramite.svg";
import icono5Src from "../../images/icons-5-tramite.svg";
import icono6Src from "../../images/icons-6-tramite.svg";
import icono7Src from "../../images/icons-7-tramite.svg";
import icono8Src from "../../images/icons-8-tramite.svg";
import { useNavigate } from "react-router-dom";

const listaTramites = [
    {
        id: 0,
        name: "Ingresos Brutos",
        icon: icono1Src,
    },
    {
        id: 1,
        name: "Automotores",
        icon: icono2Src,
    },
    {
        id: 2,
        name: "Inmobiliaria",
        icon: icono3Src,
    },
    {
        id: 3,
        name: "Convenio Multilateral",
        icon: icono4Src,
    },
    {
        id: 4,
        name: "Pagos",
        icon: icono5Src,
    },
    {
        id: 5,
        name: "Fiscalización",
        icon: icono6Src,
    },
    {
        id: 6,
        name: "Sellos",
        icon: icono7Src,
    },
    {
        id: 7,
        name: "Otros Trámites",
        icon: icono8Src,
    },
];

function Tramites() {
    //HOOKS

    const navigate = useNavigate();

    return (
        <div className=" w-[100vw] h-[100vh] bg-gradient-to-r from-[#216aba] from-[-30%] via-[#fafafa] via-[50%] to-[#216aba] to-[130%] flex items-center justify-between flex-col ">
            <section className="w-[100%] h-[20%] max-[850px]:h-[15%] flex items-center justify-between flex-row relative ">
                <img
                    src={logoSrc as unknown as string}
                    alt=""
                    className="size-[130px] w-[10%] ml-[2%] absolute max-[850px]:size-[90px] "
                />
                <h2 className="w-[100%] h-[100%] max-[850px]:text-[20px] flex items-center justify-center font-semibold text-[28px]">
                    TRAMITES
                </h2>
            </section>
            <section className="w-[70%] h-[80%] max-[850px]:w-[80%] max-[850px]:h-[60%] grid grid-cols-3 grid-rows-3 gap-8 mb-[2%] ">
                {listaTramites.map((tramite) => {
                    return (
                        <div
                            key={tramite.id}
                            className="w-[100%] h-[100%] bg-[#FFFFFF] rounded-[5px] cursor-pointer flex items-center justify-center flex-col transition-all hover:bg-slate-300"
                            onClick={() => navigate("/tomar_turno")}
                        >
                            <img
                                src={tramite.icon as unknown as string}
                                alt=""
                                className="w-[20%] max-[750px]:w-[35%] "
                            />
                            <span className=" text-[#171A1F] font-semibold text-[18px] max-[750px]:text-[12px] max-[650px]:text-[10px]">
                                {tramite.name}
                            </span>
                        </div>
                    );
                })}
            </section>
            <section className="w-[100%] h-[10%] flex items-center justify-start bg-[#13496A]">
                <button
                    className="ml-[3%] w-[10%] h-[80%] max-[850px]:ml-[6%] max-[850px]:w-[22%] flex items-center justify-center bg-gradient-to-r from-[#50376f] from-25% to-[#b6264f] to-55% text-[#FFFFFF] rounded-[5px]"
                    onClick={() => navigate("/")}
                >
                    Atras
                </button>
            </section>
        </div>
    );
}

export default Tramites;
