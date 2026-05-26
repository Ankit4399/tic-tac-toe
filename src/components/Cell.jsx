function Cell({
  value,
  onClick,
  isWinner,
}) {
  return (
    <button
      onClick={onClick}
      className={`cell ${
        isWinner ? "winner-cell" : ""
      }`}
    >
      <span
        className={
          value === "☕"
            ? "x-text"
            : "o-text"
        }
      >
        {value}
      </span>
    </button>
  );
}

export default Cell;