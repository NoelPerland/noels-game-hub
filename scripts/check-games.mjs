import { access } from "node:fs/promises";
import { games } from "../src/games.js";

const slugs = new Set();
let failed = false;

for (const game of games) {
  if (slugs.has(game.slug)) {
    console.error(`DUPLICATE slug: ${game.slug}`);
    failed = true;
  }
  slugs.add(game.slug);

  for (const asset of [game.thumbnail, ...(game.gallery ?? [])]) {
    try {
      await access(new URL(`../public${asset}`, import.meta.url));
    } catch {
      console.error(`MISSING asset for ${game.title}: ${asset}`);
      failed = true;
    }
  }

  if (game.deployUrl?.startsWith("/")) {
    try {
      await access(new URL(`../public${game.deployUrl}index.html`, import.meta.url));
    } catch {
      console.error(`MISSING local game for ${game.title}: ${game.deployUrl}`);
      failed = true;
    }
  }
}

if (failed) process.exit(1);
console.log(`Checked ${games.length} game cards and their local assets.`);
