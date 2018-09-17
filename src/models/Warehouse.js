const [yLength, xLength] = [20, 20]

class Warehouse {
  constructor(inventoryModel) {
    this.coords = {};
    this.generateCoords(inventoryModel);
    this.removeCoord();
  }

  generateCoords(inventoryModel) {
    for (let i = 0; i < xLength; i++) {
      for (let j = 0; j < yLength; j++) {
        this.coords[[i, j]] = new inventoryModel();
      }
    }
  }

  getCoord(coord) {
    return this.coords[coord];
  }

  getCoords() {
    return Object.entries(this.coords);
  }

  removeCoord() {
    const xCoordToRemove = Math.floor(Math.random() * xLength);
    const yCoordToRemove = Math.floor(Math.random() * yLength);
    this.coords[[xCoordToRemove, yCoordToRemove]] = null;
  }

  swapCoords(swapee, target) {
    const targetObject = this.coords[target];
    this.coords[target] = this.coords[swapee];
    this.coords[swapee] = targetObject;
  }

  facingCoord(coord, facing) {
    const coordDiff = this.toCoordDiff(facing);
    return [coord[0] + coordDiff[0], coord[1] + coordDiff[1]]
  }

  facingSkipCoord(coord, facing) {
    const coordDiff = this.toCoordDiff(facing);
    const x = ([coord[0] + 2* coordDiff[0], coord[1] + 2 * coordDiff[1]])
    return [coord[0] + 2* coordDiff[0], coord[1] + 2 * coordDiff[1]]
  }
toCoordDiff (facing) {
  switch (facing) {
    case "north":
    return [0,-1];
    case "east":
    return [1,0];
    case "south":
    return [0,1];
    case "west":
    return [-1,0];
  }
}
}

export default Warehouse;
