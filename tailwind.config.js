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
                    DEFAULT: "#212121",
                    50: "#343434",
                    100: "#333333",
                    200: "#303030",
                    300: "#2E2E2E",
                    400: "#2B2B2B",
                    500: "#292929",
                    600: "#262626",
                    700: "#242424",
                    800: "#212121",
                    900: "#121212",
                    950: "#0A0A0A",
                },
                light: {
                    DEFAULT: "#FFFFFF",
                    50: "#FFFFFF",
                    100: "#FBFBFB",
                    200: "#F4F4F4",
                    300: "#ECECEC",
                    400: "#E4E4E4",
                    500: "#DDDDDD",
                    600: "#D5D5D5",
                    700: "#CDCDCD",
                    800: "#C6C6C6",
                    900: "#BEBEBE",
                    950: "#BABABA",
                },
                button: {
                    primary: "#000000",
                },
            },

            backgroundColor: {
                brand: "#4fd500",
                primary: {
                    DEFAULT: "#FAFAFA",
                    50: "#FDFDFD",
                    100: "#FAFAFA",
                    200: "#F0F0F0",
                    300: "#E6E6E6",
                    400: "#DBDBDB",
                    500: "#D1D1D1",
                    600: "#C7C7C7",
                    700: "#BDBDBD",
                    800: "#B3B3B3",
                    900: "#A8A8A8",
                    950: "#A3A3A3",
                },
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
                dark: "#000000",
                button: {
                    primary: "#4fd500",
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
                primary: "7px",
            },
        },
    },
    plugins: [],
};
