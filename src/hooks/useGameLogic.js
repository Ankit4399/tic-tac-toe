import { useState } from "react";

const winningPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],

  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],

  [0, 4, 8],
  [2, 4, 6],
];

function useGameLogic() {
  const [board, setBoard] = useState(
    Array(9).fill("")
  );

  const [isXTurn, setIsXTurn] =
    useState(true);

  const [winner, setWinner] =
    useState(null);

  const [winningCells, setWinningCells] =
    useState([]);

  function checkWinner(updatedBoard) {
    for (let pattern of winningPatterns) {
      const [a, b, c] = pattern;

      if (
        updatedBoard[a] &&
        updatedBoard[a] === updatedBoard[b] &&
        updatedBoard[a] === updatedBoard[c]
      ) {
        setWinner(updatedBoard[a]);

        setWinningCells(pattern);

        return;
      }
    }
  }

  function handleClick(index) {
    if (board[index] || winner) return;

    const updatedBoard = [...board];

    updatedBoard[index] = isXTurn
      ? "☕"
      : "🍪";

    setBoard(updatedBoard);

    checkWinner(updatedBoard);

    setIsXTurn(!isXTurn);
  }

  function resetGame() {
    setBoard(Array(9).fill(""));

    setWinner(null);

    setWinningCells([]);

    setIsXTurn(true);
  }

  const isDraw =
    board.every((cell) => cell !== "") &&
    !winner;

  return {
    board,
    isXTurn,
    winner,
    isDraw,
    winningCells,
    handleClick,
    resetGame,
  };
}

export default useGameLogic;