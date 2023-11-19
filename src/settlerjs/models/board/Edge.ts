import Player from "../player/Player";

class Edge {
  private owner: Player;

  constructor(owner: Player) {
    this.owner = owner;
  }

  setOwner(owner: Player) {
    this.owner = owner;
  }
}

export default Edge;
