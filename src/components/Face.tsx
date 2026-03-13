interface FaceProps {
    text: string;
}

const Face = ({ text }: FaceProps) => {
    return (
        <div className="w-full h-full flex items-center justify-center text-ochre text-[1.8rem] md:text-[3rem] font-black drop-shadow-sm">
            {text}
        </div>
    );
};

export default Face;
