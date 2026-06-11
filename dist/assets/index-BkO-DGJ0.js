(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[{slug:`sunset-shell-run`,title:`Sunset Shell Run`,description:`Bright platform adventure with bosses, upgrades, stars, and a world map.`,status:`playable`,engine:`Phaser`,localPath:`C:\\eyevinn\\summer-platformer-ai`,repoName:`sunset-shell-run`,github:`https://github.com/NoelPerland/sunset-shell-run`,deployUrl:`https://pure-soil-summerplatformerai.apps.liivo.io`,thumbnail:`/assets/thumbs/sunset-shell-run.png`,accent:`#ffb347`},{slug:`age-of-war-lite`,title:`Age of War-lite`,description:`Lane-battle tactics with evolving tech, units, economy, and clear win states.`,status:`playable`,engine:`Phaser`,localPath:`C:\\Users\\LENOVO\\Desktop\\eyevinn\\age-of-war-lite`,repoName:`age-of-war-lite`,github:`https://github.com/NoelPerland/age-of-war-lite`,deployUrl:`/games/age-of-war-lite/`,thumbnail:`/assets/thumbs/age-of-war-lite.png`,accent:`#ffd166`},{slug:`circuit-courier`,title:`Circuit Courier`,description:`Neon courier runs with dashes, drones, mines, combos, and score chasing.`,status:`playable`,engine:`Phaser`,localPath:`C:\\Users\\LENOVO\\Documents\\Codex\\2026-05-27\\can-you-update-my-cv-and\\circuit-courier`,repoName:`circuit-courier`,github:`https://github.com/NoelPerland/circuit-courier`,deployUrl:`https://gale-brood-circuitcourier.apps.liivo.io`,thumbnail:`/assets/thumbs/circuit-courier.png`,accent:`#00e5ff`},{slug:`aero-leap`,title:`Stunt Machine / Aero Leap`,description:`Flash-style stunt launcher with physics, upgrades, distance scoring, and crashes.`,status:`playable`,engine:`Phaser`,localPath:`C:\\Users\\LENOVO\\Desktop\\eyevinn\\stunt-game`,repoName:`aero-leap`,github:`https://github.com/NoelPerland/aero-leap`,deployUrl:`https://narrow-nook-stuntmachine.apps.liivo.io`,thumbnail:`/assets/thumbs/aero-leap-redesign.png`,accent:`#ff6b6b`},{slug:`neon-invader`,title:`Neon Invader`,description:`Space shooter with wave pressure, powerups, clean collision, and score flow.`,status:`playable`,engine:`Phaser`,localPath:`C:\\Users\\LENOVO\\Desktop\\eyevinn\\space-invaders`,repoName:`neon-invader`,github:`https://github.com/NoelPerland/neon-invader`,deployUrl:`https://dark-grove-neoninvader.apps.liivo.io`,thumbnail:`/assets/thumbs/neon-invader.png`,accent:`#7c5cff`},{slug:`bomb-blitz-arena`,title:`Bomb Blitz Arena`,description:`Bomber arena with bots, tight loops, smoke-test hooks, and Phaser scene flow.`,status:`playable`,engine:`Phaser`,localPath:`C:\\Users\\LENOVO\\Desktop\\eyevinn\\bomber-man`,repoName:`bomb-blitz-arena`,github:`https://github.com/NoelPerland/bomb-blitz-arena`,deployUrl:`https://rush-plum-bombblitzlive.apps.liivo.io`,thumbnail:`/assets/thumbs/bomb-blitz-arena.png`,accent:`#ff3d81`},{slug:`cube-attack`,title:`Cube Attack`,description:`Compact runner with obstacle timing, crisp UI, level flow, and fast retries.`,status:`playable`,engine:`Phaser`,localPath:`C:\\Users\\LENOVO\\Desktop\\eyevinn\\cube-attack`,repoName:`cube-attack`,github:`https://github.com/NoelPerland/cube-attack`,deployUrl:`https://cubeattack.apps.liivo.io`,thumbnail:`/assets/thumbs/cube-attack.png`,accent:`#45ff9a`},{slug:`balloon-rush`,title:`Bloons Tower Defence`,description:`Bloons-style tower defense with winding lanes, towers, upgrades, waves, and balloon pops.`,status:`playable`,engine:`Phaser`,localPath:`C:\\Users\\LENOVO\\Documents\\Codex\\2026-05-07\\we-have-created-many-game-what`,repoName:`balloon-rush`,github:`https://github.com/NoelPerland/balloon-rush`,deployUrl:`https://dust-teal-balloonrush.apps.liivo.io`,thumbnail:`/assets/thumbs/balloon-rush.jpg`,accent:`#9cff3b`},{slug:`relic-grove-archive-frontier`,title:`Relic Grove: Archive Frontier`,description:`Top-down RPG slice with combat, gathering, inventory, upgrades, and boss clearing.`,status:`prototype`,engine:`Canvas`,localPath:`C:\\Users\\LENOVO\\Documents\\Codex\\2026-05-28\\caveman-c-users-lenovo-codex-skills`,repoName:`relic-grove-archive-frontier`,github:`https://github.com/NoelPerland/relic-grove-archive-frontier`,deployUrl:`/games/relic-grove-archive-frontier/`,thumbnail:`/assets/thumbs/relic-grove-archive-frontier.png`,accent:`#b7ff5a`}],t=document.querySelector(`#app`),n=e.filter(e=>e.deployUrl).length;function r(e){return e.deployUrl?`Live on Liivo`:e.status===`playable`?`Playable locally`:`Prototype`}function i(e){return e.deployUrl?`live`:e.status===`playable`?`local`:`prototype`}function a(e,t){let n=!!e.deployUrl,a=e.github.startsWith(`http`)?`<a class="github-action" href="${e.github}" target="_blank" rel="noreferrer" aria-label="${e.title} GitHub project">${o()}</a>`:`<button class="github-action unavailable" type="button" data-play="${e.slug}" aria-label="${e.title} GitHub repo needed">${o()}</button>`,s=`
    <div class="card-actions">
      ${n?`<a class="play-button live" href="${e.deployUrl}" target="_blank" rel="noreferrer">Play now</a>`:`<button class="play-button deploy" type="button" data-play="${e.slug}">Play now</button>`}
      ${a}
    </div>
  `;return`
    <article class="game-card ${n?`is-live`:`needs-deploy`}" style="--i: ${t}; --accent: ${e.accent}" data-slug="${e.slug}">
      <div class="card-media">
        <img src="${e.thumbnail}" alt="${e.title} gameplay thumbnail" loading="lazy" />
        <span class="status ${i(e)}">${r(e)}</span>
      </div>
      <div class="card-body">
        <div class="title-row">
          <h2>${e.title}</h2>
          <span>${e.engine}</span>
        </div>
        <p>${e.description}</p>
        <div class="meta">
          <span>${e.repoName}</span>
          <span>${e.github.startsWith(`http`)?`GitHub ready`:`Repo needed`}</span>
        </div>
        ${s}
      </div>
    </article>
  `}function o(){return`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.5v-1.78c-2.78.62-3.37-1.38-3.37-1.38-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.35 1.12 2.92.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 5.92c.85 0 1.7.12 2.5.34 1.9-1.33 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.95.68 1.92v2.84c0 .28.18.6.69.5A10.07 10.07 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z"/></svg>`}t.innerHTML=`
  <main>
    <section class="hero" aria-labelledby="page-title">
      <div class="hero-bg" aria-hidden="true">
        <span></span><span></span><span></span>
      </div>
      <div class="hero-content">
        <h1 id="page-title" data-text="NOEL'S GAME HUB">NOEL'S GAME HUB</h1>
        <p class="intro">
          A nostalgic game hub for the old school gamer and and developer both. Fully open soruce.
        </p>
        <div class="hero-chips" aria-label="Hub stats">
          <span>9 game projects</span>
          <span>${n} verified live links</span>
          <span>Desktop + mobile ready</span>
        </div>
      </div>
    </section>
    <section class="grid-wrap" aria-label="Game launcher grid">
      <div class="section-head">
        <div>
          <h2>Games</h2>
        </div>
        <p>Pick a game, any game!</p>
      </div>
      <div class="games-grid">
        ${e.map(a).join(``)}
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
`;var s=document.querySelector(`#launchDialog`),c=s.querySelector(`.dialog-copy`),l=s.querySelector(`.dialog-media`);document.addEventListener(`click`,t=>{let n=t.target.closest(`[data-play]`);if(!n)return;let r=e.find(e=>e.slug===n.dataset.play);if(r){if(r.deployUrl){window.open(r.deployUrl,`_blank`,`noopener,noreferrer`);return}l.style.backgroundImage=`url("${r.thumbnail}")`,c.innerHTML=`
    <p class="eyebrow">Deployment needed</p>
    <h2>${r.title}</h2>
    <p>${r.description}</p>
    <dl>
      <div><dt>Local path</dt><dd>${r.localPath}</dd></div>
      <div><dt>Repo name</dt><dd>${r.repoName}</dd></div>
      <div><dt>GitHub</dt><dd>${r.github}</dd></div>
    </dl>
    <p class="note">This game needs a Liivo URL before it can launch from the hub.</p>
  `,s.showModal()}}),s.querySelector(`.close-dialog`).addEventListener(`click`,()=>s.close()),s.addEventListener(`click`,e=>{e.target===s&&s.close()});