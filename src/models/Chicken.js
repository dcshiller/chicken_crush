const CLOCKWISE_ROTATIONS = {
  north: "east",
  east: "south",
  south: "west",
  west: "north"
}

class Chicken {
  constructor(){
    this.facing = this.randomFacing();
    this.size = Math.floor(Math.random() * 3);
  }

  randomFacing(){
    const randInt = Math.floor(Math.random() * 4)
    switch (randInt) {
      case 0:
      return "north";
      case 1:
      return "east";
      case 2:
      return "south";
      case 3:
      return "west";
    }
  }

  rotate() {
    this.facing = CLOCKWISE_ROTATIONS[this.facing];
  }
}

export default Chicken;
