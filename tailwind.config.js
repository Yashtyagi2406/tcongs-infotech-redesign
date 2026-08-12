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
          dark: '#08090C',
          surface: '#0E1017',
          card: '#141722',
          border: 'rgba(255, 255, 255, 0.08)',
          crimson: '#FF1E56',
          crimsonHover: '#E51A4B',
          lime: '#D4FF00',
          limeHover: '#BCE600',
          muted: '#94A3B8',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Outfit', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'marquee': 'marquee 25s linear infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 15px rgba(255, 30, 86, 0.3)' },
          '100%': { boxShadow: '0 0 35px rgba(212, 255, 0, 0.5)' },
        }
      }
    },
  },
  plugins: [],
}
