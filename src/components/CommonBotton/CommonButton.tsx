interface CommonButtonType {
    text: string;
    style?: string;
    onClick: () => void;
}

const CommonButton = ({ text, style, onClick }: CommonButtonType) => {
    return (
        <div
            className={`${style}  px-[10px] py-[6px] rounded-lg cursor-pointer transition-all hover:opacity-80`}
            onClick={onClick}
        >
            {text}
        </div>
    );
};

export default CommonButton;
