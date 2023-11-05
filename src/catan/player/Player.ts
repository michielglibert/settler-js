import { PlayerColor } from "./PlayerColor";

interface IPlayer {
  color: PlayerColor;
}

export class Player implements IPlayer {
  color: PlayerColor;

  constructor(color: PlayerColor) {
    this.color = color;
  }
}
