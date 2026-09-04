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
        dark: {
          bg: '#070B14',
          bgSecondary: '#0B1020',
          surface: '#111827',
          surfaceSecondary: '#151B2D',
          card: '#151B2D',
          border: 'rgba(148, 163, 184, 0.15)',
          hover: '#1a2337',
          muted: '#64748b',
          text: '#F8FAFC',
          subtext: '#94A3B8'
        },
        light: {
          bg: '#F8FAFC',
          bgSecondary: '#F1F5F9',
          surface: '#FFFFFF',
          surfaceSecondary: '#F8FAFC',
          card: '#FFFFFF',
          border: 'rgba(15, 23, 42, 0.1)',
          hover: '#E2E8F0',
          muted: '#94A3B8',
          text: '#0F172A',
          subtext: '#475569'
        },
        brand: {
          DEFAULT: '#4F8CFF',
          primary: '#4F8CFF',
          cyan: '#38D9FF',
          purple: '#8B5CF6',
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#4F8CFF',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#070B14',
          electric: '#38D9FF',
          accent: '#4F8CFF',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'pulse-subtle': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      }
    },
  },
  plugins: [],
}
