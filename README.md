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
- Balloon Rush
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

This hub is ready for Liivo as a static Vite app. Every card has a `deployUrl`
in `src/games.js`, so every Play button opens a live game build directly.
