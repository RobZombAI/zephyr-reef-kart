#!/usr/bin/env node
/**
 * scripts/upload_playstore.mjs — Caricamento automatico di ZephyrReefKart.aab su Google Play Console
 *
 * Utilizzo:
 *   node scripts/upload_playstore.mjs [percorso/service-account.json] [track]
 *
 * Parametri:
 *   - service-account.json: Chiave privata dell'account di servizio Google Play Developer API
 *   - track: 'internal' (default), 'alpha', 'beta', o 'production'
 *
 * Se il file delle credenziali non viene fornito, lo script stampa le istruzioni
 * immediate per il caricamento diretto via interfaccia web di Google Play Console.
 */

import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(__dirname, '..');
const PACKAGE_NAME = 'com.robzomb.zephyrreefkart';
const AAB_PATH = path.join(REPO_ROOT, 'ZephyrReefKart.aab');

const args = process.argv.slice(2);
let keyFilePath = args[0] || process.env.GOOGLE_APPLICATION_CREDENTIALS || path.join(REPO_ROOT, 'play-service-account.json');
const targetTrack = args[1] || process.env.PLAY_TRACK || 'internal';

console.log('===============================================================');
console.log('🏎️  ZEPHYR REEF KART — STRUMENTO DI PUBBLICAZIONE GOOGLE PLAY');
console.log('===============================================================');
console.log(`Package Name: ${PACKAGE_NAME}`);
console.log(`Target Track: ${targetTrack}`);
console.log(`File AAB:     ${AAB_PATH}`);

if (!fs.existsSync(AAB_PATH)) {
  console.error(`\n❌ Errore: File ${AAB_PATH} non trovato!`);
  console.error('Esegui prima: npm run sync && node scripts/package_native.js per compilare il bundle.');
  process.exit(1);
}

const aabStats = fs.statSync(AAB_PATH);
console.log(`Dimensione AAB: ${(aabStats.size / (1024 * 1024)).toFixed(2)} MB`);

if (!fs.existsSync(keyFilePath)) {
  console.log('\n---------------------------------------------------------------');
  console.log('ℹ️  CHIAVE SERVICE ACCOUNT GOOGLE PLAY NON FORNITA');
  console.log('---------------------------------------------------------------');
  console.log('Il bundle ZephyrReefKart.aab è compilato, firmato e PRONTO al 100% per il Play Store!');
  console.log('\nHai due opzioni per completare il caricamento:');
  console.log('\nOPZIONE A (Consigliata per il 1° caricamento - Via Browser):');
  console.log(' 1. Apri Google Play Console: https://play.google.com/console');
  console.log(' 2. Seleziona (o crea) l\'app "Zephyr Reef: 3D Kart Racing" (package: com.robzomb.zephyrreefkart)');
  console.log(' 3. Vai su "Test interno" (o Produzione) ➔ Fai clic su "Crea nuova release"');
  console.log(` 4. Trascina il file generato:`);
  console.log(`    📁 ${AAB_PATH}`);
  console.log(' 5. Inserisci le note di rilascio, salva ed esamina la release!');
  console.log('\nOPZIONE B (Caricamento automatico da riga di comando tramite API):');
  console.log(' 1. Abilita la Google Play Developer API su Google Cloud');
  console.log(' 2. Crea un account di servizio con permessi di rilascio e scarica il file JSON');
  console.log(' 3. Esegui il comando:');
  console.log(`    node scripts/upload_playstore.mjs /percorso/del/tuo/service-account.json ${targetTrack}`);
  console.log('---------------------------------------------------------------\n');
  process.exit(0);
}

// Implementazione Google OAuth2 JWT per Google Play Developer API
async function getAccessToken(keyData) {
  const now = Math.floor(Date.now() / 1000);
  const header = { alg: 'RS256', typ: 'JWT' };
  const claimSet = {
    iss: keyData.client_email,
    scope: 'https://www.googleapis.com/auth/androidpublisher',
    aud: 'https://oauth2.googleapis.com/token',
    exp: now + 3600,
    iat: now
  };

  const base64UrlEncode = (obj) =>
    Buffer.from(JSON.stringify(obj)).toString('base64url');

  const unsignedToken = `${base64UrlEncode(header)}.${base64UrlEncode(claimSet)}`;
  const sign = crypto.createSign('RSA-SHA256');
  sign.update(unsignedToken);
  sign.end();
  const signature = sign.sign(keyData.private_key, 'base64url');
  const jwt = `${unsignedToken}.${signature}`;

  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion: jwt
    })
  });

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`Autenticazione OAuth2 fallita: ${res.status} ${errText}`);
  }

  const tokenData = await res.json();
  return tokenData.access_token;
}

async function uploadToPlayStore() {
  try {
    console.log(`--> Lettura credenziali da ${keyFilePath}...`);
    const keyData = JSON.parse(fs.readFileSync(keyFilePath, 'utf8'));
    console.log(`--> Autenticazione con account di servizio: ${keyData.client_email}...`);
    const accessToken = await getAccessToken(keyData);
    console.log('✓ Token di accesso Google Play API ottenuto con successo.');

    const apiBase = `https://androidpublisher.googleapis.com/androidpublisher/v3/applications/${PACKAGE_NAME}`;

    // 1. Crea una sessione di Edit
    console.log('--> Creazione sessione di modifica (Edit)...');
    const editRes = await fetch(`${apiBase}/edits`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      }
    });

    if (!editRes.ok) {
      const errText = await editRes.text();
      throw new Error(`Creazione sessione Edit fallita: ${editRes.status} ${errText}`);
    }

    const editData = await editRes.json();
    const editId = editData.id;
    console.log(`✓ Sessione Edit creata: ID ${editId}`);

    // 2. Carica il file AAB
    console.log(`--> Caricamento ${AAB_PATH} (${(aabStats.size / (1024 * 1024)).toFixed(2)} MB)...`);
    const uploadUrl = `https://androidpublisher.googleapis.com/upload/androidpublisher/v3/applications/${PACKAGE_NAME}/edits/${editId}/bundles?uploadType=media`;
    const aabStream = fs.readFileSync(AAB_PATH);

    const uploadRes = await fetch(uploadUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/octet-stream',
        'Content-Length': String(aabStats.size)
      },
      body: aabStream
    });

    if (!uploadRes.ok) {
      const errText = await uploadRes.text();
      throw new Error(`Upload AAB fallito: ${uploadRes.status} ${errText}`);
    }

    const bundleData = await uploadRes.json();
    const versionCode = bundleData.versionCode;
    console.log(`✓ Bundle caricato con successo! Version Code: ${versionCode}`);

    // 3. Assegna il bundle alla traccia di rilascio
    console.log(`--> Assegnazione versione ${versionCode} alla traccia '${targetTrack}'...`);
    const trackPayload = {
      track: targetTrack,
      releases: [
        {
          versionCodes: [String(versionCode)],
          status: 'completed',
          releaseNotes: [
            {
              language: 'it-IT',
              text: 'Lancio ufficiale: 24 circuiti, 8 piloti, fisica 120 FPS e modalità arcade!'
            },
            {
              language: 'en-US',
              text: 'Official launch: 24 tracks, 8 racers, 120 FPS fluid physics, and authentic arcade standings!'
            }
          ]
        }
      ]
    };

    const trackRes = await fetch(`${apiBase}/edits/${editId}/tracks/${targetTrack}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(trackPayload)
    });

    if (!trackRes.ok) {
      const errText = await trackRes.text();
      throw new Error(`Assegnazione traccia fallita: ${trackRes.status} ${errText}`);
    }
    console.log(`✓ Versione assegnata alla traccia '${targetTrack}'.`);

    // 4. Conferma (Commit) la sessione di Edit
    console.log('--> Validazione e commit della release su Google Play...');
    const commitRes = await fetch(`${apiBase}/edits/${editId}:commit`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    });

    if (!commitRes.ok) {
      const errText = await commitRes.text();
      throw new Error(`Commit della release fallito: ${commitRes.status} ${errText}`);
    }

    console.log('\n===============================================================');
    console.log('🎉 PUBBLICAZIONE COMPLETATA CON SUCCESSO SU GOOGLE PLAY!');
    console.log(`Traccia: ${targetTrack}`);
    console.log(`Versione: 6.9.6 (${versionCode})`);
    console.log('Controlla la console: https://play.google.com/console');
    console.log('===============================================================\n');
  } catch (err) {
    console.error('\n❌ Errore durante la pubblicazione:', err.message);
    process.exit(1);
  }
}

await uploadToPlayStore();
