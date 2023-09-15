/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,njk,md,js}'],
    plugins: [require('tailwind-nord')],
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
