import React from "react";
import Cell from "./cell";
import { checkCoordinates, checkPosition } from "../utils/utils";
import { board } from "../styles/board.scss";

const Board = props => {
  const { x, y, onHandleUserSelection, savedCoordinates, boardData } = props;

  const _renderRows = (limit = 10) => {
    const row = [];
    for (let i = 0; i < limit; i++) {
      row.push(
        <div key={i} className="row">
          {_renderCell(i, limit)}
        </div>
      );
    }
    return row;
  };

  const _renderCell = (row, limit) => {
    const cell = [];
    for (let j = 0; j < limit; j++) {
      const isHit = checkCoordinates({x: row, y: j}, savedCoordinates);
      const isShip = checkPosition({x: row, y: j}, boardData);
      cell.push(
        <Cell
          key={j}
          x={row}
          y={j}
          isHit={isHit}
          isShip={isShip}
          onHandleUserSelection={onHandleUserSelection}
        />
      );
    }
    return cell;
  };

  return (
    <div className={board}>
      {_renderRows()}
    </div>
  );
};

export default Board;