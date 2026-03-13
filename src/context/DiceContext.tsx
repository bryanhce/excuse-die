import { createContext, useContext, useRef, useState, type ReactNode } from "react";
import useSound from "use-sound";
import { EXCUSES, MAX_FACES, type Excuse } from "../components/Excuses";

interface DiceContextType {
    roll: number;
    isRolling: boolean;
    excuse: Excuse;
    isMuted: boolean;
    setIsMuted: (muted: boolean) => void;
    handleRoll: () => void;
}

const DiceContext = createContext<DiceContextType | null>(null);

export const DiceProvider = ({ children }: { children: ReactNode }) => {
    const [roll, setRoll] = useState(4);
    const [isRolling, setIsRolling] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const isRollingRef = useRef(false);

    const [playRoll] = useSound("/rolling-sound.mp3", {
        soundEnabled: !isMuted,
    });

    const excuse: Excuse = EXCUSES[roll - 1];

    const handleRoll = () => {
        if (isRollingRef.current) return;
        isRollingRef.current = true;
        setIsRolling(true);

        if (!isMuted) {
            playRoll();
        }

        setTimeout(() => {
            const newRoll = Math.floor(Math.random() * MAX_FACES) + 1;
            setRoll(newRoll);
            setIsRolling(false);
            isRollingRef.current = false;
        }, 500);
    };

    return (
        <DiceContext.Provider value={{ roll, isRolling, excuse, isMuted, setIsMuted, handleRoll }}>
            {children}
        </DiceContext.Provider>
    );
};

export const useDice = (): DiceContextType => {
    const ctx = useContext(DiceContext);
    if (!ctx) throw new Error("useDice must be used within a DiceProvider");
    return ctx;
};
