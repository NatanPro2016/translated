/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'black': "#040711",
        'dark': "#394150",
        'primary': "#3662E3",
        'border': "#4D5562",
        'light': "#CDD5E0",
        'white': "#F9FAFB",
      },
      fontFamily: {
        'DM_sans': ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
