import Warehouse from './models/Warehouse';
import Chicken from './models/Chicken';
const warehouse = new Warehouse(Chicken);

const moveForward = (coord) => {
  const facingCoord = warehouse.facingCoord(coord, warehouse.coords[coord].facing);
  const facingCoordValue = warehouse.coords[facingCoord];
  if (facingCoordValue) return;
  warehouse.swapCoords(coord, facingCoord);
}

const rotateCoord = (coord) => {
  warehouse.coords[coord].rotate();
}

const pushForward = (coord, facing) => {
  const facingCoord = warehouse.facingCoord(coord, facing);
  warehouse.swapCoords(coord, facingCoord);
}

const moveRotateOrPushForward = (coord) => {
  const facing = warehouse.getCoord(coord).facing
  const size = warehouse.getCoord(coord).size
  const facingCoord = warehouse.facingCoord(coord, facing);
  const facingCoordValue = warehouse.coords[facingCoord];
  const facingSkipCoord = warehouse.facingSkipCoord(coord, facing);
  const facingSkipCoordValue = warehouse.coords[facingCoord];
  if (!facingCoordValue) { moveForward(coord); }
  else if (!facingSkipCoordValue) { pushForward(warehouse.facingCoord(coord, warehouse.coords[coord].facing), facing) }
  else if (size >= facingCoordValue.size) {  rotateCoord(warehouse.facingCoord(coord, facing)) }
}

const Controller = {
  getCoords: () => warehouse.getCoords(),
  activate: function(coord) { moveRotateOrPushForward(coord); this.update() },
};


export default Controller;
