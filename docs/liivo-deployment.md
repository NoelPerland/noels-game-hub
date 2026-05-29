# Liivo Deployment Notes

Noel's Game Hub is a static Vite app.

## Hub

- Install: `npm install`
- Build: `npm run build`
- Static output: `dist`
- Serve `dist` on Liivo.

## Launch Behavior

The hub uses `src/games.js` as the single source of truth.

Cards with `deployUrl` launch directly:

- Sunset Shell Run: `https://pure-soil-summerplatformerai.apps.liivo.io`
- Stunt Machine / Aero Leap: `https://narrow-nook-stuntmachine.apps.liivo.io`
- Neon Invader: `https://dark-grove-neoninvader.apps.liivo.io`
- Cube Attack: `https://cubeattack.apps.liivo.io`

Cards without `deployUrl` show a deployment-needed dialog:

- Age of War-lite
- Circuit Courier
- Bomb Blitz Arena
- Boxline Siege
- Relic Grove: Archive Frontier

After each game is deployed to Liivo, add its URL to `src/games.js`, rebuild,
and redeploy the hub.

## Game Build Outputs

Most games are Vite apps and deploy from `dist` after `npm run build`.
Boxline Siege is static and deploys from its project root.
