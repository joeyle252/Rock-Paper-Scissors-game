// import React from "react";
import './style.css';
import React, { useState } from "react";
import ChoiceCard from './Components/ChoiceCard.js';

// const choices = {
//   rock:
//     "https://opengameart.org/sites/default/files/forum-attachments/very%20simple%20rock_0.png",
//   paper: "http://pngimagesfree.com/Paper/Thumb/blank-note-paper-free-clipa.png",
//   scissors: "http://www.pngmart.com/files/1/Scissors-PNG-Pic.png"
// };

export const CHOICES = {

  scissors: {
    name: "scissors",
    url: "http://www.pngmart.com/files/1/Scissors-PNG-Pic.png"
  },
  paper: {
    name: "paper",
    url: "http://pngimagesfree.com/Paper/Thumb/blank-note-paper-free-clipa.png"
  },
  rock: {
    name: "rock",
    url:
      "https://opengameart.org/sites/default/files/forum-attachments/very%20simple%20rock_0.png"
  }
};

export const getRandomChoice = () => {
  let choiceNames = Object.keys(CHOICES); // returns an array of the keys, so: ['scissors', 'paper', 'rock']
  let randomIndex = Math.floor(Math.random() * 3); // either 0, 1, or 2
  let choiceName = choiceNames[randomIndex];

  return CHOICES[choiceName];
};

export const getRoundOutcome = userChoice => {
  const computerChoice = getRandomChoice().name;
  let result;

  if (userChoice === "rock") {
    result = computerChoice === "scissors" ? "Victory!" : "Defeat!";
  }
  if (userChoice === "paper") {
    result = computerChoice === "rock" ? "Victory!" : "Defeat!";
  }
  if (userChoice === "scissors") {
    result = computerChoice === "paper" ? "Victory!" : "Defeat!";
  }

  if (userChoice === computerChoice) result = "Tie!";
  return [result, computerChoice];
};

function App() {
  const [prompt, setGamePrompt] = useState("START");
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [previousWinner, setPreviousWinner] = useState(null);
  const [gameHistory, setGameHistory] = useState([]);


  const onPlayerChoose = playerChoice => {
    const [result, computerChoice] = getRoundOutcome(playerChoice);
    const newComputerChoice = CHOICES[computerChoice]
    const newUserChoice = CHOICES[playerChoice];
    setPlayerChoice(newUserChoice);
    setComputerChoice(newComputerChoice);

    // console.log('result',result);
    // console.log('computerchoice',computerChoice);

    if (result === "Victory!") {
      setPreviousWinner("You");
    } else if (result === "Defeat!") {
      setPreviousWinner("Computer");
    } else {
      setPreviousWinner("Tie");
    }

    setGamePrompt(result);
    gameHistory.push(result);
    setGameHistory(gameHistory);
    // console.log('history',gameHistory)

  };
  return (
    <div className="App">
      <div className="container">
        <div className="row mb-3">
          <div className="col-md-8 themed-grid-col">
            <ChoiceCard
              title="Computer"
              previousWinner={previousWinner}
              imgURL={computerChoice && computerChoice.url}
            />
            <h1> {prompt} </h1>
            <div className="container">
              <button
                className="btn btn-success btn-lg"
                onClick={() => onPlayerChoose("rock")}
              >
                Rock
        </button>
              <button
                className="btn btn-success btn-lg"
                onClick={() => onPlayerChoose("paper")}
              >
                Paper
        </button>
              <button
                className="btn btn-success btn-lg"
                onClick={() => onPlayerChoose("scissors")}
              >
                Scissors
        </button>
            </div>
            <ChoiceCard
              title="You"
              previousWinner={previousWinner}
              imgURL={playerChoice && playerChoice.url}
            />
          </div>
          <div>
            <div className="col-md-4 themed-grid-col">
              <h3>History</h3>
              <ul>
                {gameHistory.map(result => {
                  return <li key={result}>{result}</li>;
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
