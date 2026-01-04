/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6fff0',
          100: '#b3ffd4',
          200: '#80ffb8',
          300: '#4dff9c',
          400: '#1aff80',
          500: '#0AE448',
          600: '#08c73e',
          700: '#06a934',
          800: '#048c2a',
          900: '#026e20',
        },
        gsap: {
          bg: '#0E100F',
          surface: '#171918',
          elevated: '#1E201F',
          border: '#2A2D2C',
          text: '#F3F4F1',
          muted: '#9CA3AF',
          accent: '#0AE448',
        },
        dark: {
          500: '#2A2D2C',
          600: '#1E201F',
          700: '#171918',
          800: '#121413',
          900: '#0E100F',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'slide-in-left': 'slideInLeft 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 3s infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(10, 228, 72, 0.3)' },
          '100%': { boxShadow: '0 0 20px rgba(10, 228, 72, 0.6)' },
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
