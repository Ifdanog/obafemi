/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink:   '#0a0a0a',
        ash:   '#111116',
        slate: '#18181f',
        ghost: '#22222d',
        silver: '#8888a0',
        mist:   '#b0b0c8',
        pearl:  '#e8e8f0',
        gold: {
          DEFAULT: '#c9a84c',
          light:   '#e8c97a',
          dim:     '#7a5f24',
          border:  'rgba(201,168,76,0.25)',
          glow:    'rgba(201,168,76,0.12)',
        },
        teal: {
          dim: 'rgba(26,95,106,0.15)',
        },
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'sans-serif'],
        body:    ['"Cormorant Garamond"', 'serif'],
        mono:    ['"DM Mono"', 'monospace'],
      },
      fontSize: {
        'display-hero': ['clamp(4.5rem, 12vw, 10rem)', { lineHeight: '0.9', letterSpacing: '0.02em' }],
        'display-lg':   ['clamp(3rem, 7vw, 6rem)',   { lineHeight: '0.95', letterSpacing: '0.03em' }],
        'display-md':   ['clamp(2rem, 4vw, 3.5rem)', { lineHeight: '1', letterSpacing: '0.03em' }],
      },
      borderRadius: {
        'card':    '12px',
        'card-lg': '20px',
      },
      backgroundImage: {
        'atmosphere': `
          radial-gradient(ellipse 80% 50% at 75% 20%, rgba(201,168,76,0.07) 0%, transparent 60%),
          radial-gradient(ellipse 60% 70% at 15% 80%, rgba(26,95,106,0.10) 0%, transparent 55%),
          linear-gradient(175deg, #0a0a0a 0%, #0f0f16 40%, #0a0a0e 100%)
        `,
        'gold-gradient': 'linear-gradient(135deg, #e8c97a 0%, #c9a84c 50%, #9a7030 100%)',
        'card-surface':  'linear-gradient(135deg, #18181f 0%, #22222d 100%)',
      },
      animation: {
        'fade-up':   'fadeUp 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards',
        'scroll':    'scrollBounce 2s ease-in-out infinite',
        'shimmer':   'shimmer 2.5s linear infinite',
        'glow':      'glow 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(28px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        scrollBounce: {
          '0%, 100%': { transform: 'translateY(0)', opacity: '0.7' },
          '50%':      { transform: 'translateY(7px)', opacity: '0.25' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(201,168,76,0.15)' },
          '50%':      { boxShadow: '0 0 50px rgba(201,168,76,0.35)' },
        },
      },
      transitionTimingFunction: {
        'cinematic': 'cubic-bezier(0.23, 1, 0.32, 1)',
      },
      boxShadow: {
        'gold-sm': '0 4px 20px rgba(201,168,76,0.15)',
        'gold-md': '0 8px 40px rgba(201,168,76,0.20)',
        'card':    '0 24px 60px rgba(0,0,0,0.5)',
        'card-hover': '0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(201,168,76,0.10)',
      },
    },
  },
  plugins: [],
};
