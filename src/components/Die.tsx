import { useEffect, useMemo, useState } from "react";
import { useDice } from "../context/useDice";
import { EXCUSES } from "./Excuses";
import Face from "./Face";
import ToolTip from "./ToolTip";
import useHotKeyRoll from "../hooks/useHotKeyRoll";

const Die = () => {
    const { isRolling, excuse, handleRoll, roll } = useDice();
    useHotKeyRoll(handleRoll);

    // 3D rotation state
    const [rotX, setRotX] = useState(0);
    const [rotY, setRotY] = useState(0);
    const [rotZ, setRotZ] = useState(0);

    // Generate the 6 faces
    // useMemo to prevent faces from regenerating when rotXYZ are updated
    const faces = useMemo(() => {
        const others = [...EXCUSES].sort(() => 0.5 - Math.random());
        const filteredOthers = others.filter((e) => e.id !== excuse.id);

        return [
            excuse, // Front (target)
            filteredOthers[0], // Back
            filteredOthers[1], // Right
            filteredOthers[2], // Left
            filteredOthers[3], // Top
            filteredOthers[4], // Bottom
        ];
    }, [roll, excuse.id]);

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

            setRotX((prev) => prev + xDir * spinsX * 360);
            setRotY((prev) => prev + yDir * spinsY * 360);
            setRotZ((prev) => prev + zDir * spinsZ * 360);
        }
    }, [isRolling]);

    const faceBaseClass =
        "absolute inset-0 backface-hidden flex items-center justify-center bg-alabaster rounded-3xl border-10 border-charcoal p-10 text-center shadow-[inset_0_0_20px_rgba(0,0,0,0.05)]";

    return (
        <div className="relative flex flex-col items-center">
            <ToolTip />

            {/* Die */}
            <div
                className="perspective-1200 h-60 w-60 md:h-104 md:w-104 cursor-pointer"
                onClick={handleRoll}
            >
                {/* 3D Cube Container */}
                <div
                    className="w-full h-full relative preserve-3d transition-transform duration-2000 ease-[cubic-bezier(0.25,1,0.5,1)]"
                    style={{
                        transform: `rotateX(${rotX}deg) rotateY(${rotY}deg) rotateZ(${rotZ}deg)`,
                    }}
                >
                    {/* Front Face (Final excuse) */}
                    <div
                        className={`${faceBaseClass}`}
                        style={{ transform: "translateZ(calc(var(--cube-size, 320px) / 2))" }}
                    >
                        <Face text={faces[0].dieText} />
                    </div>

                    {/* Back Face */}
                    <div
                        className={`${faceBaseClass}`}
                        style={{
                            transform:
                                "rotateY(180deg) translateZ(calc(var(--cube-size, 320px) / 2))",
                        }}
                    >
                        <Face text={faces[1].dieText} />
                    </div>

                    {/* Right Face */}
                    <div
                        className={`${faceBaseClass}`}
                        style={{
                            transform:
                                "rotateY(90deg) translateZ(calc(var(--cube-size, 320px) / 2))",
                        }}
                    >
                        <Face text={faces[2].dieText} />
                    </div>

                    {/* Left Face */}
                    <div
                        className={`${faceBaseClass}`}
                        style={{
                            transform:
                                "rotateY(-90deg) translateZ(calc(var(--cube-size, 320px) / 2))",
                        }}
                    >
                        <Face text={faces[3].dieText} />
                    </div>

                    {/* Top Face */}
                    <div
                        className={`${faceBaseClass}`}
                        style={{
                            transform:
                                "rotateX(90deg) translateZ(calc(var(--cube-size, 320px) / 2))",
                        }}
                    >
                        <Face text={faces[4].dieText} />
                    </div>

                    {/* Bottom Face */}
                    <div
                        className={`${faceBaseClass}`}
                        style={{
                            transform:
                                "rotateX(-90deg) translateZ(calc(var(--cube-size, 320px) / 2))",
                        }}
                    >
                        <Face text={faces[5].dieText} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Die;
