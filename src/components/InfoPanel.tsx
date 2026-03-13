import { useDice } from "../context/DiceContext";

const InfoPanel = () => {
    const { excuse } = useDice();

    return (
        <div className="w-full h-full bg-sand p-8 border-t md:border-t-0 md:border-l border-black/5 overflow-y-auto flex flex-col gap-6">
            <div>
                <h3 className="text-charcoal uppercase tracking-widest font-bold text-lg">
                    Roll Information
                </h3>
                <hr className="border-charcoal/10 mt-3" />
            </div>

            <div className="flex flex-col items-center py-4">
                <span className="text-[3rem] font-black text-ochre leading-none drop-shadow-sm">
                    {excuse.dieText}
                </span>
            </div>

            <p className="text-sm text-charcoal leading-relaxed">
                <strong>More Elaboration</strong>
                <br />
                {excuse.elabText}
            </p>

            <hr className="border-charcoal/10" />
        </div>
    );
};

export default InfoPanel;
