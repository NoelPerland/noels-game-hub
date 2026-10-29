(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[{slug:`sunset-shell-run`,title:`Sunset Shell Run`,description:`Bright platform adventure with bosses, upgrades, stars, and a world map.`,status:`playable`,engine:`Phaser`,localPath:`C:\\eyevinn\\summer-platformer-ai`,repoName:`sunset-shell-run`,github:`https://github.com/NoelPerland/sunset-shell-run`,deployUrl:`https://pure-soil-summerplatformerai.apps.liivo.io`,thumbnail:`/assets/thumbs/sunset-shell-run.png`,accent:`#ffb347`},{slug:`age-of-war-lite`,title:`Age of War-lite`,description:`Lane-battle tactics with evolving tech, units, economy, and clear win states.`,status:`playable`,engine:`Phaser`,localPath:`C:\\Users\\LENOVO\\Desktop\\eyevinn\\age-of-war-lite`,repoName:`age-of-war-lite`,github:`https://github.com/NoelPerland/age-of-war-lite`,deployUrl:`https://noelperland.github.io/age-of-war-lite/`,thumbnail:`/assets/thumbs/age-of-war-lite.png`,accent:`#ffd166`},{slug:`hearthline-3d`,title:`Hearthline 3D`,description:`Build a frontier camp, automate its supply routes, defend it, and open the road to Stone Ridge.`,status:`playable`,engine:`Three.js`,repoName:`hearthline-3d`,github:`https://github.com/NoelPerland/hearthline-3d`,deployUrl:`https://noelperland.github.io/hearthline-3d/`,thumbnail:`/assets/thumbs/hearthline-3d.png`,gallery:[`/assets/thumbs/hearthline-3d.png`,`/assets/showcase/hearthline-frontier.png`],highlights:[`Persistent camp progression`,`Workers and supply automation`,`Combat and a second district`],availabilityNote:`Play the browser build on GitHub Pages and explore its source on GitHub.`,accent:`#8cd8c9`},{slug:`salvage-squad`,title:`Salvage Squad`,description:`Steer an auto-firing robot squad through upgrade gates, escalating hazards, and a boss finale.`,status:`windows-build`,engine:`Unity`,repoName:`SalvageSquad`,github:`https://github.com/NoelPerland/SalvageSquad`,deployUrl:``,thumbnail:`/assets/thumbs/salvage-squad.png`,gallery:[`/assets/showcase/salvage-gates.png`,`/assets/thumbs/salvage-squad.png`],highlights:[`Instant drag controls`,`Visible squad growth`,`Boss fights and short runs`],availabilityNote:`A playable Windows build exists locally. Explore the public Unity source on GitHub; a packaged download is being prepared.`,accent:`#e6b960`},{slug:`neon-invader`,title:`Neon Invader`,description:`Space shooter with wave pressure, powerups, clean collision, and score flow.`,status:`playable`,engine:`Phaser`,localPath:`C:\\Users\\LENOVO\\Desktop\\eyevinn\\space-invaders`,repoName:`neon-invader`,github:`https://github.com/NoelPerland/neon-invader`,deployUrl:`https://dark-grove-neoninvader.apps.liivo.io`,thumbnail:`/assets/thumbs/neon-invader.png`,accent:`#7c5cff`},{slug:`bomb-blitz-arena`,title:`Bomb Blitz Arena`,description:`Bomber arena with bots, tight loops, smoke-test hooks, and Phaser scene flow.`,status:`playable`,engine:`Phaser`,localPath:`C:\\Users\\LENOVO\\Desktop\\eyevinn\\bomber-man`,repoName:`bomb-blitz-arena`,github:`https://github.com/NoelPerland/bomb-blitz-arena`,deployUrl:`https://noelperland.github.io/bomb-blitz-arena/`,thumbnail:`/assets/thumbs/bomb-blitz-arena.png`,accent:`#ff3d81`},{slug:`cube-attack`,title:`Cube Attack`,description:`Compact runner with obstacle timing, crisp UI, level flow, and fast retries.`,status:`playable`,engine:`Phaser`,localPath:`C:\\Users\\LENOVO\\Desktop\\eyevinn\\cube-attack`,repoName:`cube-attack`,github:`https://github.com/NoelPerland/cube-attack`,deployUrl:`https://cubeattack.apps.liivo.io`,thumbnail:`/assets/thumbs/cube-attack.png`,accent:`#45ff9a`},{slug:`balloon-rush`,title:`Bloons Tower Defence`,description:`Bloons-style tower defense with winding lanes, towers, upgrades, waves, and balloon pops.`,status:`playable`,engine:`Phaser`,localPath:`C:\\Users\\LENOVO\\Documents\\Codex\\2026-05-07\\we-have-created-many-game-what`,repoName:`balloon-rush`,github:`https://github.com/NoelPerland/balloon-rush`,deployUrl:`https://dust-teal-balloonrush.apps.liivo.io`,thumbnail:`/assets/thumbs/balloon-rush.jpg`,accent:`#9cff3b`},{slug:`relic-grove-archive-frontier`,title:`Relic Grove: Archive Frontier`,description:`Top-down RPG slice with combat, gathering, inventory, upgrades, and boss clearing.`,status:`prototype`,engine:`Canvas`,localPath:`C:\\Users\\LENOVO\\Documents\\Codex\\2026-05-28\\caveman-c-users-lenovo-codex-skills`,repoName:`relic-grove-archive-frontier`,github:`https://github.com/NoelPerland/relic-grove-archive-frontier`,deployUrl:``,thumbnail:`/assets/thumbs/relic-grove-archive-frontier.png`,accent:`#b7ff5a`}],t=document.querySelector(`#app`),n=e.filter(e=>e.deployUrl).length,r=e=>`/noels-game-hub/${e.replace(/^\//,``)}`;function i(e){return e.deployUrl?e.deployUrl.includes(`github.io`)?`Play on GitHub Pages`:`Live on Liivo`:e.status===`windows-build`?`Windows build`:e.status===`browser-preview`?`Browser preview`:e.status===`playable`?`Playable locally`:`Prototype`}function a(e){return e.deployUrl?`live`:[`playable`,`windows-build`,`browser-preview`].includes(e.status)?`local`:`prototype`}function o(e,t){let n=!!e.deployUrl,o=e.github.startsWith(`http`)&&e.githubAccess!==`private`,c=o?`<a class="github-action" href="${e.github}" target="_blank" rel="noreferrer" aria-label="${e.title} GitHub project">${s()}</a>`:``,l=`
    <div class="card-actions ${o?``:`single-action`}">
      ${n?`<a class="play-button live" href="${e.deployUrl}" target="_blank" rel="noreferrer">Play now</a>`:`<button class="play-button deploy" type="button" data-play="${e.slug}">Explore project</button>`}
      ${c}
    </div>
  `;return`
    <article class="game-card ${n?`is-live`:`needs-deploy`}" style="--i: ${t}; --accent: ${e.accent}" data-slug="${e.slug}">
      <div class="card-media">
        <img src="${r(e.thumbnail)}" alt="${e.title} gameplay thumbnail" loading="lazy" />
        <span class="status ${a(e)}">${i(e)}</span>
      </div>
      <div class="card-body">
        <div class="title-row">
          <h2>${e.title}</h2>
          <span>${e.engine}</span>
        </div>
        <p>${e.description}</p>
        <div class="meta">
          <span>${e.repoName}</span>
          <span>${e.githubAccess===`private`?`Private GitHub source`:o?`GitHub source`:`Source release pending`}</span>
        </div>
        ${l}
      </div>
    </article>
  `}function s(){return`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.5v-1.78c-2.78.62-3.37-1.38-3.37-1.38-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.35 1.12 2.92.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 5.92c.85 0 1.7.12 2.5.34 1.9-1.33 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.95.68 1.92v2.84c0 .28.18.6.69.5A10.07 10.07 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z"/></svg>`}t.innerHTML=`
  <main>
    <section class="hero" aria-labelledby="page-title">
      <div class="hero-bg" aria-hidden="true">
        <span></span><span></span><span></span>
      </div>
      <div class="hero-content">
        <h1 id="page-title" data-text="NOEL'S GAME HUB">NOEL'S GAME HUB</h1>
        <p class="intro">
          Original browser games and playable projects, from fast arcade runs to deeper strategy and survival.
        </p>
        <div class="hero-chips" aria-label="Hub stats">
          <span>${e.length} game projects</span>
          <span>${n} browser play links</span>
          <span>Browser + Windows projects</span>
        </div>
      </div>
    </section>
    <section class="grid-wrap" aria-label="Game launcher grid">
      <div class="section-head">
        <div>
          <h2>Games</h2>
        </div>
        <p>Play a live build or explore a project.</p>
      </div>
      <div class="games-grid">
        ${e.map(o).join(``)}
      </div>
    </section>
    <footer class="site-footer" aria-label="Footer">
      <div class="footer-brand">
        <span>Noel's Game Hub</span>
        <p>Arcade games, strategy projects, and playable builds.</p>
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
`;var c=document.querySelector(`#launchDialog`),l=c.querySelector(`.dialog-copy`),u=c.querySelector(`.dialog-media`);document.addEventListener(`click`,t=>{let n=t.target.closest(`[data-play]`);if(!n)return;let a=e.find(e=>e.slug===n.dataset.play);if(a){if(a.deployUrl){window.open(a.deployUrl,`_blank`,`noopener,noreferrer`);return}u.innerHTML=(a.gallery??[a.thumbnail]).map((e,t)=>`<img src="${r(e)}" alt="${a.title} gameplay view ${t+1}" loading="lazy" />`).join(``),l.innerHTML=`
    <p class="eyebrow">${i(a)} · ${a.engine}</p>
    <h2>${a.title}</h2>
    <p>${a.description}</p>
    ${a.highlights?`<ul class="showcase-highlights">${a.highlights.map(e=>`<li>${e}</li>`).join(``)}</ul>`:``}
    <p class="note">${a.availabilityNote??`A public play link is being prepared.`}</p>
    ${d(a)?`<a class="showcase-source" href="${a.github}" target="_blank" rel="noreferrer">View source on GitHub</a>`:``}
  `,c.showModal()}});function d(e){return e.github.startsWith(`http`)&&e.githubAccess!==`private`}c.querySelector(`.close-dialog`).addEventListener(`click`,()=>c.close()),c.addEventListener(`click`,e=>{e.target===c&&c.close()});