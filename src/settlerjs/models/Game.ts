import Terrain from "./board/Terrain";
import Player from "./player/Player";

class Game {
  private board: Terrain;
  private players: Player[];

  constructor(board: Terrain) {
    this.board = board;
    this.players = [];
  }

  addPlayer(player: Player) {
    this.players.push(player);
  }
}

export default Game;
