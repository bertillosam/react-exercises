import React, { useState } from "react";
import { X as XIcon, Circle } from "lucide-react";

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const FirstExercises = () => {
  const [tikTakTok, setTikTakTok] = useState(false);

  const [board, setBoard] = useState(Array(9).fill(""));
  const [count, setCount] = useState(0);
  const [lock, setLock] = useState(false);
  const [winner, setWinner] = useState(null);

  const checkWinner = (newBoard) => {
    for (let combo of winningCombinations) {
      const [a, b, c] = combo;
      if (
        newBoard[a] &&
        newBoard[a] === newBoard[b] &&
        newBoard[a] === newBoard[c]
      ) {
        setWinner(newBoard[a] === "x" ? "Player X" : "Player O");
        setLock(true);
        return;
      }
    }

    // Check draw
    if (!newBoard.includes("") && !winner) {
      setWinner("Draw");
      setLock(true);
    }
  };

  const toggle = (index) => {
    if (lock || board[index] !== "") return; // Don't overwrite or play if locked

    const newBoard = [...board];
    newBoard[index] = count % 2 === 0 ? "x" : "o";

    setBoard(newBoard);
    setCount(count + 1);
    checkWinner(newBoard);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(""));
    setCount(0);
    setLock(false);
    setWinner(null);
  };

  return (
    <div className="">
      {!tikTakTok && (
        <button onClick={() => setTikTakTok(true)} className="gamebtn">
          TikTakTok
        </button>
      )}
      {tikTakTok && (
        <>
          <div className="h-[65vh] flex flex-col items-center gap-4 pt-10">
            <div className="flex flex-col w-full max-w-sm aspect-square">
              {[0, 1, 2].map((row) => (
                <div key={row} className="flex flex-1">
                  {[0, 1, 2].map((col) => {
                    const index = row * 3 + col;
                    return (
                      <div
                        key={index}
                        className={`box ${
                          board[index] === "" && !lock
                            ? "hover:scale-105"
                            : "cursor-default hover:animate-none"
                        }`}
                        onClick={() => toggle(index)}
                      >
                        {board[index] === "x" && (
                          <XIcon className="text-rose-500 w-25 h-25" />
                        )}
                        {board[index] === "o" && (
                          <Circle className="text-amber-400 w-25 h-25" />
                        )}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>

            {winner && (
              <div className="text-lg font-semibold text-center">
                {winner === "Draw" ? "Aynako draw!" : `${winner} panalo!`}
              </div>
            )}

            <button
              className="px-4 py-2 bg-violet-700 text-white rounded-lg hover:bg-violet-600 active:bg-violet-300"
              onClick={resetGame}
            >
              Ulitin
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default FirstExercises;
