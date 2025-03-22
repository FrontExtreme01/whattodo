import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import partytown from '@astrojs/partytown';

import netlify from '@astrojs/netlify';

export default defineConfig({
  site: 'https://whattodocan.netlify.app',

  integrations: [tailwind(), react(), mdx(), sitemap({
    i18n: {
      defaultLocale: 'en',
      locales: {
        en: 'en-US',
        es: 'es-ES',
      }
    }
  }), partytown({
    config: {
      forward: ['dataLayer.push', 'fbq'],
    },
  })],

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    fallback: {
      es: 'en',
    },
    routing: {
      prefixDefaultLocale: false
    }
  },

  experimental: {
    svg: {
      mode: 'sprite',
    }
  },

  legacy: {
    collections: true
  },

  adapter: netlify()
});