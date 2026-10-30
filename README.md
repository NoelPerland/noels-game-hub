# Noel's Game Hub

Public launcher: **https://noelperland.github.io/noels-game-hub/**

This repository contains the launcher source and preview assets. Games have separate repositories. Read [AGENTS.md](AGENTS.md) when continuing with an AI assistant.

## Continue on another device

Install Git and Node.js 24:

```sh
git clone https://github.com/NoelPerland/noels-game-hub.git
cd noels-game-hub
npm ci
npm run dev
```

Open the URL printed by Vite. The hub needs no secrets or environment variables. Play buttons open public deployments; cloning the hub does not clone the games.

## Projects and strongest-first order

| Game | Source repository |
| --- | --- |
| Hearthline 3D | [hearthline-3d](https://github.com/NoelPerland/hearthline-3d) |
| Salvage Squad | [SalvageSquad](https://github.com/NoelPerland/SalvageSquad) |
| Sunset Shell Run | [sunset-shell-run](https://github.com/NoelPerland/sunset-shell-run) |
| Relic Grove: Archive Frontier | [relic-grove-archive-frontier](https://github.com/NoelPerland/relic-grove-archive-frontier) |
| Age of War-lite | [age-of-war-lite](https://github.com/NoelPerland/age-of-war-lite) |
| Bomb Blitz Arena | [bomb-blitz-arena](https://github.com/NoelPerland/bomb-blitz-arena) |
| Balloon Rush | [balloon-rush](https://github.com/NoelPerland/balloon-rush) |
| Cube Attack | [cube-attack](https://github.com/NoelPerland/cube-attack) |
| Neon Invader | [neon-invader](https://github.com/NoelPerland/neon-invader) |

The authoritative live URLs and ordering are in `src/games.js`. Stunt Machine and Circuit Courier are retired from this hub. The portfolio has its own [repository](https://github.com/NoelPerland/portfolio) and [public site](https://portfolio-eta-amber-97.vercel.app/).

## Files to edit

- `src/games.js`: metadata, play/source links, thumbnails and featured ordering.
- `src/main.js`: card rendering and Vite-base-aware asset URLs.
- `src/styles.css`: layout and responsive styling.
- `public/assets/thumbs/`: previews; `public/assets/showcase/`: gallery images.
- `scripts/check-games.mjs`: duplicate-slug and local-asset checks. It does not play games.

## Check and build

```sh
npm run check:games
npm run build -- --base=/noels-game-hub/
npm run preview
```

Use the corresponding Vite base for another deployment root. Never use root-relative runtime asset URLs for a GitHub Pages subfolder.

## Publish

Source lives on `main`; GitHub Pages serves the repository root on `gh-pages`. Commit source to main first. Build with the base above, copy the contents of `dist/` into a separate gh-pages checkout, include `.nojekyll`, commit and push that branch. Preserve main source and avoid force pushes.

Verify the public hub after Pages finishes: nine cards, images, ordering, play/source links, keyboard access and phone layout. Play the actual deployed game before updating its card or marking a repair verified.

The old Liivo hub is independently hosted; GitHub pushes do not update it.

## Verification status and limits — 30 October 2026

All nine cards now target GitHub Pages deployments. Age of War's public repair passed 36-pose, six-label, combat, result/restart and viewport checks. Sunset, Neon, Balloon and Cube received additional responsive/input repairs and their own source commits and public builds. See [verification coverage](docs/VERIFICATION.md) for the exact checks and limits; this is not a claim that every campaign or device is covered.

Generated dist files belong to the gh-pages release branch, not main. Run the documented build after cloning source.

Phone emulation is not physical-device testing. No claim is made that every level, browser, device or campaign has been tested.
