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
    const [roll, setRoll] = useState(1); // 1 is defualt landing
    const [isRolling, setIsRolling] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const isRollingRef = useRef(false);

    // TODO check if there is a way to mute without updating playRoll, then
    // can remove the isMute checked in handleRoll and
    // remove dep in useHotKeyRoll.ts
    const [playRoll] = useSound("/rolling-sound.mp3", {
        soundEnabled: !isMuted,
    });

    const excuse: Excuse = EXCUSES[roll - 1];

    const handleRoll = () => {
        if (isRollingRef.current) return;
        isRollingRef.current = true;
        setIsRolling(true);

        // chose max to prevent landing excuse to be shown
        const newRoll = Math.max(2, Math.floor(Math.random() * MAX_FACES) + 1);
        // add timeout here so newRoll data isnt seen immediately when user rolls
        setTimeout(() => {
            setRoll(newRoll);
        }, 1000)
        
        if (!isMuted) {
            playRoll();
        }
        
        setTimeout(() => {
            setIsRolling(false);
            isRollingRef.current = false;
        }, 2000);
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
