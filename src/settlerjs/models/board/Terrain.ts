import { shuffle } from "remeda";
import TerrainTile from "./TerrainTile";
import { TILES } from "../../constants/tiles";

class Terrain {
  private tiles: TerrainTile[][] = [];

  constructor() {
    this.generateBoard();
  }

  getTiles() {
    return this.tiles;
  }

  generateBoard() {
    const shuffledTiles = shuffle(TILES);
    this.tiles = [
      shuffledTiles.splice(0, 3),
      shuffledTiles.splice(0, 4),
      shuffledTiles.splice(0, 5),
      shuffledTiles.splice(0, 4),
      shuffledTiles,
    ];
  }
}

export default Terrain;
