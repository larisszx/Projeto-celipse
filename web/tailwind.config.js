/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        celipse: {
          dark: '#08090B',
          surface: '#121417',
          card: '#181A1F',
          border: '#272A30',
          silver: '#C5C8CE',
          gold: '#D4AF37',
          cyan: '#00E5FF',
          blue: '#1A56DB',
          accent: '#22D3EE'
        }
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
      backgroundImage: {
        'radial-glow': 'radial-gradient(circle at 50% 50%, rgba(0, 229, 255, 0.15) 0%, transparent 70%)',
        'silver-gradient': 'linear-gradient(135deg, #F3F4F6 0%, #9CA3AF 50%, #4B5563 100%)',
        'gold-gradient': 'linear-gradient(135deg, #FDE68A 0%, #D4AF37 50%, #78350F 100%)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'led-glow': 'ledGlow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        ledGlow: {
          '0%': { boxShadow: '0 0 5px #00E5FF, 0 0 15px #00E5FF' },
          '100%': { boxShadow: '0 0 15px #00E5FF, 0 0 30px #00E5FF' },
        }
      }
    },
  },
  plugins: [],
}
