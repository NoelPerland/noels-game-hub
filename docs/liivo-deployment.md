# Liivo Deployment Notes

Noel's Game Hub is a static Vite app.

## Hub

- Install: `npm install`
- Build: `npm run build`
- Static output: `dist`
- Serve `dist` on Liivo.

## Launch Behavior

The hub uses `src/games.js` as the single source of truth.

All cards have `deployUrl` and launch directly:

- Sunset Shell Run: `https://pure-soil-summerplatformerai.apps.liivo.io`
- Age of War-lite: `https://flyby-copse-noelsgamehub.apps.liivo.io/games/age-of-war-lite/`
- Circuit Courier: `https://gale-brood-circuitcourier.apps.liivo.io`
- Stunt Machine / Aero Leap: `https://narrow-nook-stuntmachine.apps.liivo.io`
- Neon Invader: `https://dark-grove-neoninvader.apps.liivo.io`
- Bomb Blitz Arena: `https://rush-plum-bombblitzlive.apps.liivo.io`
- Cube Attack: `https://cubeattack.apps.liivo.io`
- Balloon Rush: `https://dust-teal-balloonrush.apps.liivo.io`
- Relic Grove: Archive Frontier: `https://flyby-copse-noelsgamehub.apps.liivo.io/games/relic-grove-archive-frontier/`

## Live Check

Checked Liivo links on 2026-06-11. All nine cards are configured with live
launch URLs in `src/games.js`.

## Game Build Outputs

Most games are Vite apps and deploy from `dist` after `npm run build`.
