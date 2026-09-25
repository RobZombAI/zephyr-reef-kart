# Informativa sulla Privacy (Privacy Policy) — Zephyr Reef Kart

**Ultimo aggiornamento:** 26 Settembre 2026  
**URL Pubblico Ufficiale:** `https://robzombai.github.io/zephyr-reef-kart/privacy-policy.html`  
**Sviluppatore / Titolare del trattamento:** RobZomb Games (`robzomb@gmail.com`)  
**Applicazione:** Zephyr Reef Kart (`com.robzomb.zephyrreefkart`)

---

## 1. Premessa e Ambito di Applicazione
La presente Informativa sulla Privacy descrive i termini di gestione della privacy e della sicurezza dei dati per il videogioco **Zephyr Reef Kart**, distribuito su Google Play Store e tramite Web App. L'applicazione rispetta le linee guida del **Google Play Developer Program Policy**, il Regolamento Generale sulla Protezione dei Dati dell'Unione Europea (**GDPR** - Reg. UE 2016/679), il California Consumer Privacy Act (**CCPA/CPRA**) e il Children's Online Privacy Protection Act (**COPPA**).

---

## 2. Raccolta e Trattamento dei Dati

### 2.1 Nessun Dato Personale Diretto (No PII)
Zephyr Reef Kart **non richiede account utente, né registrazione, né indirizzo email, né password**. Nessun dato identificativo della persona viene memorizzato sui nostri server o ceduto a soggetti terzi.

### 2.2 Salvataggi e Progressi di Gioco Locali
Tutti i progressi di gioco — inclusi:
- Circuiti sbloccati e trofei vinti;
- Tempi record dei singoli tracciati;
- Preferenze di guida (giroscopio, comandi touch, classe di velocità, audio);

sono memorizzati **esclusivamente in locale** nella memoria protetta del dispositivo dell'utente (`localStorage` / WebView Sandbox). Tali informazioni non lasciano mai il dispositivo.

---

## 3. Pubblicità e Google Mobile Ads (AdMob)
L'applicazione integra i servizi pubblicitari di terze parti forniti da **Google AdMob** (Google Ireland Limited / Google LLC).

### Finalità e Dati Trattati:
- **Identificatore Pubblicitario di Google (Advertising ID / AD_ID):** Utilizzato per erogare annunci pubblicitari (banner, interstitial a fine gara e annunci con ricompensa), prevenire click fraudolenti e gestire il limite di frequenza di esposizione degli annunci (Frequency Capping).
- **Dati Diagnostici e Tecnici del Dispositivo:** Informazioni aggregate sul modello del dispositivo, versione Android e tempi di caricamento dell'annuncio per garantire stabilità ed evitare crash.

Per maggiori dettagli sulle pratiche di Google:
- Privacy Policy di Google: [https://policies.google.com/privacy](https://policies.google.com/privacy)
- Come Google usa i dati pubblicitari: [https://policies.google.com/technologies/ads](https://policies.google.com/technologies/ads)

---

## 4. Consenso Privacy per Utenti Europei (GDPR & Google UMP)
Per gli utenti situati nello Spazio Economico Europeo (SEE) e nel Regno Unito:
- All'avvio dell'applicazione viene richiesto il consenso esplicito tramite la piattaforma certificata **Google User Messaging Platform (UMP SDK)** conforme allo standard IAB TCF v2.2.
- L'utente può scegliere tra annunci personalizzati o non personalizzati.
- È possibile modificare o revocare il consenso in qualunque momento dal menu di pausa del gioco: **"⚙️ Opzioni Gioco" ➔ "🛡️ Consenso Privacy & Annunci (GDPR)"**.

---

## 5. Tutela dei Minori (COPPA)
L'applicazione è progettata per un pubblico generale. Non raccogliamo consapevolmente dati personali da minori di 13 anni. Nei casi in cui l'utente dichiari di avere un'età inferiore a quella del consenso digitale, l'SDK AdMob opera in conformità con COPPA e con la politica famiglie di Google Play, disattivando il tracciamento e la profilazione.

---

## 6. Sicurezza e Protezione dei Dati
- **Connessioni Cifrate:** Ogni chiamata di rete avviene tramite crittografia TLS 1.3 (HTTPS / WSS).
- **Backup Disabilitato:** `android:allowBackup="false"` protegge la memoria dell'applicazione da estrazioni non autorizzate via cavo o comandi di debug.
- **Isolamento Sandbox:** I permessi su file locali sono bloccati (`allowFileAccess = false`, `allowContentAccess = false`), servendo tutti i contenuti multimediali in un ambiente virtuale protetto HTTPS (`WebViewAssetLoader`).

---

## 7. Scheda Sicurezza Dati di Google Play (Data Safety Form)
Di seguito le risposte da inserire nella console sviluppatori di Google Play:
- **L'app raccoglie o condivide dati utente?** Sì (tramite SDK terze parti Google Mobile Ads).
- **Tutti i dati raccolti dall'app vengono crittografati in transito?** Sì (HTTPS/TLS).
- **Fornisci un modo agli utenti per richiedere l'eliminazione dei dati?** Sì (l'utente può eliminare i dati locali dall'app e resettare l'ID pubblicitario dalle impostazioni Android).
- **Tipi di dati raccolti:**
  - *ID dispositivo o altri ID*: ID pubblicitario (finalità: Pubblicità e analisi di terze parti).

---

## 8. Contatti
Per domande o segnalazioni relative alla privacy:
- **Email:** `robzomb@gmail.com`
- **Sviluppatore:** RobZomb Games
- **GitHub:** `https://github.com/RobZombAI/zephyr-reef-kart`
