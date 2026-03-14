import { useContext } from "react";
import { DiceContext, type DiceContextType } from "./DiceContextDef";

export const useDice = (): DiceContextType => {
    const ctx = useContext(DiceContext);
    if (!ctx) throw new Error("useDice must be used within a DiceProvider");
    return ctx;
};
