import React from "react";

import misionesGreenSrc from "../../images/misiones-green.svg";
import misionesRedSrc from "../../images/misiones-red.svg";

function Turnos() {
    return (
        <div className="relative w-[100vw] h-[100vh] bg-[#70249c]">
            <img src={misionesGreenSrc} alt="" className="absolute right-0" />
            <img src={misionesRedSrc} alt="" className="absolute right-0" />
        </div>
    );
}

export default Turnos;
