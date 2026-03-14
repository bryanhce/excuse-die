import { createContext } from "react";
import type { Excuse } from "../components/Excuses";

export interface DiceContextType {
    roll: number;
    isRolling: boolean;
    excuse: Excuse;
    isMuted: boolean;
    setIsMuted: (muted: boolean) => void;
    handleRoll: () => void;
}

export const DiceContext = createContext<DiceContextType | null>(null);
