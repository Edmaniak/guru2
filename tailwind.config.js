/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue'
  ],
  theme: {
    extend: {
      colors: {
        // Ayurveda-inspired color palette - soft, natural, healing tones
        primary: {
          50: '#fdf8f3',
          100: '#faf0e6',
          200: '#f4ddc4',
          300: '#edc89e',
          400: '#e6b077',
          500: '#d9945a', // Main warm terracotta
          600: '#c17a45',
          700: '#a06036',
          800: '#7f4d2e',
          900: '#633d26'
        },
        secondary: {
          50: '#f0f9f4',
          100: '#dcf2e4',
          200: '#bae5cd',
          300: '#8cd4ad',
          400: '#5dbd8a',
          500: '#3da670', // Soft sage green
          600: '#2d8a5a',
          700: '#256f49',
          800: '#20583b',
          900: '#1c4831'
        },
        accent: {
          50: '#fef5f1',
          100: '#fde9e0',
          200: '#fcd0c1',
          300: '#f9af99',
          400: '#f58563',
          500: '#ed6b3f', // Warm coral
          600: '#db4f25',
          700: '#b93f1d',
          800: '#96361d',
          900: '#7a311c'
        },
        earth: {
          50: '#f9f7f4',
          100: '#f1ede6',
          200: '#e3d9ca',
          300: '#d1c0a8',
          400: '#bfa586',
          500: '#a88b6b', // Warm earth brown
          600: '#8c7259',
          700: '#6f5c4a',
          800: '#594b3e',
          900: '#4a3f35'
        },
        lotus: {
          50: '#fdf4f8',
          100: '#fbe8f2',
          200: '#f8d2e6',
          300: '#f3b0d2',
          400: '#eb83b5',
          500: '#de5c98', // Soft lotus pink
          600: '#c73e7c',
          700: '#a72e63',
          800: '#8a2952',
          900: '#722646'
        },
        spiritual: {
          50: '#f4f5fb',
          100: '#e8ebf7',
          200: '#d5dbf1',
          300: '#b6c2e7',
          400: '#93a3da',
          500: '#7485cf', // Soft indigo/violet
          600: '#5f6ac0',
          700: '#5159a9',
          800: '#454a88',
          900: '#3b406d'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Cormorant Garamond', 'serif']
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'soft-lg': '0 10px 40px -10px rgba(0, 0, 0, 0.1), 0 2px 8px -2px rgba(0, 0, 0, 0.05)',
        'inner-soft': 'inset 0 2px 8px 0 rgba(0, 0, 0, 0.06)'
      },
      blur: {
        xs: '2px'
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.4s ease-out',
        'slide-down': 'slideDown 0.4s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'shimmer': 'shimmer 2s infinite'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' }
        }
      },
      backdropBlur: {
        xs: '2px'
      }
    }
  },
  plugins: []
}
