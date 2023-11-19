import Player from "../player/Player";

abstract class Placeable {
  private owner: Player;

  constructor(owner: Player) {
    this.owner = owner;
  }

  setOwner(owner: Player) {
    this.owner = owner;
  }
}
