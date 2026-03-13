import { useEffect } from "react";

const useHotKeyRoll = (handleRoll: () => void) => {
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.code === "Space" || event.code === "Enter") {
                event.preventDefault();
                handleRoll();
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [handleRoll]);
};

export default useHotKeyRoll;
