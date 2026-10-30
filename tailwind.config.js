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
        // BYLDR Studio Master Palette
        byldr: {
          bg: '#05060c',
          bg1: '#0a0b14',
          bg2: '#0f1120',
          panel: 'rgba(255,255,255,0.04)',
          panel2: 'rgba(255,255,255,0.06)',
          line: 'rgba(180,170,255,0.14)',
          line2: 'rgba(180,170,255,0.26)',
          text: '#f3f2fb',
          muted: '#a7a6c4',
          muted2: '#7c7ba0',
          cyan: '#00e7ff',
          magenta: '#ff00e7',
          violet: '#4f33bc',
          blue: '#2a6bff',
        },
        paper: {
          bg: '#05060c',
          surface: '#0a0b14',
          white: '#FFFFFF',
          dark: '#05060c',
          'dark-surface': '#0a0b14',
        },
        ink: {
          primary: '#f3f2fb',
          muted: '#a7a6c4',
          subtle: '#7c7ba0',
          border: 'rgba(180,170,255,0.14)',
          'border-dark': 'rgba(180,170,255,0.26)',
          terracotta: '#00e7ff',
          'terracotta-dark': '#ff00e7',
          dark: '#f3f2fb',
        },
        brand: {
          primary: '#f3f2fb',
          accent: '#2a6bff',
          background: '#05060c',
          surface: '#0a0b14',
          border: 'rgba(180,170,255,0.14)',
          muted: '#a7a6c4',
          subtle: '#7c7ba0',
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
        disp: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
