import { useContext, useEffect, useState } from "react";
import { ScoreContext } from "../context";

export default function SaveScoreModal() {

    const { score, resetInputValue } = useContext(ScoreContext)
    const [name, setName] = useState("");
    const [loading, setLoading] = useState(false);

    const saveScore = async () => {
        await fetch("/api/scores",{
            method: "POST",
            body: JSON.stringify({
                name,
                score
            }),
            headers: {
                "Content-Type": "application/json",
            }
        })
        window.bootstrap.Modal.getInstance("#saveScoreModal").hide();
        resetInputValue();
    }

    useEffect(() => {
        // Initialize modal instance
        new window.bootstrap.Modal("#saveScoreModal", {})
    }, []);

    return (
        <div className="modal fade" id="saveScoreModal" tabIndex="-1" aria-hidden="true">
            <div className="modal-dialog">
                <form
                    className="modal-content"
                    onSubmit={async (e) => {
                        e.preventDefault();
                        setLoading(true)
                        await saveScore();
                        setLoading(false);
                    }}
                >
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Save your score</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="my-3">
                            <label htmlFor="name" className="form-label">Enter Name</label>
                            <input
                                type="text"
                                id="name"
                                className="form-control"
                                placeholder="No Name"
                                onChange={(e) => setName(e.target.value)}
                                disabled={loading}
                            />
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="submit" className="btn btn-primary" disabled={loading}>
                            Save&nbsp;
                            { loading &&
                                <div className="spinner-border spinner-border-sm" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            }
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}