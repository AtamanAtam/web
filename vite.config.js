import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { defineConfig } from 'vite';
import handlebars from 'vite-plugin-handlebars';
import tailwindcss from '@tailwindcss/vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [
    tailwindcss(),
    handlebars({
      context: {
        // Твой контекст, если есть
      },
      partialDirectory: resolve(__dirname, 'src/partials'),
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'), // <--- ВОТ ЭТА СТРОКА
    },
  },
});