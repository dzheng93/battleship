import { routerReducer as routing } from "react-router-redux";
import { combineReducers } from "redux";
import * as types from "../actions/types";
import { boardData } from "../data/data";

const initialState = {
  boardData,
  shipHitCount: {
    carrier: 0,
    battleship: 0,
    cruiser: 0,
    submarine: 0,
    destroyer: 0
  },
  savedCoordinates: [],
  playerOneScore: 0
};

const battleShip = (state = initialState, action = {}) => {
  switch (action.type) {
    case types.ADD_USER_SELECTION:
      return {
        ...state,
        savedCoordinates: [...state.savedCoordinates, action.coordinates]
      };
    case types.UPDATE_SHIP_SELECTION_COUNT:
      let playerOneScore = state.playerOneScore;
      const shipType = action.shipType;
      const newCount = state.shipHitCount[shipType] + 1;
      if (state.boardData.shipTypes[shipType].size === newCount) {
        playerOneScore = state.playerOneScore + 1;
      }
      return {
        ...state,
        shipHitCount: {
          ...state.shipHitCount,
          [shipType]: newCount
        },
        playerOneScore: playerOneScore || state.playerOneScore
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  battleShip,
  routing
});

export default rootReducer;
