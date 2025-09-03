import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            colors: {
                "link-highlight": "#997255",
                link: "#557c99",
                "off-black": "#161616",
                "dark-grey": "#4A4A4A",
                "light-grey": "#A6A6A6"
            },
            height: {
                18: "4.5rem",
            },
            spacing: {
                18: "4.5rem",
            },
        },
        fontFamily: {
            sans: ["Lato", ...defaultTheme.fontFamily.sans],
            mono: ["Courier New", ...defaultTheme.fontFamily.mono],
        }
    },
    plugins: [],
};
