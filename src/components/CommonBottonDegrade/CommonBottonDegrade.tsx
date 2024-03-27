import { ReactNode } from "react";

interface CommonBottonDegradeType {
    children?: ReactNode;
    style?: string;
    onClick?: () => void;
}

const CommonBottonDegrade = ({
    children,
    onClick,
    style,
}: CommonBottonDegradeType) => {
    return (
        <div
            className={`${style} flex items-center justify-center cursor-pointer bg-gradient-to-r from-[#50376f] from-25% to-[#b6264f] to-60% rounded-[5px] text-[#FFFFFF] font-semibold`}
            onClick={onClick}
        >
            {children}
        </div>
    );
};

export default CommonBottonDegrade;
