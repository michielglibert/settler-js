import Player from "../player/Player";

class Node {
  private owner: Player;
  private isCity: boolean = false;

  constructor(owner: Player) {
    this.owner = owner;
  }

  setOwner(owner: Player) {
    this.owner = owner;
  }
}

export default Node;
