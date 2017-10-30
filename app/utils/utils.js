export const checkPosition = (coordinates, boardData) => {
  let shipName = "";
  boardData.layout.map((ships) => {
    ships.positions.map((position) => {
      if (position[0] === coordinates.x & position[1] === coordinates.y) {
        shipName = ships.ship;
      }
    });
  });
  return shipName;
};

export const checkCoordinates = (coordinates, savedCoordinates) => {
  let isHit = false;
  if (savedCoordinates.length > 0) {
    savedCoordinates.forEach(coordinate => {
      if (coordinate.x === coordinates.x && coordinate.y === coordinates.y) {
        isHit = true;
      }
    });
  }
  return isHit;
};
