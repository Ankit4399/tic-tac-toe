function Buttons({ resetGame }) {
  return (
    <div className="button-group">

      <button
        className="reset-btn"
        onClick={resetGame}
      >
        New Round
      </button>

      <button
        className="secondary-btn"
        onClick={resetGame}
      >
        Reset
      </button>

    </div>
  );
}

export default Buttons;