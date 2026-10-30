# Browser verification — 30 October 2026

These are observed checks, not a claim that all games are bug-free. Desktop Chrome and emulated phone viewports were used. Physical devices, other browsers and full campaigns remain outside this pass.

| Game | Observed coverage | Remaining limit |
| --- | --- | --- |
| Hearthline 3D | Inventory opens; click route/input; portrait framing | Full progression/every upgrade not replayed |
| Salvage Squad | Full desktop pause panel, resume and steering visible/working | Complete boss run not replayed in this pass |
| Sunset Shell Run | Keyboard movement; 6 viewport transitions; real touch move/jump/shoot, pause/resume, map/play and retry | All worlds/bosses not completed |
| Relic Grove | Movement, attack, inventory, shop; portrait shop fits | Full RPG progression not replayed |
| Age of War | 36 pose textures, 6 labels, cooldown/recovery, combat deaths, results/restart, 5 viewport sizes | Three visual archetypes reused across six roles |
| Bomb Blitz | Existing movement/bot tests, keyboard/touch controls and previous published visual checks | Latest audit did not repeat every round outcome |
| Balloon Rush | Real touch purchase, upgrade lock, wave start, 5 sizes; public regression | All20waves not completed |
| Cube Attack | Existing validation: title customization, start/death, return, pointer/keyboard jump, mute, reload persistence; 5 sizes | Full-level win not completed |
| Neon Invader | Simultaneous touch move/fire, cancellation/focus cleanup tests,5sizes; public play controls | Full5wave win not completed |

Regression commands live in the individual repositories. Set CHROME_PATH when a test uses Chrome at a different location. Use Node24. Tests must run against the public subfolder after deployment too; local success cannot detect a wrong asset base.

Before claiming a future change complete, inspect actual gameplay and its relevant outcome screens, not just HTTP200 or canvas presence. Preserve saves and balance. Update this document when coverage changes.
