import defaultTheme from 'tailwindcss/defaultTheme'
/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        fontFamily: {
            sans: ["whitney", "Open sans", ...defaultTheme.fontFamily.sans],
            title: ["Ginto", "Open sans", ...defaultTheme.fontFamily.sans]
        },
        extend: {
            colors: {
                brand: "#5865F2",
                gray: {
                    50: "#ECEDEE",
                    100: "#DCDDDE",
                    200: "#B9BBBE",
                    300: "#8E9297",
                    400: "#72767D",
                    500: "#5C6067",
                    600: "#464950",
                    700: "#36393F",
                    800: "#2F3136",
                    900: "#202225"
                }
            }
        },
    },
    plugins: [],
}
