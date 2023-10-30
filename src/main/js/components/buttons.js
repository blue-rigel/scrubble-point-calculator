import {useContext, useState} from "react";
import { ScoreContext } from "../context";
import SaveScoreModal from "./saveScore";
import TopScoreModal from "./topScore";

export default function Buttons() {

    const { resetInputValue } = useContext(ScoreContext)
    const toggleSaveScoreModal = () => window.bootstrap.Modal.getInstance("#saveScoreModal").toggle();
    const toggleTopScoreModal = async () => {
        window.bootstrap.Modal.getInstance("#topScoreModal").toggle()
        await getTopScore()
    };
    const [loading, setLoading] = useState(false);
    const [score, setScore] = useState([]);

    const getTopScore = async () => {
        setLoading(true);
        const response = await fetch("/api/scores/search/findTop10ByOrderByScoreDesc", { method: "GET" });
        const data = await response.json();
        setScore(data?._embedded?.scores);
        setLoading(false);
    }

    return (
        <div>
            <button
                type="button"
                className="btn btn-warning"
                onClick={() => {
                    if(confirm("Are you sure you wish to reset all tiles ?")) {
                        resetInputValue();
                    }
                }}
            >
                Reset Tiles
            </button>
            <button
                type="button"
                className="btn btn-success mx-5"
                onClick={toggleSaveScoreModal}
            >
                Save Score
            </button>
            <button
                type="button"
                className="btn btn-secondary"
                onClick={toggleTopScoreModal}
            >
                View Top Scores
            </button>
            <SaveScoreModal />
            <TopScoreModal loading={loading} score={score} />
        </div>
    )
}