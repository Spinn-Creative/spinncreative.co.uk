/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      '2xl': '1400px',
      '3xl': '1920px'
    },
    container: {
      center: true,
      padding: {
        sm: '0.5%',
        md: '10%',
        lg: '15%',
        xl: '18%',
        '2xl': '20%',
        '3xl': '18%'
      }
    },
    colors: {
      white: '#FFFFFF',
      black: '#000000',
      'lead-black': '#333333'
    },
    // fontFamily: {
    //   sans: ['Inter, sans-serif']
    // },
    // fontSize: {
    //   sm: '0.8rem',
    //   base: '1.0rem',
    //   md: '3.15rem',
    //   lg: '5.50rem',
    //   xl: '1.0rem',
    //   '2xl': '2rem', // 1920px
    //   '3xl': '2.40rem' //QHD
    // },
    extend: {
    },
  },
  plugins: [],
};
