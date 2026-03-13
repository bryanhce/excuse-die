import { useDice } from "../context/DiceContext";

const InfoPanel = () => {
    const { excuse, isRolling} = useDice();

    return (
        <div className="w-full h-full bg-sand p-8 border-t md:border-t-0 md:border-l border-black/5 overflow-y-auto flex flex-col gap-6">
            <div>
                <h3 className="text-charcoal uppercase tracking-widest font-bold text-lg">
                    Roll Information
                </h3>
                <hr className="border-charcoal/10 mt-3" />
            </div>

            <div className="flex flex-col items-center text-center justify-center py-4 h-45">
                <span className="text-[3rem] font-black text-ochre leading-none drop-shadow-sm">
                    {isRolling ? "Rolling..." : excuse.dieText}
                </span>
            </div>

            <p className="text-sm text-charcoal leading-relaxed">
                <strong>Folowup Elaborations</strong>
                <br />
                {isRolling ? "" : excuse.elabText}
            </p>

            <hr className="border-charcoal/10" />
        </div>
    );
};

export default InfoPanel;
