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
          primary: '#F97316',   // DV60 Vibrant Flame Orange Accent
          orange: '#F97316',
          hover: '#EA580C',     // Dark Flame Orange
          navy: '#0F172A',      // Deep Corporate Navy
          dark: '#090D16',      // Dark Obsidian
          ink: '#0F172A',       // Ink Black
          slate: '#1E293B',     // Slate Dark
          lightBg: '#F8FAFC',   // Clean Soft White
          lightSurface: '#FFFFFF',
          lightBorder: '#E2E8F0',
          accentRed: '#EF4444',
          emerald: '#10B981',
          amber: '#F59E0B',
        },
        studio: {
          950: '#090D16',
          900: '#0F172A',
          850: '#151D2A',
          800: '#1E293B',
          700: '#334155',
          600: '#475569',
          500: '#64748B',
          400: '#94A3B8',
          300: '#CBD5E1',
          200: '#E2E8F0',
          100: '#F1F5F9',
          50: '#F8FAFC'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Outfit', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Plus Jakarta Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace']
      },
      boxShadow: {
        'orange-glow': '0 0 20px -5px rgba(249, 115, 22, 0.35)',
        'subtle-card': '0 4px 20px rgba(0, 0, 0, 0.04)',
        'subtle-hover': '0 12px 30px rgba(249, 115, 22, 0.15)'
      }
    },
  },
  plugins: [],
}
