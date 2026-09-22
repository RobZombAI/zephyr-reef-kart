import { defineConfig } from 'vite';
import { readFileSync } from 'node:fs';

// Legge la versione dal package.json (progetto "type": "module": niente require).
const pkg = JSON.parse(readFileSync(new URL('./package.json', import.meta.url), 'utf8'));

export default defineConfig({
  base: './',
  server: {
    port: 3000,
    open: false,
    host: true
  },
  build: {
    outDir: 'dist',
    assetsInlineLimit: 0
  },
  define: {
    // Nota: l'entry attuale è decorativa (il bundle assets/index-*.js è precompilato);
    // il define diventa operativo quando l'entry sorgente sarà ripristinata.
    __APP_VERSION__: JSON.stringify(pkg.version)
  }
});
