import * as types from "./types";

export const addUserSelection = (coordinates) => ({
  type: types.ADD_USER_SELECTION,
  coordinates
});

export const updateLegend = (shipType) => ({
  type: types.UPDATE_SHIP_SELECTION_COUNT,
  shipType
});
