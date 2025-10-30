// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    server: {
        host: true, // O puedes usar "0.0.0.0" en lugar de true
        port: 4321, // Si quieres un puerto específico
      }
});
