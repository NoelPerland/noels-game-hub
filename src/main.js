import "./styles.css";
import { games } from "./games.js";

const app = document.querySelector("#app");

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
  const action = canLaunch
    ? `<a class="play-button live" href="${game.deployUrl}" target="_blank" rel="noreferrer">Play now</a>`
    : `<button class="play-button deploy" type="button" data-play="${game.slug}">View deploy notes</button>`;
  return `
    <article class="game-card ${canLaunch ? "is-live" : "needs-deploy"}" style="--i: ${index}; --accent: ${game.accent}" data-slug="${game.slug}">
      <div class="card-media">
        <img src="${game.thumbnail}" alt="${game.title} gameplay thumbnail" loading="lazy" />
        <span class="rank">${String(index + 1).padStart(2, "0")}</span>
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

app.innerHTML = `
  <main>
    <section class="hero" aria-labelledby="page-title">
      <div class="hero-bg" aria-hidden="true">
        <span></span><span></span><span></span>
      </div>
      <nav class="topbar" aria-label="Hub metadata">
        <a class="brand" href="/">NGH</a>
        <div class="top-actions">
          <span>9 games</span>
          <span>Live launcher</span>
          <span>Browser games</span>
        </div>
      </nav>
      <div class="hero-content">
        <p class="eyebrow">Curated arcade launcher</p>
        <h1 id="page-title">Noel's Game Hub</h1>
        <p class="intro">
          A polished launch deck for Noel's browser games: quick to scan, easy to play,
          and clear about what is live versus still waiting for deployment.
        </p>
        <div class="hero-chips" aria-label="Hub stats">
          <span>9 game projects</span>
          <span>4 live links</span>
          <span>Desktop + mobile ready</span>
        </div>
      </div>
    </section>
    <section class="grid-wrap" aria-label="Game launcher grid">
      <div class="section-head">
        <div>
          <p class="eyebrow">Collection</p>
          <h2>Play the collection</h2>
        </div>
        <p>Pick a live game, or open deploy notes for projects that still need a Liivo URL.</p>
      </div>
      <div class="games-grid">
        ${games.map(card).join("")}
      </div>
    </section>
    <footer class="site-footer">
      <span>Noel's Game Hub</span>
      <span>9 browser games, live links, fast play.</span>
      <a href="#page-title">Back to top</a>
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
    <p class="note">
      Add a Liivo URL to <code>src/games.js</code> after this game is deployed, then this button
      becomes a direct Play button.
    </p>
  `;
  dialog.showModal();
});

dialog.querySelector(".close-dialog").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});
