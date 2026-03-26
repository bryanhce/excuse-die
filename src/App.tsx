import DiceArena from "./components/DiceArena";
import InfoPanel from "./components/InfoPanel";
import { DiceProvider } from "./context/DiceContext";

export default function App() {
    return (
        <DiceProvider>
            <div className="flex flex-col md:flex-row min-h-screen w-screen font-sans">
                {/* 70% Left Panel */}
                <div className="w-full h-[60vh] md:w-[70%] md:h-screen">
                    <DiceArena />
                </div>

                {/* 30% Right Panel */}
                <div className="w-full md:w-[30%]">
                    <InfoPanel />
                </div>
            </div>
        </DiceProvider>
    );
}
