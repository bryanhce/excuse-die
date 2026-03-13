import { useEffect, useState } from "react";
import { useDice } from "../context/DiceContext";

const ToolTip = () => {
    const { isRolling } = useDice();

    const [showTooltip, setShowTooltip] = useState(false);

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
        <div
            className={`absolute -top-24 transition-all duration-500 z-10 ${
                showTooltip ? "opacity-100 animate-bounce-tooltip" : "opacity-0 pointer-events-none"
            }`}
        >
            <div className="bg-charcoal text-alabaster text-l font-medium px-4 py-2 rounded-2xl shadow-md whitespace-nowrap">
                Click to roll!
                {/* Caret */}
                <div className="absolute left-1/2 -translate-x-1/2 -bottom-[6px] w-0 h-0 border-l-[7px] border-r-[7px] border-t-[7px] border-l-transparent border-r-transparent border-t-charcoal" />
            </div>
        </div>
    );
};

export default ToolTip;
