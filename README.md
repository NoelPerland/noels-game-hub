# Noel's Game Hub

Polished arcade launcher for nine Noel game projects.

## Included Games

- Sunset Shell Run
- Age of War-lite
- Circuit Courier
- Stunt Machine / Aero Leap
- Neon Invader
- Bomb Blitz Arena
- Cube Attack
- Boxline Siege
- Relic Grove: Archive Frontier

## Install

```bash
npm install
```

## Run Locally

```bash
npm run dev
```

Open the printed local URL.

## Build

```bash
npm run build
```

## Validate Game Paths

```bash
npm run check:games
```

## Deployment Notes

This hub is ready for Liivo as a static Vite app. Cards with `deployUrl` in
`src/games.js` open the live game directly. Cards without `deployUrl` show a
deployment-needed dialog with the exact local source path and expected repo name.

After deploying each game to Liivo, update `src/games.js` with its live URL,
rebuild the hub, and redeploy.
