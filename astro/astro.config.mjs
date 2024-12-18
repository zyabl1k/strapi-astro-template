// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import node from '@astrojs/node';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    site: 'https://h6c.ru',
    integrations: [react(), tailwind(), sitemap()],
    output: 'server',
    adapter: node({
        mode: 'standalone',
    }),
    server: {
        port: 4321,
    },
});
