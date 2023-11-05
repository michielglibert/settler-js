export type TerrainType =
  | "HILLS"
  | "FOREST"
  | "MOUNTAINS"
  | "FIELDS"
  | "PASTURE"
  | "DESERT";

class TerrainTile {
  private type: TerrainType;

  constructor(type: TerrainType) {
    this.type = type;
  }

  getType() {
    return this.type;
  }
}

export default TerrainTile;
