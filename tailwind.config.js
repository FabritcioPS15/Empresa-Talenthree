/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#5403d8',
          100: '#5403d8',
          200: '#5403d8',
          300: '#5403d8',
          400: '#5403d8',
          500: '#5403d8',
          600: '#5403d8',
          700: '#5403d8',
          800: '#5403d8',
          900: '#5403d8',
          950: '#5403d8',
        },
        secondary: {
          50: '#5403d8',
          100: '#5403d8',
          200: '#5403d8',
          300: '#5403d8',
          400: '#5403d8',
          500: '#5403d8',
          600: '#5403d8',
          700: '#5403d8',
          800: '#5403d8',
          900: '#5403d8',
          950: '#5403d8',
        },
      },
      fontFamily: {
        sans: [
          '"Noto Sans"',
          'Inter',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif'
        ]
      },
      boxShadow: {
        'soft': '0 2px 15px 0 rgba(0, 0, 0, 0.05)',
        'soft-lg': '0 5px 25px 0 rgba(0, 0, 0, 0.1)'
      },
      cursor: {
        pencil: "url('/src/assets/cursors/pencil-cursor.png'), auto",
      },
    }
  },
  plugins: [],
}
