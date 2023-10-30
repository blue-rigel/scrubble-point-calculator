import { useContext, useEffect, useMemo, useState } from "react";
import { getScoreMap } from "../util";
import { ScoreContext } from "../context";

export default function Input() {

    const { score, updateScore, inputValue, updateInputValue } = useContext(ScoreContext)
    const scoreMap = useMemo(() => getScoreMap(), [])

    useEffect(() => {
        let _score = 0;
        for (let input of inputValue) {
            _score+=scoreMap.get(input)
        }
        updateScore(_score)
    }, [inputValue]);

    return (
        <>
            <div className={"mx-5 mb-5"}>
                <div className="input-group">
                    {
                        inputValue.map((value, index) => (
                            <input
                                type="text"
                                className="form-control text-center"
                                id={`input${index}`}
                                key={`Input-${index}`}
                                maxLength={1}
                                value={value}
                                pattern={"[A-Za-z]"}
                                onChange={(e) => {
                                    const _input = e.target.value;
                                    // Skip invalid input
                                    if(!(new RegExp(/^[A-Za-z]$/).test(_input) || _input === "")) {
                                        return
                                    }
                                    // Safely update array
                                    let _inputValue = [...inputValue];
                                    _inputValue[index] = _input.toUpperCase();
                                    updateInputValue(_inputValue);
                                    // move to next input
                                    if (index < 9 && _input !== "") {
                                        document.getElementById(`input${index+1}`).focus();
                                    }
                                    // move to prev input
                                    if (index > 0 && _input === "") {
                                        document.getElementById(`input${index-1}`).focus();
                                    }
                                }}
                            />
                        ))
                    }
                </div>
            </div>
            <div className={"mb-5"}>
                Score: {score}
            </div>
        </>
    )
}