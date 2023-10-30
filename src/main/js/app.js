import { createRoot } from "react-dom/client";
import Buttons from "./components/buttons";
import Input from "./components/input";
import { useState } from "react";
import { ScoreContext } from "./context";

function App() {

    const defaultInputValue = new Array(10).fill("");
    const [score, setScore] = useState(0)
    const [inputValue, setInputValue] = useState(defaultInputValue)

    const updateScore = (score) => {
        setScore(score);
    }

    const updateInputValue = (value) => {
        setInputValue(value);
    }

    const resetInputValue = () => {
        setInputValue(defaultInputValue);
        document.getElementById("input0").focus();
    }

    return (
        <div className={"min-vw-100 min-vh-100 d-flex align-items-center justify-content-center flex-column"}>
            <ScoreContext.Provider value={{ score, updateScore, inputValue, updateInputValue, resetInputValue }}>
                <Input />
                <Buttons />
            </ScoreContext.Provider>
        </div>
    );
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);