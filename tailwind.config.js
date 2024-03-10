/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ['"Open Sans"', "sans-serif"],
            },
            colors: {
                gray_header: "#F2F2F2",
                blue_balanz: "#0D2055",
                sky_blue_balanz: "#00A3E4",
                gray_footer: "#DADADA",
                gray_letter_footer: "#73757A",
                gray_selector: "#D9D9D9",
                messages: "#00A3E414",
            },
        },
    },
    plugins: [],
};
