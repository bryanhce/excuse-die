import AudioButton from "./AudioButton";
import Die from "./Die";

const DiceArena = () => {
    return (
        <div className="bg-terracotta relative transition-colors duration-200 flex justify-center items-center h-full w-full">
            <div className="absolute top-6 left-6">
                <AudioButton />
            </div>

            <Die />
        </div>
    );
};

export default DiceArena;
