import React from "react";
import { cell } from "../styles/cell.scss";

const Cell = props => {
  const { isHit, isShip, onHandleUserSelection, x, y, boardData } = props;
  const url = "http://dunstanzheng.com/battleship";
  return (
    <div className={cell} onClick={() => onHandleUserSelection({x, y})}>
      {isHit && isShip && <img className="hit" src={`${url}/hit-board.png`}/>}
      {isHit && !isShip && <img className="miss" src={`${url}/miss-board.png`}/>}
    </div>
  );
};

export default Cell;
