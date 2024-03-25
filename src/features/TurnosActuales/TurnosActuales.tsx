import iconUserSrc from "../../images/user-icon-descripcion.svg";
import iconRightSrc from "../../images/right-icon-descripcion.svg";
import iconAgenciaSrc from "../../images/logo-agenciaTributaria.svg";

function TurnosActuales() {
    return (
        <div className="w-[100vw] h-[100vh] flex items-center justify-center flex-row box-border ">
            <section className="w-[100%] h-[100%] flex items-center justify-center flex-col bg-[#F3F4F6] py-[15px]  ">
                <h2 className="w-[100%] h-[20%]   flex items-center justify-center  text-[32px] ">
                    Turnos
                </h2>
                <section className="w-[100%] h-[100%] flex items-center justify-center flex-col mb-10">
                    {[0, 1, 2, 3, 4, 5].map((_, i) => {
                        return (
                            <div
                                key={i}
                                className=" w-[80%] h-[100%] max-[850px]:w-[95%] max-[850px]:px-[0px] flex items-center justify-between flex-row my-1 px-[15px]  rounded-[5px] border-[1px] border-[#DEE1E6] border-solid "
                            >
                                <img
                                    src={iconUserSrc as unknown as string}
                                    alt=""
                                    className="max-[850px]:size-[30px]"
                                />
                                <span className=" text-center max-[850px]:text-[12px]">
                                    42614936
                                </span>
                                <img
                                    src={iconRightSrc as unknown as string}
                                    alt=""
                                    className="max-[850px]:size-[15px] "
                                />
                                <span className=" text-center max-[850px]:text-[12px] ">
                                    Box 1
                                </span>
                                <span className=" h-[65%] text-center max-[850px]:text-[12px]">
                                    HH MM
                                </span>
                            </div>
                        );
                    })}
                </section>
            </section>
            <section className="w-[100%] h-[100%] max-[1150px]:pt-[13%] max-[950px]:pt-[16%]  max-[750px]:pt-[22%] flex  items-center justify-center flex-col bg-[#323842] pt-[9%] pb-[2%]">
                <img
                    src={iconAgenciaSrc as unknown as string}
                    alt=""
                    className="size-[53%]  max-[1150px]:size-[60%] max-[950px]:size-[65%] max-[750px]:size-[90%] "
                />
                <button className="w-[50%] h-[100%] max-[1150px]:h-[60%] max-[1150px]:w-[60%] max-[950px]:h-[50%] max-[950px]:w-[65%]  max-[750px]:h-[40%] max-[750px]:w-[90%]  bg-[#FFFFFF] my-[10px] rounded-[10px]">
                    <h2 className="text-[32px] max-[950px]:text-[25px]">
                        IMC 12
                    </h2>
                    <span className="text-[18px] max-[950px]:text-[17px]">
                        Box 2
                    </span>
                </button>
                <div className="w-[100%] h-[100%] max-[1150px]:h-[65%]  flex items-center justify-center flex-col ">
                    <h3 className=" w-[100%] h-[40%] max-[1150px]:h-[30%] max-[950px]:text-[18px] flex items-center justify-center text-[20px]">
                        Proximo
                    </h3>
                    <button className="w-[60%] h-[40%] max-[1150px]:h-[30%] max-[1150px]:w-[70%] flex items-center justify-between bg-[#7AA874] rounded-[8px] border-[1px] border-solid border-[#171A1F]  ">
                        <img
                            src={iconUserSrc as unknown as string}
                            alt=""
                            className="size-[40px] absolute ml-[10px] max-[950px]:size-[25px]"
                        />
                        <span className="w-[100%] h-[100%] max-[950px]:text-[13px] flex items-center justify-center   ">
                            AS 25
                        </span>
                    </button>
                </div>
            </section>
        </div>
    );
}

export default TurnosActuales;
