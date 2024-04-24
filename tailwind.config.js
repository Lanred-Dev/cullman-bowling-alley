/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js,svelte,ts}"],
    theme: {
        fontFamily: {
            balooBhaijaan2: ["Baloo Bhaijaan 2", "sans-serif"],
        },

        extend: {
            colors: {
                primary: {
                    DEFAULT: "#000000",
                    50: "#2E2E2E",
                    100: "#2B2B2B",
                    200: "#262626",
                    300: "#212121",
                    400: "#1C1C1C",
                    500: "#171717",
                    600: "#121212",
                    700: "#0D0D0D",
                    800: "#080808",
                    900: "#030303",
                    950: "#000000",
                },
                button: {
                    primary: "#000000",
                },
            },

            backgroundColor: {
                primary: "#fafafa",
                secondary: {
                    DEFAULT: "#212121",
                    50: "#474747",
                    100: "#454545",
                    200: "#404040",
                    300: "#3B3B3B",
                    400: "#353535",
                    500: "#303030",
                    600: "#2B2B2B",
                    700: "#262626",
                    800: "#212121",
                    900: "#191919",
                    950: "#161616",
                },
                button: {
                    primary: "#ff4747",
                    secondary: "#fff837",
                },
            },

            borderColor: {
                primary: "#212121",
            },

            borderWidth: {
                primary: "2px",
            },

            borderRadius: {
                primary: "10px",
                hover: "25px",
            },

            transitionTimingFunction: {
                cubic: "cubic-bezier(0.65, 0, 0.35, 1)",
            },
        },
    },
    plugins: [],
};
