/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#E63A27',   // Mona Construction Red
          hover: '#C92C1B',     // Darker Red
          navy: '#0C2271',      // Deep Navy Blue
          navyDark: '#08174A',
          dark: '#101828',      // Charcoal Dark
          darker: '#0B101B',
          lightBg: '#F8F9FA',   // Off-white light section bg
          cardBorder: '#E2E8F0',
          amber: '#F59E0B',
          emerald: '#10B981',
          blue: '#2563EB'
        },
        studio: {
          950: '#0B101B',
          900: '#101828',
          850: '#1A2333',
          800: '#232E42',
          700: '#334155',
          400: '#94A3B8',
          300: '#CBD5E1',
          200: '#E2E8F0',
          100: '#F1F5F9',
          50: '#F8FAFC'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Work Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace']
      },
      boxShadow: {
        'glow-primary': '0 0 25px -5px rgba(230, 58, 39, 0.35)',
        'glow-navy': '0 0 25px -5px rgba(12, 34, 113, 0.35)',
        'mona-card': '0 10px 30px -10px rgba(0, 0, 0, 0.08)',
        'mona-hover': '0 20px 40px -15px rgba(230, 58, 39, 0.2)'
      }
    },
  },
  plugins: [],
}
