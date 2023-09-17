/*

--- 01 TYPOGRAPHY SYSTEM: https://tailwindcss.com/docs/font-family

- Font sizes 
(text-) xs | sm | base | lg | xl | 2xl | 3xl | 4xl | 5xl | 6xl | 7xl | 8xl | 9xl
(px)    12 | 14 |  16  | 18 | 20 | 24  | 30  | 36  | 48  | 60  | 72  | 96  | 128

- Font weights:
font-normal: 400
font-medium: 500
font-semibold: 600
font-bold: 700

- Line heights:
leading-none: 1
leading-tight: 1.25
leading-snug: 1.375
leading-relaxed: 1.625

- Letter spacing
tracking-tighter: -0.05em
tracking-wide: 0.025em

--- 02 COLORS: https://www.nordtheme.com/docs/colors-and-palettes

- Primary: nord0: #2e3440 nord6: #eceff4
- Tints: nord5: #e5e9f0 nord4: #d8dee9
- Shades: nord1: #3b4252 nord2: #434c5e nord3: #4c566a
- Accents:
    - Forest: nord7: #8fbcbb nord8: #88c0d0 nord9: #81a1c1 nord10: #5e81ac
    - Aurora: nord11: #bf616a nord12: #d08770 nord13: #ebcb8b nord14: #a3be8c nord15: #b48ead 
- Greys: #888 #767676 #6f6f6f #555 #333

--- 05 SHADOWS

--- 06 BORDER-RADIUS

Default: 50px
Small: 25px

--- 07 WHITESPACE

- Spacing system (px): https://tailwindcss.com/docs/padding
p-0.5 | p-1 | p-2 | p-3 | p-4 | p-6 | p-8 | p-12 | p-16 | p-20 | p-24 | p-32
2     | 4   | 8   | 12  | 16  | 24  | 32  | 48   | 64   | 80   | 96   | 128

*/

/** @type {import('tailwindcss').Config} */

import plugin from 'tailwindcss/plugin';

const config = {
    content: ['./src/**/*.{html,njk,md,js}'],
    plugins: [
        require('tailwind-nord'),
        plugin(function ({ addBase, theme }) {
            addBase({
                html: {
                    overflowX: 'hidden',
                    scrollBehavior: 'smooth',
                },
                h1: {
                    fontSize: theme('fontSize.6xl'),
                    fontWeight: theme('fontWeight.bold'),
                },
                h2: {
                    fontSize: theme('fontSize.4xl'),
                    fontWeight: theme('fontWeight.semibold'),
                },
                h3: { fontSize: theme('fontSize.xl') },
            });
        }),
    ],
    theme: {
        fontFamily: {
            sans: [
                'Montserrat',
                'ui-sans-serif',
                'system-ui',
                '-apple-system',
                'BlinkMacSystemFont',
                'Segoe UI',
                'Roboto',
                'Helvetica Neue',
                'Arial',
                'Noto Sans',
                'sans-serif',
                'Apple Color Emoji',
                'Segoe UI Emoji',
                'Segoe UI Symbol',
                'Noto Color Emoji',
            ],
            serif: [
                'Libre Baskerville',
                'ui-serif',
                'Georgia',
                'Cambria',
                'Times New Roman',
                'Times',
                'serif',
            ],
        },
        extend: {},
    },
};

export default config;
