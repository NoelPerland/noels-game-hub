import "./styles.css";
import { games } from "./games.js";

const app = document.querySelector("#app");
const liveCount = games.filter((game) => game.deployUrl).length;

function statusLabel(game) {
  if (game.deployUrl) return "Live on Liivo";
  if (game.status === "playable") return "Playable locally";
  return "Prototype";
}

function statusClass(game) {
  if (game.deployUrl) return "live";
  if (game.status === "playable") return "local";
  return "prototype";
}

function card(game, index) {
  const canLaunch = Boolean(game.deployUrl);
  const hasGithub = game.github.startsWith("http");
  const githubAction = hasGithub
    ? `<a class="github-action" href="${game.github}" target="_blank" rel="noreferrer" aria-label="${game.title} GitHub project">${githubIcon()}</a>`
    : `<button class="github-action unavailable" type="button" data-play="${game.slug}" aria-label="${game.title} GitHub repo needed">${githubIcon()}</button>`;
  const action = `
    <div class="card-actions">
      ${
        canLaunch
          ? `<a class="play-button live" href="${game.deployUrl}" target="_blank" rel="noreferrer">Play now</a>`
          : `<button class="play-button deploy" type="button" data-play="${game.slug}">Play now</button>`
      }
      ${githubAction}
    </div>
  `;
  return `
    <article class="game-card ${canLaunch ? "is-live" : "needs-deploy"}" style="--i: ${index}; --accent: ${game.accent}" data-slug="${game.slug}">
      <div class="card-media">
        <img src="${game.thumbnail}" alt="${game.title} gameplay thumbnail" loading="lazy" />
        <span class="status ${statusClass(game)}">${statusLabel(game)}</span>
      </div>
      <div class="card-body">
        <div class="title-row">
          <h2>${game.title}</h2>
          <span>${game.engine}</span>
        </div>
        <p>${game.description}</p>
        <div class="meta">
          <span>${game.repoName}</span>
          <span>${game.github.startsWith("http") ? "GitHub ready" : "Repo needed"}</span>
        </div>
        ${action}
      </div>
    </article>
  `;
}

function githubIcon() {
  return `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.5v-1.78c-2.78.62-3.37-1.38-3.37-1.38-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.35 1.12 2.92.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 5.92c.85 0 1.7.12 2.5.34 1.9-1.33 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.95.68 1.92v2.84c0 .28.18.6.69.5A10.07 10.07 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z"/></svg>`;
}

app.innerHTML = `
  <main>
    <section class="hero" aria-labelledby="page-title">
      <div class="hero-bg" aria-hidden="true">
        <span></span><span></span><span></span>
      </div>
      <div class="hero-content">
        <h1 id="page-title" data-text="NOEL'S GAME HUB">NOEL'S GAME HUB</h1>
        <p class="intro">
          A polished launch deck for Noel's browser games: quick to scan, easy to play,
          with every card wired to a live Liivo build.
        </p>
        <div class="hero-chips" aria-label="Hub stats">
          <span>9 game projects</span>
          <span>${liveCount} verified live links</span>
          <span>Desktop + mobile ready</span>
        </div>
      </div>
    </section>
    <section class="grid-wrap" aria-label="Game launcher grid">
      <div class="section-head">
        <div>
          <h2>Games</h2>
        </div>
        <p>Pick a verified live game. Every card says Play now.</p>
      </div>
      <div class="games-grid">
        ${games.map(card).join("")}
      </div>
    </section>
    <footer class="site-footer" aria-label="Footer">
      <div class="footer-brand">
        <span>Noel's Game Hub</span>
        <p>Y2K arcade launcher for browser games, experiments, and playable builds.</p>
      </div>
      <nav class="footer-links" aria-label="Footer links">
        <a href="#page-title">About me</a>
        <a href="mailto:noel.perland@gmail.com">Contact</a>
        <a class="icon-link" href="https://github.com/NoelPerland" target="_blank" rel="noreferrer" aria-label="GitHub">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.5v-1.78c-2.78.62-3.37-1.38-3.37-1.38-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.35 1.12 2.92.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 5.92c.85 0 1.7.12 2.5.34 1.9-1.33 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.95.68 1.92v2.84c0 .28.18.6.69.5A10.07 10.07 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z"/></svg>
        </a>
        <a class="icon-link" href="https://www.linkedin.com/in/noel-perland/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.3 8.1h4.4V23H.3V8.1Zm7.35 0h4.22v2.04h.06c.59-1.12 2.03-2.3 4.18-2.3 4.47 0 5.29 2.94 5.29 6.76V23H17v-7.45c0-1.78-.03-4.06-2.47-4.06-2.48 0-2.86 1.94-2.86 3.93V23H7.65V8.1Z"/></svg>
        </a>
      </nav>
    </footer>
  </main>
  <dialog id="launchDialog">
    <button class="close-dialog" type="button" aria-label="Close launch dialog">x</button>
    <div class="dialog-media"></div>
    <div class="dialog-copy"></div>
  </dialog>
`;

const dialog = document.querySelector("#launchDialog");
const dialogCopy = dialog.querySelector(".dialog-copy");
const dialogMedia = dialog.querySelector(".dialog-media");

document.addEventListener("click", (event) => {
  const button = event.target.closest("[data-play]");
  if (!button) return;
  const game = games.find((item) => item.slug === button.dataset.play);
  if (!game) return;

  if (game.deployUrl) {
    window.open(game.deployUrl, "_blank", "noopener,noreferrer");
    return;
  }

  dialogMedia.style.backgroundImage = `url("${game.thumbnail}")`;
  dialogCopy.innerHTML = `
    <p class="eyebrow">Deployment needed</p>
    <h2>${game.title}</h2>
    <p>${game.description}</p>
    <dl>
      <div><dt>Local path</dt><dd>${game.localPath}</dd></div>
      <div><dt>Repo name</dt><dd>${game.repoName}</dd></div>
      <div><dt>GitHub</dt><dd>${game.github}</dd></div>
    </dl>
    <p class="note">This game needs a Liivo URL before it can launch from the hub.</p>
  `;
  dialog.showModal();
});

dialog.querySelector(".close-dialog").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});
