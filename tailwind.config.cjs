/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      'main-green': '#69E7B7',
      'main-blue': '#518BF8',
      'main-yellow': '#FFC62A',
      black: '#000000',
      gray: '#898989',
      'sub-green': '#EAFFF7',
      'sub-gray': '#BBBBBB',
      'main-white': '#F8F9FD',
    },
    fontSize: {
      xxs: '0.6rem',
      xs: '0.75rem',
      sm: '0.875rem',
      bamainse: '1rem',
      lg: '1.1rem',
      xl: '1.2rem',
    },
    extend: {
      boxShadow: {
        '-basic': '0px 0px 10px rgba(0, 0, 0, 0.2);',
      },
    },
  },
  plugins: [],
};
