import React from "react";

function Score (props) {

    return (
        <div className="scoreBoard">
            <div className="currentScore">Current Score {props.score}</div>
        </div>
    )
}

export default Score