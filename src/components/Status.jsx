function Status({
  winner,
  isDraw,
  isXTurn,
}) {
  return (
    <div className="status-bar">

      <div className="player-icon x-icon">
        ☕
      </div>

      <div className="status-text">

        <p>
          {winner
            ? "Winner"
            : isDraw
            ? "Match Draw"
            : "Current Turn"}
        </p>

        <h2>
          {winner
            ? winner === "☕"
              ? "CHAI WINS"
              : "COOKIE WINS"
            : isDraw
            ? "NO WINNER"
            : isXTurn
            ? "CHAI"
            : "COOKIE"}
        </h2>

      </div>

      <div className="player-icon o-icon">
        🍪
      </div>

    </div>
  );
}

export default Status;