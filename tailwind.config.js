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
        // Signature "Gemstone" identity: Sapphire (brand/blue) + Viridian Teal (cyan) + Molten Copper (purple)
        // Overriding Tailwind's built-in blue/cyan/purple ramps means every existing `text-cyan-400`,
        // `border-purple-500/30`, `from-brand-600` utility across the app inherits the new palette.
        brand: {
          DEFAULT: '#3660DE',
          primary: '#3660DE',
          cyan: '#12B3A6',
          purple: '#C2622E',
          50: '#EEF4FF',
          100: '#D9E6FF',
          200: '#B3CCFF',
          300: '#82A9FF',
          400: '#5480F2',
          500: '#3660DE',
          600: '#2848B8',
          700: '#223A93',
          800: '#1F3175',
          900: '#1C2B5E',
          950: '#10173A',
          electric: '#35C9BC',
          accent: '#3660DE',
        },
        // Sapphire Ink — overrides Tailwind's `blue`
        blue: {
          50: '#EEF4FF',
          100: '#D9E6FF',
          200: '#B3CCFF',
          300: '#82A9FF',
          400: '#5480F2',
          500: '#3660DE',
          600: '#2848B8',
          700: '#223A93',
          800: '#1F3175',
          900: '#1C2B5E',
          950: '#10173A',
        },
        // Viridian Teal — overrides Tailwind's `cyan`
        cyan: {
          50: '#EDFCFB',
          100: '#D2F7F3',
          200: '#A6EEE7',
          300: '#6EDFD5',
          400: '#35C9BC',
          500: '#12B3A6',
          600: '#0B8F86',
          700: '#0B7269',
          800: '#0D5B55',
          900: '#0F4A46',
          950: '#052B29',
        },
        // Molten Copper — overrides Tailwind's `purple`
        purple: {
          50: '#FDF4EE',
          100: '#FBE6D6',
          200: '#F5C9A6',
          300: '#EDA871',
          400: '#E0824A',
          500: '#C2622E',
          600: '#A14D22',
          700: '#813E1F',
          800: '#68331F',
          900: '#562C1C',
          950: '#2E150C',
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
