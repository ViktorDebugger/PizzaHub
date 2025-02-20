/** @type {import('tailwindcss').Config} */
<<<<<<< HEAD
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        'header': "url('/src/assets/img/Frame.png')",
        'cook': "url('/src/assets/img/Rectangle 682.png')",
        'cook_footer': "url('/src/assets/img/Rectangle 685.png')",
        'phones': "url('/src/assets/img/Rectangle 684.png')",
      },
      colors: {
        'nav': '#D68240',
        'section': "#0A1316",
        'secondary': "#797B78",
        'board': "#121A1D",
        'comment': "#10181B",
        'active': "#EB9D20",
        'not_active': "#192327",
        'line': "#A19E9B",
        'form_input': "#B2BBBB",
        'form_field': "#182F31",
        'email_input': "#6A6A6A",
        'btn_hover': "#C56D29",
        'btn_phone': "#050505",
        'btn_phone_hover': "#BABABA",
=======
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        oswald: ['Oswald', 'sans-serif'],
        fugazOne: ['Fugaz One', 'sans-serif'],
        oregano: ['Oregano', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        quicksand: ['Quicksand', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
        fredoka: ['Fredoka', 'sans-serif'],
        epilogue: ['Epilogue', 'sans-serif'],
      },

      colors: {
        'siteRed': "#EE3A43",
        'siteRed2': "#EF294C",
        'siteRed3': "#F3274C",
        'siteBlack': "#212121",
        'siteYellow': "#FFC222",
        'siteYellow2': "#FFD43A",
        'siteYellow3': "#FFD40D",
        'siteGray': "#838383",
        'siteGray2': "#5C5C5B",
        'siteGray3': "#D9D9D9",
        'siteGray4': "#C6C6C6",
        'siteGreen': "#00A149",
        'beige': "#F4F1EA",


        'siteYellowHover': "#E1A405",
        'siteRedHover': "#D20529",
      },

      rotate: {
        '-30': '-30deg',
        '30': '30deg',
>>>>>>> 15af53f3 (Initial commit)
      },
    },
  },
  plugins: [],
<<<<<<< HEAD
}

=======
};
>>>>>>> 15af53f3 (Initial commit)
