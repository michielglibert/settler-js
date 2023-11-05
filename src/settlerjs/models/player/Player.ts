export type PlayerColor = "RED" | "BLUE";

class Player {
  color: PlayerColor;

  constructor(color: PlayerColor) {
    this.color = color;
  }
}

export default Player;
