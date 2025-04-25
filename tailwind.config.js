/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        'anonymous-pro': ['"Anonymous Pro"', 'monospace']
      }
    }
  },
  plugins: []
}
