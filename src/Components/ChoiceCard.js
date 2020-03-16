import React from 'react';


function ChoiceCard(props) {
    console.log(props)
    return (
        <div className={`choice-card ${props.winner ? "winner" : "loser"}`}>
            <h1> {props.title} </h1>
            < img src={props.imgURL} alt={props.title} />
            <h3> {props.winner ? 'won' : 'loss'} </h3>
            
        </div>
    )
}

export default ChoiceCard;