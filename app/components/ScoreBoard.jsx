import React from "react";
import { scoreBoard } from "../styles/score-board.scss";

const ScoreBoard = props => {
  return (
    <div className={scoreBoard}>
      <div className="player-one-score">
        <span className="score-total">
          {`0${props.playerOneScore}`}
        </span>
        <div className="score-border"/>
        <span className="player-name">
          player 1
        </span>
      </div>
      <div className="player-two-score">
        <span className="score-total">
          {`0${props.playerTwoScore}`}
        </span>
        <div className="score-border"/>
        <span className="player-name">
          player 2
        </span>
      </div>
    </div>
  );
};

export default ScoreBoard;
