import { access } from "node:fs/promises";
import { games } from "../src/games.js";

let failed = false;

for (const game of games) {
  try {
    await access(game.localPath);
    console.log(`FOUND ${game.title}: ${game.localPath}`);
  } catch {
    failed = true;
    console.error(`MISSING ${game.title}: ${game.localPath}`);
  }
}

if (failed) process.exit(1);
