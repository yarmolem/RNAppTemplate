/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        // Montserrat
        MontserratBlack: ['Montserrat-Black'],
        MontserratBold: ['Montserrat-Bold'],
        MontserratExtraBold: ['Montserrat-ExtraBold'],
        MontserratExtraLight: ['Montserrat-ExtraLight'],
        MontserratLight: ['Montserrat-Light'],
        MontserratMedium: ['Montserrat-Medium'],
        MontserratRegular: ['Montserrat-Regular'],
        MontserratSemiBold: ['Montserrat-SemiBold'],
        MontserratThin: ['Montserrat-Thin'],

        // Rubik
        RubikBlack: ['Rubik-Black'],
        RubikBold: ['Rubik-Bold'],
        RubikExtraBold: ['Rubik-ExtraBold'],
        RubikExtraLight: ['Rubik-ExtraLight'],
        RubikLight: ['Rubik-Light'],
        RubikMedium: ['Rubik-Medium'],
        RubikRegular: ['Rubik-Regular'],
        RubikSemiBold: ['Rubik-SemiBold'],
        RubikThin: ['Rubik-Thin'],
      },
    },
  },
  plugins: [],
};
