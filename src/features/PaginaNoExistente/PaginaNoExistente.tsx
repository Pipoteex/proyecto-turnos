import misionesGreenSrc from "../../images/misiones-green.svg";
import misionesRedSrc from "../../images/misiones-red.svg";

import Wawe from "../../images/wave.svg?react";
import Logo from "../../images/logo.svg?react";

const PaginaNoExistente = () => {
    return (
        <div className="relative w-[100vw] h-[100vh] bg-gradient-to-r from-[#347dce] from-40% overflow-hidden">
            <img
                src={misionesGreenSrc as unknown as string}
                alt=""
                className=" top-0 absolute right-0 w-[50%] max-w-[480px] min-w-[400px] z-[1] max-[720px]:mr-[-100px] max-[720px]:w-[70%]"
            />
            <img
                src={misionesRedSrc as unknown as string}
                alt=""
                className=" top-0 absolute right-0 w-[50%] max-w-[480px] min-w-[400px] z-[1] max-[720px]:mr-[-100px] max-[720px]:w-[70%]"
            />

            <Logo className="absolute top-[50%] z-10 max-[720px]:w-[130px] max-[720px]:top-[44%] max-[720px]:ml-[-13px]" />

            <Wawe className="absolute bottom-0 z-0 !h-[42%] max-[720px]:!w-[350%] max-[720px]:!h-[55%]" />

            <div className=" absolute w-[100%] h-[35%] bottom-0 font-sans flex flex-col items-center justify-center">
                <span className="w-[100%] mb-[30px] max-[1120px]:text-[30px] max-[920px]:text-[25px] max-[720px]:text-[25px] font-semibold text-[40px]  text-[#FFFFFF] text-center ">
                    Página no existente...
                </span>
            </div>
        </div>
    );
};

export default PaginaNoExistente;
