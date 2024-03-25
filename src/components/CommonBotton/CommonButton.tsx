interface CommonButtonType {
    text: string;
    style?: string;
    onClick: () => void;
}

const CommonButton = ({ text, style, onClick }: CommonButtonType) => {
    return (
        <div
            className={`${style} bg-[#F26298] text-[white] px-[10px] py-[6px] rounded-lg cursor-pointer hover:opacity-80`}
            onClick={onClick}
        >
            {text}
        </div>
    );
};

export default CommonButton;
