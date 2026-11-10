import { defineConfig } from 'vite';

// base './' = funciona no APK, no GitHub Pages e em qualquer pasta.
// Nomes fixos de arquivos para o service worker guardar tudo para uso offline.
export default defineConfig({
  base: './',
  build: {
    rollupOptions: {
      output: {
        entryFileNames: 'assets/app.js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name][extname]',
      },
    },
  },
});
