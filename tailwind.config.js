import defaultTheme from 'tailwindcss/defaultTheme';
import tailwindScroll from 'tailwind-scrollbar'

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        boxShadow: {
            sm: " 0 1px 0 rgba(4, 4, 5, 0.2), 0 1.5px 0 rgba(6, 6, 7, 0.5), 0 0 0 rgba(0, 0, 0, 0.1)",
            md: "0 4px 4px rgba(0,0,0,0.16)",
            lg: "0 8px 16px rgba(0,0,0,0.24)"
        },
        extend: {
            fontFamily: {
                sans: ["whitney", "Open sans", ...defaultTheme.fontFamily.sans],
                title: ["Ginto", "Open sans", ...defaultTheme.fontFamily.sans]
            },
            colors: {
                brand: "#5865F2",
                gray: {
                    50: "#ECEDEE",
                    100: "#DCDDDE",
                    200: "#B9BBBE",
                    300: "#8E9297",
                    400: "#72767D",
                    500: "#5C6067",
                    550: "#4f545c",
                    600: "#464950",
                    700: "#36393F",
                    800: "#2F3136",
                    900: "#202225"
                }
            },
            scrollbar: ["rounded"],
        },
    },
    plugins: [
        tailwindScroll
    ],
};
