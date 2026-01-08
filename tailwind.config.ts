/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "nether-wallpaper":
          "linear-gradient(180deg, #F23200 2%, #C72C00 17%, #4A0E00 70%, #0D0D0D 100%)",
      },
    },
  },
  plugins: [],
};

module.exports = {
  plugins: [require("tailwind-scrollbar")],
};
