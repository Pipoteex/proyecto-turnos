import { useState } from "react";
import CommonBottonDegrade from "../../components/CommonBottonDegrade/CommonBottonDegrade";
import LoginWave from "../../images/login-wave.svg?react";
import LogoSrc from "../../images/logo.svg?react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import LoadingSvg from "../../images/loading.svg?react";

const RegexContraseña = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;

interface FormValuesTypes {
    usuario: string;
    contraseña: string;
}

const Login = () => {
    //ESTADOS
    const [Loading, setLoading] = useState(false);
    //HOOKS
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValuesTypes>();
    //const navigate = useNavigate()
    //FUNCIONES
    const OnSubmit = (data: FormValuesTypes) => {
        console.log(data);
        setLoading(true);
    };

    return (
        <div className=" relative w-[100vw] h-[100vh] bg-gradient-to-r from-[#689AD1] from-[-20%] overflow-hidden  ">
            <div className=" bg-[#13496A] z-[1] bottom-0 absolute w-[100%] h-[8%]"></div>
            <LoginWave className="absolute  !w-[100%] !h-[85%] z-0 max-[720px]:!w-[350%] max-[720px]:!h-[85%] " />
            <LogoSrc className="absolute size-[140px]  max-[700px]:size-[130px] " />
            <section className="relative w-[100%] h-[100%]  flex items-center justify-center ">
                <div className="w-[60%] h-[65%] max-[850px]:w-[70%] flex items-center justify-start flex-col bg-[#FFFFFF] rounded-[8px] gap-[5%]  ">
                    <h2 className="w-[100%] h-[10%] flex items-center justify-center text-[32px] font-semibold text-[#171A1F] my-[2%] ">
                        Iniciar Sesion
                    </h2>
                    <form
                        onSubmit={handleSubmit(OnSubmit)}
                        className="w-[70%] h-[70%] flex items-center flex-col "
                    >
                        <div className="w-[100%] h-[100%] flex items-start justify-start flex-col my-[2%] gap-[5%]">
                            <span className=" font-semibold  text-[15px]">
                                USUARIO
                            </span>
                            <input
                                {...register("usuario", {
                                    required: {
                                        value: true,
                                        message: "el usuario es requerido",
                                    },
                                })}
                                type="text"
                                placeholder="ingrese su Usuario"
                                autoComplete="off"
                                className="bg-[#BCC1CA] w-[100%] h-[60%] rounded-[5px] px-[8%] outline-none "
                            />
                        </div>
                        {errors.usuario && (
                            <div className="w-[100%] rounded-[5px] text-center bg-red-800 text-white">
                                {errors.usuario.message as string}
                            </div>
                        )}
                        <div className="w-[100%] h-[100%] flex items-start justify-start flex-col my-[2%]  gap-[5%]">
                            <span className=" font-semibold text-[15px] ">
                                CONTRASEÑA
                            </span>
                            <input
                                {...register("contraseña", {
                                    required: {
                                        value: true,
                                        message: "la contraseña es requerida",
                                    },
                                    validate: (value) =>
                                        RegexContraseña.test(value) ||
                                        "La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula",
                                })}
                                type="password"
                                placeholder="ingrese su Contraseña"
                                autoComplete="off"
                                className="bg-[#BCC1CA] w-[100%] h-[60%] rounded-[5px] px-[8%] outline-none "
                            />
                        </div>
                        {errors.contraseña && (
                            <div className="w-[100%]  rounded-[5px] text-center bg-red-800 text-white">
                                {errors.contraseña.message as string}
                            </div>
                        )}

                        <button className="w-[100%] h-[60%] my-[2%] ">
                            <CommonBottonDegrade
                                children={
                                    Loading ? (
                                        <LoadingSvg fill="white" />
                                    ) : (
                                        <p className="w-[100%] h-[100%] flex items-center justify-center ">
                                            Ingresar
                                        </p>
                                    )
                                }
                                style={`${
                                    Loading &&
                                    "cursor-events-none w-[100%] h-[100%] "
                                } "w-[100%] h-[100%] py-[2%]" `}
                            />
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Login;
