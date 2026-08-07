/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#1A1A1A',     // Lovable Warm Charcoal / Black Primary
          amber: '#D97706',       // Subtle Amber Accent
          hover: '#333330',       // Dark Gray Hover
          dark: '#121212',        // Lovable Dark Theme Deep Charcoal
          ink: '#1A1A1A',
          lightBg: '#FAF9F6',     // Lovable Light Theme Warm Off-White / Cream
          lightSurface: '#FFFFFF',
          lightBorder: '#E6E4DD',
          emerald: '#10B981',
        },
        studio: {
          950: '#121212',
          900: '#1A1A19',
          850: '#222220',
          800: '#2A2A28',
          700: '#444440',
          600: '#666663',
          500: '#888883',
          400: '#A1A19A',
          300: '#C8C5B9',
          200: '#E6E4DD',
          100: '#F2F0E9',
          50: '#FAF9F6'
        }
      },
      fontFamily: {
        sans: ['Inter', 'Be Vietnam Pro', 'system-ui', 'sans-serif'],
        display: ['Inter', 'Be Vietnam Pro', 'system-ui', 'sans-serif'],
        mono: ['Inter', 'Be Vietnam Pro', 'system-ui', 'sans-serif']
      }
    },
  },
  plugins: [],
}
