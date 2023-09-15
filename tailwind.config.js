/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,njk,md,js}'],
    plugins: [require('tailwind-nord')],
    theme: {
        extend: {},
    },
};
