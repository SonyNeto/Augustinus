import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@augustinus/core': path.resolve(__dirname, '../core/src'),
    },
  },
  optimizeDeps: {
    include: ['separador-silabas'],
  },
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: 'exsurge.min.js',
          dest: ''
        },
        {
          src: 'exsurge.min.js.map',
          dest: ''
        }
      ]
    })
  ]
});