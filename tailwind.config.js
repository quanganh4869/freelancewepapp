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
          primary: '#2848D8',   // Cobalt Accent
          cobalt: '#2848D8',
          hover: '#1D3BB3',     // Dark Cobalt
          navy: '#0C1838',      // Deep Navy
          dark: '#080B12',      // Near Black
          ink: '#0B1020',       // Ink Black
          slate: '#151B28',     // Slate Dark
          lightBg: '#F5F6F3',   // Swiss Editorial Light Gray
          lightSurface: '#FFFFFF',
          lightBorder: '#E2E8F0',
          accentRed: '#E63A27', // Limited status red accent
          emerald: '#10B981',
          amber: '#F59E0B',
        },
        studio: {
          950: '#080B12',
          900: '#0B1020',
          850: '#111620',
          800: '#1A2130',
          700: '#242B38',
          600: '#3A4454',
          500: '#5F6673',
          400: '#8A919D',
          300: '#9AA3B2',
          200: '#CBD2DC',
          100: '#E6EBF2',
          50: '#F5F7FA'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Outfit', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Plus Jakarta Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace']
      },
      boxShadow: {
        'cobalt-glow': '0 0 20px -5px rgba(40, 72, 216, 0.25)',
        'subtle-card': '0 4px 20px rgba(0, 0, 0, 0.04)',
        'subtle-hover': '0 12px 30px rgba(0, 0, 0, 0.08)'
      }
    },
  },
  plugins: [],
}
