/// <reference types="vitest" />
import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
import vuetify from 'vite-plugin-vuetify';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isProd = mode === 'production';
  return {
    plugins: [
      vue(),
      vuetify({ autoImport: true }),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    server: {
      host: 'localhost',
      port: 8080,
      proxy: {
        '/api': {
          target: 'IP/URL',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },
    build: {
      outDir: isProd ? 'dist' : 'dist-dev',
      assetsDir: 'assets',
      cssCodeSplit: false,
      sourcemap: false,
      minify: isProd,
    },
    test: {
      globals: true,
      environment: 'jsdom',
      deps: {
        inline: [ 'vuetify' ],
      },
      name: 'Tests',
      root: './src',
    },
  };
});
