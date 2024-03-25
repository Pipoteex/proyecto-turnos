import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import LogoSrc from "../../images/logo.svg?react";
import WaveopcionesSrc from "../../images/imagen-opciones-butom.svg?react";
import LoadingSvg from "../../images/loading.svg?react";
import etiquetainputSrc from "../../images/etiqueta-input-opciones.svg";
import CommonModal from "../../components/CommonModal/CommonModal";
import CommonButton from "../../components/CommonBotton/CommonButton";

const regexDni = /^[\d]{1,3}\.?[\d]{3,3}\.?[\d]{3,3}$/;

interface FormValuesTypes {
    dni: string;
}

const TomarTurno = () => {
    //ESTADOS
    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    //HOOKS

    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValuesTypes>();

    //FUNCIONES

    const tratarEnvio = (data: FormValuesTypes) => {
        console.log(data);
        setLoading(true);
        setIsOpen(true);
    };

    return (
        <div className="relative bg-gradient-to-br from-[#689ad1] ">
            <div className=" w-[100vw] h-[100vh]">
                <WaveopcionesSrc className="absolute  w-[100%] h-[85%] " />
                <LogoSrc className="absolute size-[140px] max-[700px]:size-[130px] " />
                <section className="w-[100%] h-[100%] flex items-center justify-center ">
                    <div className="  w-[50%] h-[60%] max-[1000px]:w-[80%]   bg-[#fdfdfd] z-[1] rounded-[15px] flex items-center justify-between flex-col   ">
                        <h2 className=" font-bold text-[#171A1F ] p-0 m-0 leading-[48px] text-[22px] w-[100%] h-[40%] flex items-center justify-center">
                            Ingrese su DNI
                        </h2>
                        <form
                            className="w-[70%] h-[60%] flex center justify-start flex-col gap-[8px] "
                            onSubmit={handleSubmit(tratarEnvio)}
                        >
                            <span className="font-bold text-[#424955] text-[14px] w-[100%] p-0 m-[0] flex items-center justify-start  ">
                                DNI
                            </span>
                            <div className=" w-[100%] h-[13%] flex items-center justify-center gap-[10px] bg-[#F3F4F6] rounded-[5px]">
                                <img
                                    src={etiquetainputSrc as unknown as string}
                                    alt=""
                                    className="text-[#F3F4F6] ml-[10px]"
                                />
                                <input
                                    {...register("dni", {
                                        required: {
                                            value: true,
                                            message: "Ingrese su DNI.",
                                        },
                                        validate: (value) =>
                                            regexDni.test(value) ||
                                            "Formato de DNI no válido...",
                                    })}
                                    type="text"
                                    autoComplete="off"
                                    placeholder="Ingrese su DNI sin guiones"
                                    className=" w-[100%] h-[100%] bg-transparent outline-none text-[#686869] text-[14px]  "
                                />
                            </div>

                            <button
                                className={`${
                                    loading && "pointer-events-none"
                                } w-[100%] h-[13%] flex justify-center items-center bg-gradient-to-r from-[#50376f] from-25% to-[#b6264f] to-60% rounded-[5px] text-[#FFFFFF] text-[16px] `}
                            >
                                {loading ? (
                                    <LoadingSvg fill="white" />
                                ) : (
                                    "Enviar"
                                )}
                            </button>
                            {errors.dni && (
                                <div className="text-white bg-red-800 rounded-[5px] transition-all text-center">
                                    {errors.dni.message as string}
                                </div>
                            )}
                        </form>
                    </div>
                </section>
                <div className=" w-[100%] absolute bottom-0 h-[10%] bg-[#13496A] flex items-center justify-start ">
                    <button
                        className="w-[12%] h-[75%] max-[1000px]:w-[15%] max-[720px]:w-[25%] max-[1000px]:ml-[4%]  bg-gradient-to-r from-[#50376f] from-25% to-[#b6264f] to-55%  ml-[3%] rounded-[5px] text-[#FFFFFF] text-[16px] cursor-pointer"
                        onClick={() => navigate("/main")}
                    >
                        Cancelar
                    </button>
                </div>
            </div>

            <CommonModal isOpen={isOpen} setIsOpen={setIsOpen}>
                <div className="p-[30px] flex flex-col justify-center items-center">
                    <div className="text-[30px]">
                        ¡Gracias por tomar su turno!
                    </div>
                    <div>Por favor espere a ser llamado por su DNI.</div>
                    <div className="flex justify-end w-full pt-[20px]">
                        <CommonButton
                            text="Aceptar"
                            style="text-[15px]"
                            onClick={() => navigate("/main")}
                        />
                    </div>
                </div>
            </CommonModal>
        </div>
    );
};

export default TomarTurno;
