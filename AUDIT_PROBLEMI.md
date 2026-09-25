# 🔍 Audit completo del codice — Zephyr Reef Kart (agitated-einstein)
*Data audit: 22/09/2026 — Versione analizzata: working tree @ commit b1b7bdb*

**Totale problematiche censite: ~135** (8 critiche, ~25 alte, ~45 medie, ~55 basse)

---

## ✅ STATO DEI FIX (aggiornato al 22/09/2026, sessione di remediation)

**Verifica finale: suite `npm test` 253/253 verde · smoke test Puppeteer OK (24/24 piste renderizzano) · tutti i mirror byte-identici · nessun commit eseguito (working tree modificato).**

RISOLTI (i dettagli dei fix sono nel messaggio di consegna della sessione):
- Sezione A (strutturale): fix 1, 2, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 17 — resta aperto il punto 3/4 di fondo (entry Vite) e la scelta su src/ (ripristino vs archiviazione).
- Sezione B (sicurezza): risolti 1 (mitigazione doppia: sanitizzazione host + esc() sui renderer), 2 (rate-limit, ROOM_BUSY, slot binding), 3, 4 (rate-limit + sanity), 5, 6 (sanitizzazione host), 7, 8, 9 (ATS rimosso), 10, 11 — restano note le mitigazioni residue documentate.
- Sezione C (multiplayer): risolti 1-18 tranne 11 (TURN server: richiede un servizio a pagamento — da decidere), 15/16 parzialmente mitigati.
- Sezione D (fisica) ed E (UI): risolti tutti nei sorgenti src/ e in index.html; NOTA: la fisica realmente in produzione resta nel bundle minificato (i fix valgono al ripristino dell'entry).
- Sezione F/G/H/I (track/AI/models/minimap): risolti tutti nei sorgenti.
- Sezione J (infra): risolti 1-9, 11, 13-15 (+ versioni native allineate a 6.9.6); i test sono ora portabili (path dinamici, bundle risolto via glob).
- RISOLTO: Firma release Android con keystore reale (zephyr-release.keystore SHA256withRSA), cambio applicationId da com.example a com.robzomb.zephyrreefkart, bundle AAB per Play Store, integrazione completa Google AdMob con UMP GDPR e Better Ads cooldown, Privacy Policy e scheda Play Store.
- DA DECIDERE / OPZIONALE: rewrite history git (485MB → comando: `git filter-repo --path node_modules --path '*.apk' --path '*.ipa' --invert-paths`), TURN server dedicato.

---

> **TL;DR architetturale**: il progetto ha un problema strutturale che rende tutto il resto secondario —
> **il sorgente del motore di gioco non esiste più**. Il gioco che gira (web, APK, IPA) è interamente
> nel bundle minificato `assets/index-C9rd31_W.js` (835KB); `main.js` è stato cancellato (commit `737bed8`)
> e non è recuperabile da git. I moduli in `src/` sono fossili non più referenziati (e uno non compila
> nemmeno più). Tutti i test principali verificano stringhe nel bundle minificato, non comportamenti.

---

## A. PROBLEMI STRUTTURALI / ARCHITETTURA (il più urgente)

1. **[CRITICA] Il sorgente del motore di gioco è perso.** L'unico motore esistente è il bundle minificato
   `assets/index-C9rd31_W.js` (835KB). `main.js` è stato cancellato nel commit `737bed8` e `git log --all`
   non contiene più nessuna versione recuperabile. Nessun HTML referenzia sorgente: solo il bundle.
   → Ogni bug del motore è sostanzialmente **non riparabile in modo pulito**; si può solo patchare il minificato.
2. **[CRITICA] Tutti i moduli in `src/` sono codice morto fossilizzato.** Grep dei simboli unici
   (`AugustaTrack`, `AIRacersManager`, `AugustaMinimap`, `createKartMesh`, `KartController`…) nel bundle e in
   `index.html`: **0 occorrenze per tutti**. Nessun import punta a `src/`. ~1.700 righe di sorgente "visibile"
   che non sono il gioco.
3. **[CRITICA] `src/physics/kartController.js:2` importa `../config/augustaConfig.js` che NON esiste.**
   Il grafo di `src/` è irrisolvibile: riattivare i moduli crasherebbe al load (modulo mancante).
4. **[CRITICA] `npm run build` è decorativo.** L'`index.html` alla radice è un **artefatto di build**
   (carica `./assets/index-C9rd31_W.js`), non l'entry sorgente. `vite build` processerebbe l'artefatto invece
   di rigenerare il gioco.
5. **[ALTA] `src/` non è tracciato da git.** `git ls-files src/` è vuoto: le uniche copie versionate dei moduli
   sono i mirror in `assets/` e `public/assets/`. Un `git clean` distruggerebbe le sole sorgenti leggibili rimaste.
6. **[ALTA] La suite di test è fragile per costruzione.** L'hash del bundle `index-C9rd31_W.js` è hardcodato
   **34 volte** in `tests/test_all_systems.mjs` → un rebuild cambia l'hash e la suite crasha in 30+ punti
   (ENOENT). Non si può ricompilare il bundle senza riscrivere i test.
7. **[ALTA] Percorsi assoluti legati alla macchina dell'autore nei test e negli script.**
   `tests/test_all_systems.mjs:86` importa `/Users/robzomb/Documents/antigravity/agitated-einstein/assets/...`;
   `:1521` legge dati piste da **fuori repo** (`/Users/robzomb/.gemini/antigravity/brain/0394039c-.../scratch/final_tracks.json`).
   La suite non gira su nessun'altra macchina o CI.
8. **[ALTA] Patch runtime del bundle minificato.** `scripts/apply_landmarks.js` e `scripts/apply_physics.js`
   riscrivono il bundle con `indexOf/replace` su stringhe minified esatte: il primo reformat/re-minify rompe
   i patch (e con loro l'intera suite, vedi #6). Bug nella guardia: `apply_landmarks.js:3-12` —
   `endIdx = indexOf(...) + len` trasforma `-1` in un valore positivo, la guardia non scatta mai.
9. **[ALTA] Due script di sync concorrenti e divergenti per i mirror.** `scripts/sync_all_mirrors.js` (dice
   "v6.7.0") copia solo HTML+bundle; `scripts/package_native.js` (dice "v6.9.5") copia tutta `assets/`.
   Oggi i mirror sono identici per fortuna, ma basta rilanciare quello vecchio per creare drift silenzioso.
10. **[MEDIA] Version drift su 5 fonti, nessuna source of truth.** package.json `6.7.0`; `index.html`
    APP_VERSION `zephyr-6.9.5`; README linka release `v5.0.0`; `build.gradle.kts` `versionName "2.0"`;
    sync script `6.7.0` vs package script `6.9.5`.
11. **[MEDIA] `game.json` è metadata di un confronto tra modelli AI**, non del gioco
    (`"slug": "kart-deepseek-astra"`, `"model": "DeepSeek V4.1"`…): leftover fuorviante in un repo pubblico.
12. **[MEDIA] package.json senza script `test`** (solo dev/build/build:ios/preview): i test esistono ma
    lanciarli è conoscenza tribale (`node --test tests/test_all_systems.mjs`). Nessun lint, nessun typecheck.
13. **[MEDIA] `vite.config.js` minimale**: `assetsInlineLimit: 0` (ogni asset = una request), nessun `define`
    per iniettare la versione (APP_VERSION scritta a mano), nessun sourcemap.
14. **[MEDIA] Test Kotlin Android che non compilano.** `MainScreenViewModelTest.kt` e `MainScreenTest.kt`
    referenziano `MainScreenViewModel`/`MainScreenUiState`/`DataRepository` inesistenti in `app/src/main/`
    (che contiene solo `MainActivity.kt`). `./gradlew test` fallirebbe a compile-time.
15. **[MEDIA] `scripts/test_kart.js` è codice morto**: usa `window.game` e `btn-start-race`, ma nel bundle
    l'API è `window.__zephyr` (0 occorrenze di `window.game`).
16. **[BASSA] Il repo ha 485MB per 149 file tracciati** (397MB loose + 87MB pack): ~4.000 blob di
    `node_modules/` nella history + **94 blob APK/IPA** da ~15MB l'uno.
17. **[BASSA] README obsoleto**: descrive "4 Fantasy Tracks" (ne ha 24), linka LICENSE che non esiste,
    non documenta test né pipeline.

---

## B. SICUREZZA

1. **[CRITICA] XSS via nomi giocatori remoti in `innerHTML`.** Il nome remoto arriva da `JOIN_REQUEST`
   (`multiplayerManager.js:577`, senza sanitizzazione; il `maxlength=16` vale solo per l'input locale) e viene
   renderizzato con template literal dentro `innerHTML`:
   - `index.html:2808` + `2822-2823` (`renderPlayerRow` → `lobbyPlayersEl.innerHTML`)
   - `index.html:3111-3128` (classifica torneo → `tourneyTbody.innerHTML`)
   - `index.html:3168-3172` (toast vincitore `${winner}`)
   - schermata risultati nel bundle (`<span>${h.name}</span>`)
   Un peer malevolo con `name = <img src=x onerror=...>` esegue JS su host e guest, nel contesto di una
   WebView che espone il bridge nativo `window.AndroidHaptics` (`index.html:1904-1909`).
2. **[CRITICA] Nessuna autenticazione nelle stanze multiplayer.** `initPeer` (`multiplayerManager.js:460-469`)
   usa il broker cloud PeerJS di default (0.peerjs.com); l'host ha peer ID deterministico
   `zephyr-reef-room-ZEPH-XXXX` (`:93-95`), ~1M combinazioni via `Math.random`; `JOIN_REQUEST` accettato
   automaticamente senza approvazione host, password o token (`:562-601`).
3. **[ALTA] Spoofing totale dei messaggi: nessuna associazione mittente→slot.** Quasi nessun handler verifica
   che `data.slot` appartenga a `conn.peer`: `PLAYER_READY` (`:604-615`), `KART_STATE` (`:769-816`),
   `ITEM_USE` (`:820`), `RACER_HIT` (`:828`), `EMOTE` (`:836`), `PLAYER_FINISH` (`:845`) — e l'host ritrasmette
   tutto verbatim (`:809-815`, `:913-919`). Un guest può impersonare chiunque.
4. **[ALTA] Cheat banali: stato di gioco client-authoritative senza sanity check.** `KART_STATE` applica
   direttamente `racer.progress.lap = remote.lap` (`:1228`): basta broadcastare `lap: 999`. `PLAYER_FINISH`
   accetta `finishTime`/`rank` arbitrari (`:845-856`). Nessun check di velocità/teletrasporto.
5. **[MEDIA] RACER_HIT/ITEM_USE remoti = strumenti di griefing senza rate-limit** (`index.html:3013-3057`):
   un peer spamma `RACER_HIT` sugli avversari (l'host lo relay-a) stordendoli a ripetizione.
6. **[MEDIA] I guest fidano ciecamente i dati dell'host, senza schema validation**: `players`, `mySlot`,
   `roomCode`, `playlistTracks` assegnati direttamente (`:646-675`, `:708-716`); un host rotto può mandare
   `trackIndex: 9999` usato poi in `loadTrack` (`index.html:2984-3008`).
7. **[MEDIA] Campo `ais` del KART_STATE relayato senza sanificazione** (`:797-815`): un guest può spoofare le
   posizioni delle AI verso tutti gli altri tramite l'host come relay inconsapevole.
8. **[MEDIA] `roomCode` remoto iniettato via innerHTML** (`index.html:2826-2828`), valorizzato dal messaggio
   host senza validazione (`multiplayerManager.js:649`).
9. **[MEDIA] iOS: ATS disabilitato globalmente** (`ios/.../Info.plist:66-68`, `NSAllowsArbitraryLoads=true`)
   non giustificato — l'app serve asset locali via scheme handler.
10. **[BASSA] Android: `allowBackup="true"` senza esclusioni**; `backup_rules.xml` è una risorsa orfana mai
    referenziata dal manifest.
11. **[BASSA] Bundle minificato pulito sui segreti** (verificato: 0 hit per `AIza`/`sk-`/`api_key`/`password`/
    `eval(`; unico `http://` è il namespace w3.org). Residui: 2 `console.log`, 45 `console.error`,
    44 `console.warn`; seeds hardcoded `1337`/`4242` non documentati.

---

## C. MULTIPLAYER — ROBUSTEZZA E LOGICA

1. **[ALTA] Host migration assente, nessun rejoin.** Se l'host cade i guest ricevono solo `close` →
   `leaveRoom()` che azzera tutto a metà gara (`:440-443`); nessuna elezione nuovo host, nessun retry
   per `peer-unavailable`.
2. **[ALTA] Auto-join da `#room=` eseguito DUE volte con timeout che uccide il secondo tentativo.**
   `checkAutoJoin` registrato sia su `DOMContentLoaded` sia con `setTimeout(800)` senza guardia
   (`index.html:3483-3484`); il timeout di 8s del primo click (`:3395-3401`) scatta mentre il secondo
   tentativo è in CONNECTING e ne fa `leaveRoom()`. **I link invito falliscono in modo intermittente.**
3. **[ALTA] Vittoria e classifica calcolate indipendentemente su ogni macchina.** `finishCounter` locale nel
   bundle; i guest chiamano `handleRaceResults` con i risultati LOCALI (`multiplayerManager.js:272-293`)
   prima (o senza) il sync autorevole dell'host (`:690-706`): standings divergenti, flash doppi, e la
   vittoria "locale" sblocca tracce in localStorage indipendentemente dall'esito reale
   (`index.html:2214-2231`).
4. **[MEDIA] `JOIN_REQUEST` duplicato crea giocatori fantasma**: nessun check se `conn.peer` è già in roster
   (`:562-601`); `handlePeerDisconnect` rimuove solo il primo match (`:518`).
5. **[MEDIA] Join accettati anche a gara in corso** (`:562` non controlla `this.state`): il guest resta
   eternamente in `GUEST_LOBBY` senza mai ricevere `RACE_START_SYNC`.
6. **[MEDIA] `conn.send` senza try/catch su connessioni morenti**: `broadcastToAll`/heartbeat/relay
   (`:880-919`) controllano `conn.open` ma il close è asincrono → eccezioni ripetute a 30Hz, broadcast
   interrotto per tutti. Solo `leaveRoom` è protetto (`:1515-1523`).
7. **[MEDIA] AI doppiamente guidata sui guest**: simulazione locale + replica host in conflitto ogni frame
   (`:1163-1261` vs il `fixedStep` del bundle) → jitter; il commento a `:1173` non corrisponde al comportamento reale.
8. **[MEDIA] Partenza senza compensazione RTT**: `startTime = Date.now() + 3000` col clock dell'host
   (`:1059-1068`); il ping misurato (`:869-875`) non viene mai usato → chi ha latenza alta parte in ritardo.
9. **[MEDIA] `ROOM_FULL` inviato ma mai gestito** (`:569-571` vs `handleMessage` senza case): il guest vede
   il toast generico di disconnessione invece di "stanza piena".
10. **[MEDIA] Guest bloccato per sempre se l'host muore durante il countdown**: al tick 0 solo l'host agisce
    (`if (this.isHost)`, `:1053-1073`); nessun timeout di sblocco sull'overlay "PRONTI!" (`index.html:2915-2958`).
11. **[MEDIA] Solo STUN, nessun TURN** (`:462-468`, 3 server Google hardcoded): su NAT restrittivi (reti
    mobile — target principale dell'app!) la connessione P2P fallisce senza diagnostica.
12. **[MEDIA] Nessun handler `conn.on('error')` lato host** (`:502-513`): connessioni zombie a cui l'heartbeat
    continua a inviare. Il guest ce l'ha (`:444-448`) — asimmetria indicativa.
13. **[BASSA] Emote: testo remoto senza cap (flood) e bubble mai rimosse dal DOM** (`:1384-1422`), solo
    `display:none` fino a `clearAllNametags`.
14. **[BASSA] Nessun handler `peer.on('disconnected')`** né `peer.reconnect()` al signaling: se il broker
    cade l'host non accetta più nuovi guest e nessuno se ne accorge.
15. **[BASSA] Ogni PONG ridisegna l'intera lobby** via innerHTML ogni 2,5s per giocatore, anche in gara
    (`:869-875` → `index.html:2822-2823`): lavoro DOM sprecato su WebView mobile.
16. **[BASSA] Link invito rotto nell'app iOS**: `getInviteLink` usa `window.location.origin` (`:97-100`), ma
    la WebView iOS carica via `loadFileURL` → origin "null" → invito `null/#room=...`.
17. **[BASSA] Errore `unavailable-id` lascia l'host in lobby fantasma** (`:483-492`): UI "stanza creata"
    senza peer attivo, nessun nuovo codice proposto.
18. **[BASSA] `window.Peer` mancante → stato incoerente** (`:452-457`): `joinRoom` resta in CONNECTING,
    `createRoom` in HOST_LOBBY senza peer.
19. **[BASSA] Item "glitch" mai sincronizzato coi remoti** (`index.html:3018-3047` senza case glitch);
    `pos`/`dir` di `sendItemUse` (`:1465-1473`) ignorati dal handler (payload morto).
20. **[BASSA] `syncStartTime` non impostato nel path `countdownSec===0`** (`:1015-1026`) → countdown NaN
    se quel path venisse mai usato.
21. **[BASSA] Stati non documentati** (`CONNECTING`, `COUNTDOWN` usati ma assenti dal commento a `:13`);
    progress bar countdown presume 5s fissi (`index.html:2952`) mentre `countdownSec` è arbitrario.
22. **[BASSA] Click sul tab Host durante RESULTS/pausa ricrea la stanza** distruggendo il torneo senza
    conferma (`index.html:3242-3251` → `leaveRoom` a `:380`).
23. **[BASSA] Dead code**: `handleIncomingData` (`:554-556`, 0 riferimenti), guardia di ricorsione sempre
    falsa in `broadcastToAll` (`:899-903`), alias `broadcast()` mai chiamato.
24. **[BASSA] Ping cosmetici (hardcoded 30, floor 12) e broadcast di lobby a ogni keystroke del nickname**
    (`index.html:3273-3282` → `:137-148`).

---

## D. FISICA (kartController.js — nota: è il codice fossilizzato, la fisica reale è nel bundle)

1. **[ALTA] `this.input.forward` non esiste** nel rimbalzo guardrail (`kartController.js:442`): l'oggetto
   input (righe 61-69) non ha quel campo → `isAccelerating` sempre vero se `speed>2`; la frenata contro il
   muro viene sovrascritta da `speed = max(8.5, speed*0.88)` (`:444`) che impone 8,5 m/s anche frenando.
2. **[ALTA] Exploit di duplicazione giro**: decremento lap clampato con `Math.max(1, lap-1)` (`:491-501`) →
   al giro 1 retrocedere oltre la linea e riattraversare in avanti dà +1 giro netto. I settori tracciati
   (`:483-489`) non sono mai usati per validare l'attraversamento (nessun anti-cheat).
3. **[ALTA] Nessun clamp di `dt` in `update()`** (`:198-353`): con dt > ~83-125ms (tab switch, thaw WebView)
   i lerp `dt*12`, `dt*8`, `dt*10` superano 1 ed estrapolano oltre target; `position.addScaledVector(velocity, dt)`
   teleporta attraverso pickup (check di distanza 1 volta/frame a `:510/527/538` → tunneling su nitro/olio).
4. **[MEDIA] Durante il testacoda saltano collisioni kart-kart e hazard**: il ramo spin termina con `return`
   (`:262`) prima di `checkKartCollisions()` (`:348`) e `checkHazardsAndPickups()` (`:352`). In più la
   wall-assist (`:449-454`) può alterare `yaw` durante lo spin, combattendo con l'animazione.
5. **[MEDIA] Doppia risoluzione delle collisioni kart-kart**: ogni controller itera `allKarts` (`:355-386`) →
   stessa coppia processata 2 volte per frame (push-apart e trasferimento velocità doppi). L'impulso
   `(this.speed-other.speed)*0.35` (`:377-379`) ignora le direzioni: collisione laterale ad alta velocità
   scambia velocità come frontale. Con `distSq==0` esatto (`:364`) nessuna risoluzione.
6. **[MEDIA] Fisica frame-rate dependent**: lerp con alpha fisso per frame — `position.y` con 0.3 (`:462`),
   allineamento muro `yaw += dYaw*0.35` (`:439`), decadimento `speed*0.88` (`:444`) → a 120Hz il guardrail
   è il doppio più "veloce" che a 60Hz.
7. **[MEDIA] Il testacoda AUMENTA la velocità se si è lenti**: `triggerSpin` impone `speed = max(12.0, speed*0.58)`
   (`:125`), ramo spin `max(11.5,…)` (`:248`) → un kart colpito a 5 m/s viene accelerato a ~43 km/h.
8. **[MEDIA] Autogreggio che colpisce se stesso**: slick droppato a 4,5m con raggio 3,8 (`:148-151`) —
   il bordo resta a 0,7m dietro il centro del kart (raggio collisione ~1,4); nessun cooldown/immunità per
   il lanciatore; `box.respawnTimer` assegnato (`:513`) ma mai decrementato qui.
9. **[MEDIA] Item box consumata anche senza ricevere l'oggetto** (`:510-519`): `active=false` PRIMA del check
   `if (!this.currentItem)` → box sparisce senza reward se hai già un item.
10. **[MEDIA] `onWallHit` emesso ogni frame durante lo scraping** (`:456-457`): nessuna edge-detection →
    haptic/audio spam per tutto il tempo di contatto.
11. **[BASSA] Inversione sterzo in retromarcia solo con freno premuto** (`:337`): rilasciando il freno mentre
    si rotola ancora indietro lo sterzo torna "avanti" — incoerente.
12. **[BASSA] Settori emessi anche retro-marciando; `floor(u*3)` produce settore 3 se u===1** (`:483-489`);
    `steerAngle` (`:302`) calcolato ma mai letto dalla fisica.

---

## E. SHELL UI / INPUT (index.html)

1. **[ALTA] Gyro iOS morto dopo un reload**: al load `setControlMode('gyro', false)` (`index.html:2546`) con
   modalità da localStorage (`:2452-2454`) salta `DeviceOrientationEvent.requestPermission()` perché gated su
   `userTriggered` (`:2477`). Su iOS 13+ serve un gesto per riattivarlo.
2. **[ALTA] Banner "FINAL LAP" rotto con giri configurabili**: `lastLap` inizializzato una volta (`:2002`) e
   mai resettato su restart/quit (`:2204-2211`); scatta solo su `lap===3 && lastLap===2` → a 5 giri esce al
   giro 3, dopo un restart dal giro 3 non esce più mai.
3. **[ALTA] Scritture localStorage ripetute e non protette nel polling 120ms**: il blocco record
   (`:2214-2232`) gira ad ogni tick del `setInterval` (`:2017`) senza latch: `getItem`/`setItem` di
   record/vittoria/sblocco rieseguiti ogni 120ms per sempre; nessun try/catch → in Safari private mode
   eccezione ripetuta per sempre. Altri punti non protetti: `:2242, 2252, 2279, 2310-2314, 2337, 2983, 2989`.
4. **[MEDIA] Z-index: countdown sotto ai controlli touch e alle modal**: overlay countdown `z-index:9999`
   (`:1826`) vs touch layer 99999 (`:81`) e modal 100000 (`:426`) → durante il countdown i bottoni restano
   cliccabili sopra l'overlay.
5. **[MEDIA] Tre opzioni delle impostazioni sono decorative**: `optBtnSize`, `optSpeedClass`, `optFps`
   (`:2438-2440`) lette ma senza listener, persistenza o effetti; le classi `touch-compact`/`touch-large`
   non vengono mai aggiunte. Solo Auto-Gas e modalità guida funzionano.
6. **[MEDIA] `mp` usato senza null-check se il modulo multiplayer non carica** (`:3371-3393`): se lo
   `<script type="module">` fallisce (offline), `mp.setSelectedKart()` lancia TypeError.
7. **[MEDIA] `sessionStorage.setItem` non protetto nel fallback race start** (`:2990`): in private mode
   l'eccezione interrompe la catena prima del `location.reload()` (`:3000`).
8. **[MEDIA] Fallback clipboard con `prompt()` rotto in WebView** (`:3319, 3330`): in Android WebView senza
   `onJsPrompt` il prompt ritorna null silenziosamente → nessun modo di copiare codice/link.
9. **[MEDIA] KeyboardEvent sintetici con `key` errato e senza `keyCode`/`cancelable`**: `sendKey` dispatcha
   `{code, key: code}` (`:1918, 1923, 1930`) → `key` vale "KeyW" invece di "w"; funziona solo perché il bundle
   usa `e.code`. Filtro `isTrusted` di terze parti romperebbe tutto.
10. **[MEDIA] Touch/tastiera fisica senza dedup ibrido**: `activeKeys` traccia solo i tasti sintetici
    (`:1913-1934`); tenere `W` fisico e toccare GAS spegne il gas in modo imprevedibile nei setup misti.
11. **[MEDIA] Deregistro di TUTTI i service worker e TUTTE le cache a ogni load** (`:39-48`), non filtrati
    per scope: su GitHub Pages user site cancella SW e cache di altri progetti.
12. **[BASSA] Version-check con match debole**: `location.search.indexOf('v=')` (`:64-66`) — qualsiasi query
    contenente "v=" disabilita il versioning; su `file://` fragile.
13. **[BASSA] CSS morto della modalità "steering wheel"** (`:261-329` + varianti `:398-415`, ~80 righe):
    nessun markup/JS la referenzia — la UI promette 3 modalità, il JS ne implementa 2.
14. **[BASSA] Accessibilità e i18n**: `<html lang="en">` con UI italiana; `user-scalable=no` (`:8`) blocca lo
    zoom (WCAG 1.4.4); modal senza `role="dialog"`/`aria-modal`/focus trap/ESC; banner senza `aria-live`.
15. **[BASSA] Polling 120ms sempre attivo** anche su title/pausa (`:2017`), assegnazioni `style.display`
    ripetute ogni tick; `stuckTime += 0.12` (`:2184`) assume tick esatti → auto-recovery impreciso.
16. **[BASSA] Gyro: smoothing senza dt** (`:2583`, sensibilità diversa a 60 vs 120Hz), ramo angle 180° usa
    `gamma` in portrait (`:2558-2567`), `window.orientation` deprecato (`:2555`), nessuna ricalibrazione.

---

## F. TRACK GENERATOR (src/track/trackGenerator.js — fossilizzato)

1. **[ALTA] "Banking" basato sulla direzione di marcia, non sulla curvatura**: `:54-56` usa `tangent.x*0.35`
   → rettilinei est-ovest bancati ~19° costanti, curve parallele a Z senza banking.
2. **[ALTA] Nessun `dispose()` da nessuna parte**: mesh rimosse senza disporre geometrie/materiali — oil
   slick (`:837`), missili (`:867`), shockwave (`:881`), sparks (`:893`), confetti (`:907`); nessun teardown
   per road/guardrail/scenografia → **leak GPU a ogni restart** (letale su WebView mobile).
3. **[ALTA] Confetti: 180 mesh con 180 materiali individuali** (`:794-797`) per 6 soli colori → ~180 draw
   call nel frame di vittoria. Basterebbero 6 materiali condivisi o InstancedMesh.
4. **[ALTA] ~180 paletti del guardrail come mesh separate** (`:168-176`) con `castShadow=true` (`:191`) →
   ~180 draw call raddoppiate dalla shadow pass.
5. **[MEDIA] CanvasTexture senza `colorSpace = SRGBColorSpace`** (`:128-130, 246, 307, 343, 385, 618`):
   con Three r186 i colori autoriali escono più scuri/saturati.
6. **[MEDIA] Flip-flop di `u` sulla linea di partenza**: loop include `i==numSegs` con `u=1.0` che duplica la
   posizione di `i==0` (`:48-77`); combinato col lap-counting (`kartController.js:491-501`) produce
   incrementi/decrementi lap spurii da jitter del nearest-sample.
7. **[MEDIA] `CatmullRomCurve3(..., 'centripetal', 0.5)`: la tensione è silenziosamente ignorata** (vale solo
   per il tipo 'catmullrom') — codice fuorviante (`:12`).
8. **[MEDIA] Mismatch di risoluzione arc-length**: `getLength()` a 200 divisioni vs pista campionata a 360
   (`:13`) → mappa u↔distanza più grossolana della mesh renderizzata (incongruenze per AI/minimap/pickup).
9. **[MEDIA] `dropOilSlick` ricrea a runtime texture/material duplicati** (`:690-705`): hitch in gara, due set
   di risorse identiche in memoria.
10. **[MEDIA] Animazioni su `Date.now()` invece del tempo di gioco** (`:822, 917, 920`): non deterministiche,
    animano anche in pausa.
11. **[MEDIA] Churn di allocazioni per effetto**: Sphere+Cone+2 materiali per ogni missile (`:722-746`),
    Box+material per ogni burst di sparks (`:771-773`), Torus per shockwave (`:748-768`) — creati a ogni uso,
    mai disposati.
12. **[BASSA] Hitbox vs grafica degli oil slick incoerenti**: statici plane 4,5m vs radius 2,8 (`:357-365`);
    droppati plane `radius*1.8` vs raggio pieno (`:707`) — due rapporti diversi.
13. **[BASSA] Magic numbers sparsi non documentati**: `:16` (360), `:54` (0.35), `:66` (12.0), `:716` (45.0),
    `:743-744` (48/5), `:890` (25).
14. **[BASSA] Numerazione commenti in `update()` saltellata** (1,3,4,5,6,7… poi 2 a `:912`).
15. **[BASSA] Seam di shading al traguardo**: vertici duplicati a inizio/fine (`:48-91`) →
    `computeVertexNormals` calcola normali indipendenti.

---

## G. AI RACERS (src/ai/aiRacers.js — fossilizzato)

1. **[ALTA] `allKarts` mai popolato: collision-avoidance e collisioni AI sono codice morto.**
   `aiRacers.js:12` crea il KartController con il default `allKarts = []` e non lo assegna mai → il blocco
   anti-collisione (`:64-80`) non itera mai; **gli avversari si attraversano e non si evitano**.
2. **[ALTA] Il rubber-banding "catch-up" è un no-op**: ×1.25 (`:109-115`) influenza solo il flag `accel`,
   ma `kartController.js:277-282` clampavia comunque a `maxSpeed` → la "rimonta" promessa non esiste;
   attivo solo il rallentamento (×0.88) di chi è avanti.
3. **[ALTA] Griglia di partenza e conteggio giri falsati**: `startU = 1-(idx+1)*0.018` (`:17`) mette gli AI
   a u≈0,98-0,86 con `lap=1` → al via risultano "avanti" di ~1 giro (rank e rubber-band invertiti) e al
   primo attraversamento `lap`→2: con 3 giri ne corrono ~2. Manca l'arming del primo giro.
4. **[MEDIA] `steerSmooth` mai usato → steering bang-bang** (inizializzato a `:36`, mai letto): gli AI
   oscillano attorno alla linea ideale.
5. **[MEDIA] Test "kart davanti" dipendente dalla distanza**: `toOther.dot(forward) > 0.5` con `toOther` NON
   normalizzato (`:70-72`) → la soglia scala con la distanza; serve normalizzare.
6. **[MEDIA] 6-8 `new Vector3` per AI per frame** (`:58-88`) × 7 avversari ≈ 50+ allocazioni/frame →
   pressione GC su WebView a 60fps.
7. **[MEDIA] Gli AI ignorano completamente i pericoli**: nessun riferimento a `oilSlicks`/`smogZones`,
   nessuna evasione né recovery.
8. **[MEDIA] Logica item myopica e soglie incoerenti**: 'granita' mai usata se `|steerErr|>=0.2` senza
   timeout (`:135`); 'greggio'/'trap' valutano solo il player, mai gli altri AI (`:138,143`); smog check
   `>40` mentre il motore rallenta solo sopra 65 (`:151` vs kartController.js:272).
9. **[BASSA] `rotation.order='YXZ'` risettato ogni frame** (`:165`); nel ramo `finished` mai impostato.

---

## H. KART MODELS (src/karts/kartModels.js — fossilizzato)

1. **[ALTA] Materiali duplicati ovunque**: 6 materiali base per kart ×8 = 48 (`:10-23`), più decine di
   materiali inline per parti identiche (arance `:223`, teste, sirene, neon, exhaust…) → decine di
   program-bind inutili che uccidono il batching su mobile.
2. **[ALTA] Nessun `dispose()` e geometrie non condivise**: ogni istanza crea le proprie geometrie; shield
   e fiamme create anche se mai mostrate (`:301, 312-320`); la factory non espone modo di liberare le
   risorse → ogni restart leak-a un intero subtree.
3. **[MEDIA] Lerp di sterzo senza clamp dt** (`:336`): con dt>~71ms il fattore supera 1 → overshoot ruote.
4. **[BASSA] Valori magici**: sterzo visuale 0.55 (`:336`), pulsazione shield 0.006 (`:343`), fiamme a
   z=-1.75 fisso per kart di lunghezze diverse (`:315`), jitter 0.85+rand·0.35 (`:356`).
5. **[BASSA] Vetri one-sided**: PlaneGeometry FrontSide (`:59-61, 110-112`) → parabrezza invisibile dalla
   camera di inseguimento.
6. **[BASSA] Modello non deterministico per la 'zia'**: 8 arance posizionate con `Math.random()` a ogni
   creazione (`:222-226`).

---

## I. MINIMAP (src/ui/minimap.js — fossilizzato)

1. **[ALTA] Freccia del player specchiata orizzontalmente**: `ctx.rotate(playerController.yaw)` (`:121`) con
   yaw definito forward=(sin yaw,0,cos yaw) → a yaw=π/2 (kart verso destra sulla mappa) la freccia punta a
   sinistra. Correzione: `ctx.rotate(-yaw)`.
2. **[MEDIA] Tracciato statico ridisegnato ogni frame con 201 `getPointAt`** (`:44-50`): ogni chiamata è una
   ricerca binaria + valutazione spline, per una geometria che non cambia mai → serve un `Path2D` cached.
3. **[MEDIA] Landmark emoji hardcoded e ignoranti del tema** (`:69-91`): 🏭/🎵/📢/🗼 a u fissi su qualunque
   tracciato, anche dove la raffineria/concerto non esiste (`trackGenerator.js:441-457` ha il tema, la
   minimap non lo consulta).
4. **[MEDIA] Nessuna gestione devicePixelRatio** (`:7-8`): mappa sfocata su HiDPI (DPR 2-3) e possibili
   disallineamenti se il CSS ridimensiona il canvas.
5. **[BASSA] Campo colore incoerente**: `r.config.color` (`:99`) vs `kartColor`/`accentColor` di kartModels
   (`:14-23`) → se `.color` manca, tutti i dot AI escono ciano.
6. **[BASSA] Bounding box degenere non guardato** (`:23-25`): scale=Infinity e coordinate NaN senza errore.

---

## J. INFRASTRUTTURA / REPO / NATIVE

1. **[CRITICA] Repository da 485MB per 149 file tracciati**: ~4.000 blob di `node_modules/` nella history
   (incluso `rolldown-binding.darwin-arm64.node` da 16,5MB) e **94 blob APK/IPA** da ~15MB l'uno.
2. **[CRITICA] `ZephyrReefKart.apk` (10,9MB) e `.ipa` (3,7MB) committati come file tracciati** e non
   esclusi dal .gitignore → ogni rebuild+commit aggiunge ~14MB permanenti.
3. **[ALTA] `dist/` interamente committato e assente dal .gitignore** (18 file, ~9,2MB ridondanti; `build/`
   invece è correttamente ignorato).
4. **[ALTA] Quintuplicazione dell'app per design**: bundle+CSS+peerjs+icone+HTML in 5 copie tracciate
   (`assets/`, `dist/`, `public/`, `android/.../assets/`, `ios/.../WebAssets/`); `zephyr.html` è byte-identico
   a `index.html` (puro duplicato). Costo 5x su ogni modifica.
5. **[RISOLTO] Keystore di Release dedicato per Android**: generato `zephyr-release.keystore` (SHA256withRSA, 2048-bit, valido fino al 2054) configurato in `signingConfigs.release`, ora AAB e APK sono firmati con chiave di produzione autentica e verificati con apksigner.
6. **[MEDIA] Release Android senza minificazione** (`isMinifyEnabled=false`): APK gonfio.
7. **[RISOLTO] `applicationId` e namespace di produzione**: aggiornato a `com.robzomb.zephyrreefkart`, eliminato il prefisso vietato `com.example.*`, pienamente conforme e accettato da Google Play Store.
8. **[MEDIA] Test che validano artefatti binari**: il test IPA asserisce che il binario esista e pesi >1MB
   (`test_all_systems.mjs` ~riga 3849) — sempre vero finché non lo cancelli.
9. **[MEDIA] Metà suite dipende dalla CWD**: letture relative (`fs.readFileSync('assets/...')` a `:2799`,
   `'ios/...'` a `:3808+`) accanto ai `new URL(...)` → lanciare da fuori la root rompe metà dei test.
10. **[MEDIA] I veri test browser (puppeteer) esistono ma non sono cablati**: `tests/verify_in_browser.mjs`
    ecc. sono i soli test meaningful, ma senza script npm né CI (`.github/` assente), e hardcodati su
    `/Users/robzomb/...`.
11. **[MEDIA] build_ios.sh ignora il progetto Xcode committato**: compila con `swiftc` diretto e firma
    ad-hoc (`codesign -s -`) → IPA non installabile su device senza provisioning; due fonti di verità
    (il `project.pbxproj` committato viene solo "validato" dai test).
12. **[MEDIA] Pipeline native senza error-handling**: `execSync` senza try/catch; se `zip -u` fallisce la dir
    `temp_ipa_update` resta sporca; verifica APK opzionale a runtime (build-tools mancanti → skip silenzioso);
    fallback `JAVA_HOME` rotto (PATH diventa `"undefined/bin:..."`).
13. **[MEDIA] Percorsi di output hardcodati fuori repo senza mkdir** (`package_native.js:5`,
    `sync_all_mirrors.js:6` → `/Users/robzomb/.gemini/antigravity/brain/0394039c-...`): crash ENOENT dopo
    minuti di build gradle.
14. **[MEDIA] `og-image.png` (1,8MB) committato 2 volte e mai referenziato** (l'HTML usa solo `og-image.jpg`)
    → ~3,7MB morti tracciati.
15. **[MEDIA] .gitignore incompleto**: mancano `dist/` (tracciato!), `*.apk`/`*.ipa`, `temp_ipa_update/`.
16. **[BASSA] L'unico test su codice reale colpisce il mirror di build** (importa `assets/multiplayerManager.js`
    invece di `src/multiplayer/`): identici oggi, ma il test valida la copia sbagliata.

---

## ⭐ PUNTI FORTI (per onestà di bilancio)

- **Sicurezza bundle/manifest sopra la media**: nessun segreto nel repo, permessi Android minimali
  (INTERNET+VIBRATE), niente cleartext/debuggable, dipendenze reali e coerenti col lockfile
  (vite 8.3.0, three 0.186.0, puppeteer 25.11.0 verificati su npm).
- **Touch mobile solido**: safe-area `env()` sistematica, `touch-action:none`, multi-touch con dedup e
  `clearAllInputs` su touchcancel/blur, haptic con doppio fallback protetto.
- **Fisica guardrail "zero cadute"** con reset pulito; mini-turbo a 3 livelli con isteresi; spline centripetal
  chiusa con wrap corretto e `pathSamples` riusati invece di rivalutare la spline per kart per frame.
- **Multiplayer: design di base sensato** (host-authoritative per AI/playlist, ready-check, conversione
  disconnessi→AI, cancellazione countdown su drop, nametag con `textContent` sicure).
- **I test puppeteer di `tests/verify_*.mjs` sono genuini** (server HTTP reale, controlli HUD, check NaN):
  una buona base da cablare in CI.
- **Mirror oggi perfettamente sincronizzati** (verificati byte-identici) e suite node:test veloce (253/253 in 5s).

---

## 🎯 Se dovessi fare solo 5 cose (in ordine)

1. **Recuperare/ricostruire il sorgente del motore** (decompilare/ritrasformare il bundle in un modulo
   `src/main.js` leggibile e ripristinare l'entry Vite) — senza questo ogni fix è patch su minificato.
2. **Sanitizzare tutti gli innerHTML con dati remoti** (nomi giocatori, roomCode): usare `textContent`
   come già fatto per le nametag.
3. **Rimuovere APK/IPA/dist/node_modules dalla history** (git filter-repo o BFG) + .gitignore + Git LFS
   per i binari futuri → repo da 485MB a ~10MB.
4. **Ripristinare `src/` nel versionamento** (o cancellarlo del tutto se si archivia) e collegare i test
   al codice reale invece che al minificato.
5. **Fissare il doppio auto-join `#room=`** (guardia di stato) — è il bug più visibile agli utenti
   (inviti multiplayer intermittenti).
