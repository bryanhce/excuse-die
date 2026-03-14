import { IconVolume, IconVolume3 } from "@tabler/icons-react";
import { useDice } from "../context/useDice";

const AudioButton = () => {
    const { isMuted, setIsMuted } = useDice();

    return (
        <button
            className="z-10 p-2 text-charcoal hover:text-ochre transition-colors focus:outline-none focus:ring-2 focus:ring-ochre rounded-full"
            onClick={(e) => {
                e.stopPropagation();
                setIsMuted(!isMuted);
            }}
        >
            {isMuted ? <IconVolume3 size={32} /> : <IconVolume size={32} />}
        </button>
    );
};

export default AudioButton;
