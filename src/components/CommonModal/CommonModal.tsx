import { ReactNode } from "react";

interface CommonModalTypes {
    children: ReactNode;
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    withHeader?: boolean;
}

const CommonModal = ({
    children,
    isOpen,
    setIsOpen,
    withHeader,
}: CommonModalTypes) => {
    return isOpen ? (
        <div className="w-[100vw] h-[100vh] bg-stone-600 bg-opacity-30 absolute flex justify-center items-center z-10 top-0">
            <div className="bg-white rounded-lg min-w-[400px] min-h-[100px] shadow-2xl max-[720px]:min-w-[90%]">
                {withHeader && (
                    <div className="flex justify-end border-b-2">
                        <p
                            className="text-black p-[10px] cursor-pointer transition-all hover:opacity-[0.5]"
                            onClick={() => setIsOpen(false)}
                        >
                            X
                        </p>
                    </div>
                )}
                <div>{children}</div>
            </div>
        </div>
    ) : (
        <></>
    );
};

export default CommonModal;
