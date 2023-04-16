/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                inter: ['Inter'],
                bitter: ['Bitter'],
                opensans: ['OpenSans'],
            },
            colors: {
                'picton-blue': {
                    50: '#f1f9fe',
                    100: '#e2f2fc',
                    200: '#bfe4f8',
                    300: '#86d1f3',
                    400: '#46b8ea',
                    500: '#30ace2',
                    600: '#1180b8',
                    700: '#0f6795',
                    800: '#10577c',
                    900: '#134967',
                },
            },
        },
    },
    plugins: [],
};
