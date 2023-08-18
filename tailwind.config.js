/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          'default': "#076AE0",
          'hover': "#0073FD",
          'focus': "#005AC5"
        },
        'selection-white': "#FCFCFC"
      },
      animation: {
        'slideDownAndFade': 'slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        'slideUpAndFade': 'slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        'text-reveal': 'slide-reveal 3s ease-in-out',
        'shape-reveal': 'slide-reveal 2s ease-in-out',
        'button-reveal': 'opacity-reveal 4s ease-in-out',
        'logo-reveal': 'opacity-reveal 3s ease-in-out',
        'overlayShow': 'overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        'overlayHide': 'overlayHide 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        'contentShow': 'contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        'contentHide': 'contentHide 250ms cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        'slideDownAndFade': {
          from: { opacity: 1, transform: 'translateY(0px)' },
          to: { opacity: 0, transform: 'translateY(-2px)' },
        },
        'slideUpAndFade': {
          from: { opacity: 0, transform: 'translateY(2px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        'slide-reveal': {
          '0%': {
            transform: 'translateX(-30%)',
            opacity: '0%'
          },
          '30%': {
            transform: 'translateX(-30%)',
            opacity: '0%'
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '100%'
          }
        },
        'opacity-reveal': {
          '0%': {
            opacity: '0%'
          },
          '80%': {
            opacity: '0%'
          },
          '100%': {
            opacity: '100%'
          }
        },
        'overlayShow': {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        'overlayHide': {
          from: { opacity: 1 },
          to: { opacity: 0 },
        },
        'contentShow': {
          from: { opacity: 0, transform: 'translate(-50%, -48%) scale(0.96)' },
          to: { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
        },
        'contentHide': {
          from: { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
          to: { opacity: 0, transform: 'translate(-50%, -52%) scale(0.96)' },
        },
      },
    },
  },
  plugins: [],
}

