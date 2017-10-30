import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Board from "./Board";
import Legend from "./Legend";
import ScoreBoard from "./ScoreBoard";
import { checkPosition, checkCoordinates } from "../utils/utils";
import { addUserSelection, updateLegend } from "../actions";
import { container } from "../styles/board.scss";

export class BattleShip extends React.Component {
  constructor(props) {
    super(props);

    // bind in constructor, so bind doesnt get called everytime the function is invoked
    this._onUpdateUserSelection = this._onUpdateUserSelection.bind(this);
  }

  _onUpdateUserSelection(coordinates) {
    const { addUserSelection, updateLegend, boardData, savedCoordinates, playerOneScore } = this.props;
    const isHit = checkCoordinates(coordinates, savedCoordinates);
    if (!isHit && playerOneScore < 5) {
      // push coordinates to an array of selections
      addUserSelection(coordinates);
      // check coordinate to see if its a ship or not & if it is, update the legend with found ship.
      const isShip = checkPosition(coordinates, boardData);
      if (isShip) {
        updateLegend(isShip);
      }
    }
  }

  _renderBoard() {
    const { boardData, savedCoordinates } = this.props;
    return (
      <Board
        onHandleUserSelection={this._onUpdateUserSelection}
        boardData={boardData}
        savedCoordinates={savedCoordinates}
      />
    );
  }

  _renderScoreBoard() {
    const { playerOneScore, playerTwoScore } = this.props;
    return (
      <ScoreBoard
        playerOneScore={playerOneScore}
        playerTwoScore={playerTwoScore}
      />
    );
  }

  _renderLegend() {
    const { boardData, shipHitCount } = this.props;
    return (
      <Legend
        ships={boardData.shipTypes}
        shipHitCount={shipHitCount}
      />
    );
  }

  render() {
    const {
      boardData
    } = this.props;
    return (
      <div className={container}>
        {this._renderBoard()}
        {this._renderScoreBoard()}
        {this._renderLegend()}
      </div>
    );
  }
}

BattleShip.propTypes = {
  boardData: PropTypes.object,
  shipHitCount: PropTypes.object,
  savedCoordinates: PropTypes.array,
  playerOneScore: PropTypes.number,
  addUserSelection: PropTypes.func,
  updateLegend: PropTypes.func
};

BattleShip.defaultProps = {
  playerTwoScore: 0
};

const mapStateToProps = (state) => {
  return {
    boardData: state.battleShip.boardData,
    shipHitCount: state.battleShip.shipHitCount,
    savedCoordinates: state.battleShip.savedCoordinates,
    playerOneScore: state.battleShip.playerOneScore,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addUserSelection: coordinates => dispatch(addUserSelection(coordinates)),
    updateLegend: shipType => dispatch(updateLegend(shipType))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BattleShip);
