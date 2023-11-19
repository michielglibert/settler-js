import TerrainTile from "../models/terrrain/TerrainTile";

export const TILES: TerrainTile[] = [
  ...new Array(4).fill(new TerrainTile("FIELDS")),
  ...new Array(4).fill(new TerrainTile("FOREST")),
  ...new Array(4).fill(new TerrainTile("PASTURE")),
  ...new Array(3).fill(new TerrainTile("MOUNTAINS")),
  ...new Array(3).fill(new TerrainTile("HILLS")),
  ...new Array(1).fill(new TerrainTile("DESERT")),
];

// Should be 19
export const AMOUNT_OF_TILES = TILES.length;
