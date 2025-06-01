/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        woodland: {
          primary: '#a5b79b',
          dark: '#7a9173',
          light: '#c5d1bd',
          50: '#f5f7f4',
          100: '#e8ede5',
          200: '#d1dccc',
          300: '#b0c4a7',
          400: '#a5b79b',
          500: '#7a9173',
          600: '#6b7f65',
          700: '#586656',
          800: '#4a5548',
          900: '#3e453c',
        }
      },
      fontFamily: {
        'inter': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
        'slide-up': 'slideUp 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
} 