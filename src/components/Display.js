import React, { useState } from "react";
import Card from "./Card";
import Score from "./Score";

function Display () {
    const initialScore = 0
    const [score, setScore] = useState(initialScore)
    const [topScore, setTopScore] = useState(0)
    const [pickedCard, setPickedCard] = useState(0)

    const evalScore = (e) => {
        /* setPickedCard(e.target.id)
        console.log(e.target.id)
        console.log(pickedCard)
        if (pickedCard !== prevPickedCard) { */
            setScore(score +1)
        /* }    
           else setScore(initialScore) */


    }

    return (
        <>
            <Score
                score={score}
                setScore={setScore}
                topScore={topScore}
                setTopScore={setTopScore}
            />
            <Card 
                score={score}
            />            
            <div className="cardHolder"
            id="0"
            onClick={evalScore}></div>
            <div className="cardHolder"
            id="1"
            onClick={evalScore}></div>
            <div className="cardHolder"
            id="2"
            onClick={evalScore}></div>
            <div className="cardHolder"
            id="3"
            onClick={evalScore}></div>
            <div className="cardHolder"
            id="4"
            onClick={evalScore}></div>
            <div className="cardHolder"
            id="5"
            onClick={evalScore}></div>
            <div className="cardHolder"
            id="6"
            onClick={evalScore}></div>
            <div className="cardHolder"
            id="7"
            onClick={evalScore}></div>
        </>
    )
}

export default Display