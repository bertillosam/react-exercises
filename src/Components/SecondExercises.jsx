import React, { useState } from "react";

const choices = ["rock", "paper", "scissors"];

const SecondExercises = () => {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState("");
  const [rockPaperScissors, setRockPaperScissors] = useState(false);

  const playGame = (choice) => {
    const compChoice = choices[Math.floor(Math.random() * choices.length)];
    setPlayerChoice(choice);
    setComputerChoice(compChoice);

    if (choice === compChoice) {
      setResult("Draw 🤝");
    } else if (
      (choice === "rock" && compChoice === "scissors") ||
      (choice === "paper" && compChoice === "rock") ||
      (choice === "scissors" && compChoice === "paper")
    ) {
      setResult("You Win 🎉");
    } else {
      setResult("Computer Wins 💻");
    }
  };

  const resetGame = () => {
    setPlayerChoice(null);
    setComputerChoice(null);
    setResult("");
  };

  return (
    <div className="">
      {!rockPaperScissors && (
        <button onClick={() => setRockPaperScissors(true)} className="gamebtn">
          Rock Paper Scissors
        </button>
      )}
      {rockPaperScissors && (
        <div className="h-[65vh] flex flex-col items-center gap-4 pt-10">
          <h1 className="text-3xl font-bold mb-6">Rock Paper Scissors</h1>

          {/* Buttons */}
          <div className="flex gap-4 mb-6">
            {choices.map((choice) => (
              <button
                key={choice}
                onClick={() => playGame(choice)}
                className="px-4 py-2 bg-violet-500 rounded-xl shadow-lg hover:scale-110 transition-transform"
              >
                {choice.charAt(0).toUpperCase() + choice.slice(1)}
              </button>
            ))}
          </div>

          {/* Results */}
          {playerChoice && (
            <div className="text-center space-y-3">
              <p className="text-lg">
                You chose: <span className="font-semibold">{playerChoice}</span>
              </p>
              <p className="text-lg">
                Computer chose:{" "}
                <span className="font-semibold">{computerChoice}</span>
              </p>
              <p className="text-2xl font-bold mt-4">{result}</p>

              <button
                onClick={resetGame}
                className="mt-6 px-4 py-2 bg-green-500 rounded-lg hover:bg-green-400 active:bg-green-300"
              >
                Ulitin
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SecondExercises;
