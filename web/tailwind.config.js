const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {},
    colors: {
      //Background
      bckgd: '#0d1b2a',
      gray: '#1F2937',
      borderGray: '#616161',
      //Exotique
      orang: '#d97706',
      //Basic
      
      blueGrump:"#B8F2E6",
      white: '#ffffff',
      green: '#6a994e',
      red: '#d00000',
      grey: '#e5e5e5',
      pinksaleSoft: "#FD96A9",
      //Gradiente
      aero: '#05B2DC',
      polynesian: '#004385',
      cerulean: '#087CA7',
      prussian: '#033860',
      federal: '#031A6B',
      //Fear and Gread
      fear:'#f6465d',
      midFear:'#f9863d',
      midGread:'#a5ca59',
      gread: '#2ee39d'
    },
    animation: {
      scroll: 'scroll 20s linear infinite',
    },
  },

  plugins: [require('daisyui')],
};
