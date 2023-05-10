import presetAttributify from '@unocss/preset-attributify';
import { defineConfig, presetUno, presetWebFonts } from 'unocss';

export default defineConfig({
  include: ['./**/*.{jsx,tsx,md,html,js,ts}'],

  exclude: ['node_modules/**/*'],

  theme: {
    colors: {
      primary: '#F29200',
      'primary-dark': '#C97A04',
      secondary: '#EFEFEF',
    },
  },

  presets: [
    presetUno(),
    presetAttributify(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        fira: 'Fira Sans',
        heebo: ['Heebo'],
      },
    }),
  ],
});
