module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        emerald: {
          deep: '#4F140A',
          medium: '#4F140A',
          light: '#4F140A',
        },
        gold: {
          rich: '#CFAF5D',
          light: '#E4C77A',
          pale: '#F0DFA0',
          glow: 'rgba(207,175,93,0.25)',
        },
        cream: {
          ivory: '#F7F2E8',
          pearl: '#FAFAF8',
        },
        charcoal: '#232323',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'emerald-gradient': 'linear-gradient(135deg, #4F140A 0%, #4F140A 50%, #4F140A 100%)',
        'gold-gradient': 'linear-gradient(135deg, #CFAF5D 0%, #E4C77A 50%, #CFAF5D 100%)',
        'hero-gradient': 'linear-gradient(135deg, rgba(79,20,10,0.95) 0%, rgba(79,20,10,0.90) 50%, rgba(79,20,10,0.95) 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'pulse-gold': 'pulse-gold 3s ease-in-out infinite',
        'counter': 'counter 2s ease-out forwards',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.8s ease-out forwards',
        'slide-in-right': 'slideInRight 0.8s ease-out forwards',
        'shimmer': 'shimmer 2s infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-gold': {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-60px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(60px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      boxShadow: {
        'gold': '0 4px 24px rgba(207,175,93,0.3)',
        'gold-lg': '0 8px 48px rgba(207,175,93,0.4)',
        'emerald': '0 4px 24px rgba(79,20,10,0.4)',
        'glass': '0 8px 32px rgba(0,0,0,0.15)',
      },
    },
  },
  plugins: [],
};




