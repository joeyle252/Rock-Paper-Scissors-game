
import React from 'react';

const DEFAULT_IMG =
  "https://lh3.googleusercontent.com/zpM9mz-mAHTM0FjXVAiCTMbFew-a7dmk70iiUXlszoW-lg1Br6vGkvkCmLdAA_cdh11E";

export default function ChoiceCard(props) {
    const won = props.title === props.previousWinner;
    console.log(props.title, props.previousWinner, won)
    let className;
    const hasPreviousGame =
        props.previousWinner === "Computer" || props.previousWinner === "You";
    if (hasPreviousGame) {
        className = won ? "winner" : "loser";
    }

    let prompt;
    if (won) {
        prompt = "Won";
        className = won ? "winner" : "loser";
    } else if (props.previousWinner === "Tie") {
        prompt = "Tie";
    } else if (props.previousWinner === null) {
        prompt = "Start";
    } else {
        prompt = "Lose";
    }
    console.log(props)
    return (
        <div className={`choice-card ${className}`}>
            <h1> {props.title} </h1>
            < img src={props.imgURL || DEFAULT_IMG} alt={props.title} />
            <h3> {prompt} </h3>
        </div>
    )
}

// export default ChoiceCard;