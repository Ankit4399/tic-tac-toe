import Cell from "./Cell";

function Board({
  board,
  handleClick,
  winningCells,
}) {
  return (
    <div className="board">
      {board.map((cell, index) => (
        <Cell
          key={index}
          value={cell}
          onClick={() =>
            handleClick(index)
          }
          isWinner={winningCells.includes(
            index
          )}
        />
      ))}
    </div>
  );
}

export default Board;