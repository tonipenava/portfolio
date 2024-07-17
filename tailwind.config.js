/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        josefin: ['Josefin Sans', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        dmSans: ['DM Sans', 'sans-serif'],
      },
      colors: {
        plava: '#42446E',
        siva: '#666666',
        bijela: '#f2f3f4',
        crna: '#000012',
        dark: {
          plava: '#1e2139',
          siva: '#3a3a3a',
          bijela: '#191919',
          crna: '#1a1a1a',
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};
