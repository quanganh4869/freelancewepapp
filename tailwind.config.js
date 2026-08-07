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
          primary: '#24221E',     // Lovable Primary Charcoal
          background: '#F7F5EE',  // Lovable Light Background Warm Paper
          paper: '#FCFAF6',       // Lovable Card Off-White
          border: '#E4DFD3',      // Lovable Subtle Border
          accent: '#D05021',      // Lovable Warm Terracotta Rust Accent
          muted: '#78736A',       // Lovable Muted Text Gray
          hover: '#3D3A34',
        },
        studio: {
          950: '#1A1916',
          900: '#24221E',
          850: '#2E2B26',
          800: '#3D3A34',
          700: '#545048',
          600: '#78736A',
          500: '#999388',
          400: '#B8B2A6',
          300: '#D4CEBF',
          200: '#E4DFD3',
          100: '#EFECE5',
          50: '#F7F5EE'
        }
      },
      fontFamily: {
        sans: ['"Be Vietnam Pro"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Bricolage Grotesque"', '"Be Vietnam Pro"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace']
      },
      borderRadius: {
        'xl': '0.5rem',
        '2xl': '0.75rem',
        '3xl': '1rem'
      }
    },
  },
  plugins: [],
}
