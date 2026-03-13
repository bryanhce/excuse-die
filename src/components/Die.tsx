import { useEffect, useState } from "react";
import { useDice } from "../context/DiceContext";

const Die = () => {
    const { isRolling, excuse, handleRoll } = useDice();
    const [showTooltip, setShowTooltip] = useState(false);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.code === "Space" || event.code === "Enter") {
                event.preventDefault();
                handleRoll();
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    // Show tooltip 5s after a roll finishes
    useEffect(() => {
        if (isRolling) {
            setShowTooltip(false);
            return;
        }

        const timer = setTimeout(() => setShowTooltip(true), 5000);
        return () => clearTimeout(timer);
    }, [isRolling]);

    return (
        <div className="relative flex flex-col items-center">
            {/* Tooltip */}
            <div
                className={`absolute -top-14 transition-all duration-500 ${
                    showTooltip
                        ? "opacity-100 animate-bounce-tooltip"
                        : "opacity-0 pointer-events-none"
                }`}
            >
                <div className="bg-charcoal text-alabaster text-l font-medium px-4 py-2 rounded-2xl shadow-md whitespace-nowrap">
                    Click to roll!
                    {/* Caret */}
                    <div className="absolute left-1/2 -translate-x-1/2 -bottom-[6px] w-0 h-0 border-l-[7px] border-r-[7px] border-t-[7px] border-l-transparent border-r-transparent border-t-charcoal" />
                </div>
            </div>

            {/* Die */}
            <div
                className={`h-80 w-80 md:h-104 md:w-104 bg-alabaster rounded-3xl shadow-[0_15px_35px_rgba(0,0,0,0.2)] cursor-pointer p-10 flex justify-center items-center ${isRolling ? "animate-shake" : ""}`}
                onClick={handleRoll}
            >
                <div className="text-ochre stroke-2 h-full w-full text-[3rem] font-black drop-shadow-sm flex text-center items-center justify-center border-10 border-charcoal rounded-3xl">
                    {excuse.dieText}
                </div>
            </div>
        </div>
    );
};

export default Die;
