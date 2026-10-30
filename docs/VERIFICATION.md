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

## Additional local checks — not yet public-release verification

The following checks ran against local source during continued maintenance. They do not update the public-release claims above.

| Project | New observed local coverage | Limit |
|---|---|---|
| Hearthline | Blocked-storage startup, accurate save warning, deterministic progression checks | Natural full progression/physical phone not verified |
| Sunset | Blocked/full-storage completion, next-level, pause/restart; saved-index validation | Controlled completion; all levels not naturally completed |
| Relic | Focus/pointer cleanup; blocked/full-storage startup, movement, pause freeze, level-up/boss clear, restart | Controlled progression, not full natural RPG run |
| Age | Read/write storage failures, result/restart | Controlled victory; art-role reuse unchanged |
| Bomb | Controlled victory/defeat, rematch, title/reentry | Full natural rounds not covered |
| Balloon | Queued auto-wave cancellation; touch purchase/upgrade lock/wave start at five sizes | Full20wave natural win not covered |
| Cube | Customization, death/results, return, keyboard/pointer jump, mute/reload persistence | Full-level natural win not covered |
| Neon | Two-finger move/fire; five assisted wave transitions, victory/retry/defeat | Outcome wiring, not unassisted five-wave completion |
| Hub | Nine loaded cards/images, play links, keyboard skip/focus, desktop/phone/rotation | Emulated viewports; external gameplay is tested separately |

Source fixes preserve save keys and progression. Run each repository's documented regression commands after cloning; report local and public evidence separately. Human steering comprehension, listening assessments, physical devices and campaign balance remain separate validation tasks.

## README-priority release pass

Changes published through existing source branches and existing Pages/Vercel projects. Public hub passed five viewport sizes, nine cards/images/play links, keyboard skip and no runtime errors. Public Age battle regression passed poses/labels/combat/results/restart. Public Relic, Sunset, Bomb and Hearthline phone launch/input checks found no missing same-origin assets or runtime errors. These launch checks do not establish campaign completion.

New portable repository checks: Cube verify:completion passed the full level using real keyboard jumps and read-only authored guide positions, then verified completed save after reload. Guide timing metadata was corrected without changing physics or obstacles. Neon verify:progression passed simultaneous real touch input, five assisted waves, visible victory/defeat and Enter/Space retries. Sunset verify:mechanics checks all four themes and core mechanics with controlled scene state. Relic test:visual checks gate source landmarks and hero bounds/directions; cropped gate spires/pillars repaired with existing art. Natural full Neon/Balloon campaigns, physical devices, human Salvage steering/audio and account/email lifecycle remain unverified.
