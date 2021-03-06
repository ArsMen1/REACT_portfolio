import React from "react";
import { Cell, GameOverlay, Tile } from ".";
import { Board } from "./helper";
import useEvent from "../hooks/useEvent";

const BoardView = () => {
  const [board, setBoard] = React.useState(new Board());
  const [record, setRecord] = React.useState(localStorage.getItem("number"));

  if (record < board.score) {
    setRecord(board.score);
    localStorage.setItem("number", board.score);
  }

  const handleKeyDown = (event) => {
    if (board.hasWon()) {
      return;
    }

    if (event.keyCode >= 37 && event.keyCode <= 40) {
      let direction = event.keyCode - 37;
      let boardClone = Object.assign(
        Object.create(Object.getPrototypeOf(board)),
        board
      );
      let newBoard = boardClone.move(direction);
      setBoard(newBoard);
    }
  };

  useEvent("keydown", handleKeyDown);

  const cells = board.cells.map((row, rowIndex) => {
    return (
      <div key={rowIndex}>
        {row.map((col, colIndex) => {
          return <Cell key={rowIndex * board.size + colIndex} />;
        })}
      </div>
    );
  });

  const tiles = board.tiles
    .filter((tile) => tile.value !== 0)
    .map((tile, index) => {
      return <Tile tile={tile} key={index} />;
    });

  const resetGame = () => {
    setBoard(new Board());
  };

  return (
    <div className="container_Twenty48">
      <div>
        <div className="details-box">
          <div className="resetButton" onClick={resetGame}>
            New game
          </div>
          <div className="record-box">
            <div className="score-header">RECORD: </div>
            <div>{record}</div>
          </div>
          <div className="score-box">
            <div className="score-header">SCORE: </div>
            <div>{board.score}</div>
          </div>
        </div>
        <div className="board">
          {cells}
          {tiles}
          <GameOverlay onRestart={resetGame} board={board} />
        </div>
      </div>
    </div>
  );
};

export default BoardView;
