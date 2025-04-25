/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        'anonymous-pro': ['"Anonymous Pro"', 'monospace'],
      },
    },
  },
  plugins: [],
};
