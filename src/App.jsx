import Board from "./components/Board";
import Status from "./components/Status";
import Buttons from "./components/Buttons";

import useGameLogic from "./hooks/useGameLogic";

import "./App.css";

function App() {
  const {
    board,
    isXTurn,
    winner,
    isDraw,
    winningCells,
    handleClick,
    resetGame,
  } = useGameLogic();

  return (
    <div className="container">

      {/* Decorative Elements */}
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>

      <div className="doodle doodle-1">☕</div>
      <div className="doodle doodle-2">✦</div>
      <div className="doodle doodle-3">❋</div>

      <div className="game-card">

        <h1 className="title">
          Chai & <span>Cookies</span>
        </h1>

        <p className="subtitle">
          COZY TIC TAC TOE
        </p>

        <Status
          winner={winner}
          isDraw={isDraw}
          isXTurn={isXTurn}
        />

        <Board
          board={board}
          handleClick={handleClick}
          winningCells={winningCells}
        />

        {(winner || isDraw) && (
          <div className="result-box">
            {winner
              ? `${
                  winner === "☕"
                    ? "☕ Chai"
                    : "🍪 Cookie"
                } Wins!`
              : "It's a Draw!"}
          </div>
        )}

        <Buttons resetGame={resetGame} />

      </div>
    </div>
  );
}

export default App;