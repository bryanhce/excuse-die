import { useDice } from "../context/DiceContext";
import { motion, AnimatePresence } from "framer-motion";

const InfoPanel = () => {
    const { excuse, isRolling } = useDice();

    const titleVariants = {
        initial: { opacity: 0, y: 20, filter: "blur(5px)", scale: 0.9 },
        animate: { opacity: 1, y: 0, filter: "blur(0px)", scale: 1 },
        exit: { opacity: 0, y: -20, filter: "blur(5px)", scale: 1.1 },
    };

    const descVariants = {
        initial: { opacity: 0, y: 10, filter: "blur(3px)" },
        animate: { opacity: 1, y: 0, filter: "blur(0px)" },
        exit: { opacity: 0, y: -10, filter: "blur(3px)" },
    };

    return (
        <div className="w-full h-full bg-sand p-8 border-t md:border-t-0 md:border-l border-black/5 overflow-y-auto flex flex-col gap-6">
            <div>
                <h3 className="text-charcoal uppercase tracking-widest font-bold text-lg">
                    Roll Information
                </h3>
                <hr className="border-charcoal/10 mt-3" />
            </div>

            <div className="flex flex-col items-center text-center justify-center py-4 h-45">
                <AnimatePresence mode="wait">
                    <motion.span
                        key={isRolling ? "rolling" : excuse.id}
                        variants={titleVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="text-[3rem] font-black text-ochre leading-none drop-shadow-sm"
                    >
                        {isRolling ? "Rolling..." : excuse.dieText}
                    </motion.span>
                </AnimatePresence>
            </div>

            <div className="text-sm text-charcoal leading-relaxed min-h-20">
                <strong>Followup Elaborations</strong>
                <br />
                <AnimatePresence mode="wait">
                    <motion.div
                        key={isRolling ? "rolling-elab" : excuse.id}
                        variants={descVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="mt-1"
                    >
                        {isRolling ? "Cooking up a story..." : excuse.elabText}
                    </motion.div>
                </AnimatePresence>
            </div>

            <hr className="border-charcoal/10" />
        </div>
    );
};

export default InfoPanel;
