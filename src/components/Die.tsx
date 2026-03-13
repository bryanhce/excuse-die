import { useEffect, useState, useMemo } from "react";
import { useDice } from "../context/DiceContext";
import { EXCUSES } from "./Excuses";

const Die = () => {
    const { isRolling, excuse, handleRoll, roll } = useDice();
    const [showTooltip, setShowTooltip] = useState(false);

    // 3D rotation state
    const [rotX, setRotX] = useState(0);
    const [rotY, setRotY] = useState(0);
    const [rotZ, setRotZ] = useState(0);

    // Generate the 6 faces. The 1st face is the target excuse.
    const faces = useMemo(() => {
        const others = [...EXCUSES].sort(() => 0.5 - Math.random());
        const filteredOthers = others.filter(e => e.id !== excuse.id);
        
        return [
            excuse, // Front (target)
            filteredOthers[0] || others[0], // Back
            filteredOthers[1] || others[1], // Right
            filteredOthers[2] || others[2], // Left
            filteredOthers[3] || others[3], // Top
            filteredOthers[4] || others[4], // Bottom
        ];
    }, [roll, excuse.id]);

    // TODO might shift this into a hook
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

    // Handle the 3D roll animation
    useEffect(() => {
        if (isRolling) {
            // Determine random direction and additional spins
            // We want the final rotation to be a multiple of 360 so the front face points at the camera
            const xDir = Math.random() > 0.5 ? 1 : -1;
            const yDir = Math.random() > 0.5 ? 1 : -1;
            const zDir = Math.random() > 0.5 ? 1 : -1;
            
            // Add between 3 and 7 full rotations (360 degrees)
            const spinsX = Math.floor(Math.random() * 5) + 3;
            const spinsY = Math.floor(Math.random() * 5) + 3;
            const spinsZ = Math.floor(Math.random() * 3) + 2;

            setRotX(prev => prev + (xDir * spinsX * 360));
            setRotY(prev => prev + (yDir * spinsY * 360));
            setRotZ(prev => prev + (zDir * spinsZ * 360));
        }
    }, [isRolling]);

    const faceBaseClass = "absolute inset-0 backface-hidden flex items-center justify-center bg-alabaster rounded-3xl border-10 border-charcoal text-ochre text-[3rem] font-black p-10 text-center shadow-[inset_0_0_20px_rgba(0,0,0,0.05)]";

    return (
        <div className="relative flex flex-col items-center">

            {/* TODO shift this into its own component */}
            {/* Tooltip */}
            <div
                className={`absolute -top-24 transition-all duration-500 z-10 ${
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
                className="perspective-1200 h-80 w-80 md:h-104 md:w-104 cursor-pointer"
                onClick={handleRoll}
            >
                {/* 3D Cube Container */}
                <div 
                    className="w-full h-full relative preserve-3d transition-transform duration-2000 ease-[cubic-bezier(0.25,1,0.5,1)]"
                    style={{ transform: `rotateX(${rotX}deg) rotateY(${rotY}deg) rotateZ(${rotZ}deg)` }}
                >
                    {/* Front Face (Winner) */}
                    <div className={`${faceBaseClass}`} style={{ transform: "translateZ(calc(var(--cube-size, 320px) / 2))" }}>
                        <div className="w-full h-full flex items-center justify-center drop-shadow-sm">
                            {faces[0].dieText}
                        </div>
                    </div>

                    {/* Back Face */}
                    <div className={`${faceBaseClass}`} style={{ transform: "rotateY(180deg) translateZ(calc(var(--cube-size, 320px) / 2))" }}>
                        <div className="w-full h-full flex items-center justify-center drop-shadow-sm">
                            {faces[1].dieText}
                        </div>
                    </div>

                    {/* Right Face */}
                    <div className={`${faceBaseClass}`} style={{ transform: "rotateY(90deg) translateZ(calc(var(--cube-size, 320px) / 2))" }}>
                        <div className="w-full h-full flex items-center justify-center drop-shadow-sm">
                            {faces[2].dieText}
                        </div>
                    </div>

                    {/* Left Face */}
                    <div className={`${faceBaseClass}`} style={{ transform: "rotateY(-90deg) translateZ(calc(var(--cube-size, 320px) / 2))" }}>
                        <div className="w-full h-full flex items-center justify-center drop-shadow-sm">
                            {faces[3].dieText}
                        </div>
                    </div>

                    {/* Top Face */}
                    <div className={`${faceBaseClass}`} style={{ transform: "rotateX(90deg) translateZ(calc(var(--cube-size, 320px) / 2))" }}>
                        <div className="w-full h-full flex items-center justify-center drop-shadow-sm">
                           {faces[4].dieText}
                        </div>
                    </div>

                    {/* Bottom Face */}
                    <div className={`${faceBaseClass}`} style={{ transform: "rotateX(-90deg) translateZ(calc(var(--cube-size, 320px) / 2))" }}>
                        <div className="w-full h-full flex items-center justify-center drop-shadow-sm">
                            {faces[5].dieText}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Die;
