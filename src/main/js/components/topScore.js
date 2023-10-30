import {useEffect} from "react";

export default function TopScoreModal({ loading, score }) {

    useEffect(() => {
        new window.bootstrap.Modal("#topScoreModal", {})
    }, []);

    return (
        <div className="modal fade" id="topScoreModal" tabIndex="-1" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Leaderboard (Top 10)</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        {
                            loading ?
                            <p>Loading score....</p> :
                            (
                                score.length === 0 ?
                                <p>No score available</p> :
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Name</th>
                                            <th>Score</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            score.map((item, index) => (
                                                <tr key={`score-item-${index}`}>
                                                    <td>{index+1}.</td>
                                                    <td>{item.name}</td>
                                                    <td>{item.score}</td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            )
                        }
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
}