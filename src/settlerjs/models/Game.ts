import Terrain from "./terrrain/Terrain";
import Player from "./player/Player";

class Game {
  private terrain: Terrain;
  private players: Player[];

  constructor(board: Terrain) {
    this.terrain = board;
    this.players = [];
  }

  addPlayer(player: Player) {
    this.players.push(player);
  }
}

export default Game;
