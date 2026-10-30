# AI handoff

Read README.md first. This repository is the launcher; each game has its own source repository and deployment.

## Source map
- `src/games.js`: card metadata, source URLs, deployed URLs and explicit strongest-first ordering.
- `src/main.js`: card rendering; assets must use Vite's BASE_URL for the GitHub Pages subfolder.
- `src/styles.css`: responsive hub presentation.
- `public/assets/`: card thumbnails and gallery images.
- `scripts/check-games.mjs`: metadata/local-asset checks, not gameplay verification.

## Keep these decisions
- Hearthline, Salvage Squad, Sunset Shell Run and Relic Grove remain the leading projects.
- Stunt Machine and Circuit Courier were replaced. Do not reintroduce their broken cards.
- Age of War was repaired, not replaced by a coaster game. Its latest public repair fixes crops, labels and combat animation.
- Preserve game saves and existing progression. Fix a game in its own repository, then verify its public URL before changing this hub.
- Never expose secrets, machine-specific paths or development debug UI in cards.

## Verification and publication
Use Node24, `npm ci`, `npm run check:games`, `npm run build -- --base=/noels-game-hub/`.
Check all nine cards, thumbnails, external play/source links, strongest-first ordering, keyboard focus and phone layout.
For gameplay check start, normal input, meaningful progression, pause/restart/results, phone touch and resize/rotation as applicable.
Do not claim complete game verification from HTTP responses or canvas presence. Distinguish emulation from real devices.
Source is on `main`; GitHub Pages currently serves the root of `gh-pages`. Publish generated build files to that branch, preserving main source. Avoid force pushes.
The separate Liivo hub does not update when GitHub Pages is published.
