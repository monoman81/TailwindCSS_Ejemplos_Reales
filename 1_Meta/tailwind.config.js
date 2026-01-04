/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        brown: {
          50: '#fdf8f6',
          100: '#f2e8e5',
          200: '#eaddd7',
          300: '#e0cec7',
          400: '#d2bab0',
          500: '#bfa094',
          600: '#a18072',
          700: '#977669',
          800: '#846358',
          900: '#43302b',
        },
        'meta': {
          light: '#3d7cce',
          DEFAULT: '#1d65c1',
        },
        'secondary': {
          DEFAULT: '#344854'
        },
      },
      maxWidth: {
          '8xl': '94rem',
      },
    },
    fontFamily: {
      'heading': ['Montserrat', 'sans-serif'],
      'text': ['Roboto', 'sans-serif'],
    }
  },
  plugins: [],
}

