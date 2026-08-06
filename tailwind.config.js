/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        studio: {
          950: '#07090E',
          900: '#0C1017',
          850: '#121722',
          800: '#1A2130',
          700: '#263147',
          600: '#384869',
          500: '#4F638C',
          400: '#758BB7',
          300: '#A4B4D6',
          200: '#CBD5E1',
          100: '#E2E8F0',
          50: '#F8FAFC',
        },
        brand: {
          primary: '#6366F1', // Indigo
          hover: '#4F46E5',
          emerald: '#10B981', // Success
          amber: '#F59E0B',   // Warning
          cyan: '#06B6D4',    // Cyan accent
          violet: '#8B5CF6'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace']
      },
      boxShadow: {
        'glow-primary': '0 0 25px -5px rgba(99, 102, 241, 0.3)',
        'glow-emerald': '0 0 25px -5px rgba(16, 185, 129, 0.3)',
        'studio-card': '0 10px 30px -10px rgba(0, 0, 0, 0.5)',
      }
    },
  },
  plugins: [],
}
