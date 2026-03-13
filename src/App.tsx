import DiceArena from "./components/DiceArena";
import InfoPanel from "./components/InfoPanel";
import { DiceProvider } from "./context/DiceContext";

export default function App() {
    return (
        <DiceProvider>
            <div className="flex flex-col md:flex-row h-screen w-screen overflow-hidden font-sans">
                {/* 70% Left Panel */}
                <div className="w-full h-[60%] md:w-[70%] md:h-full">
                    <DiceArena />
                </div>

                {/* 30% Right Panel */}
                <div className="w-full h-[40%] md:w-[30%] md:h-full">
                    <InfoPanel />
                </div>
            </div>
        </DiceProvider>
    );
}
