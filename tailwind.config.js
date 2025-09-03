/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: 'hsl(230 15% 95%)',
        accent: 'hsl(180 70% 45%)',
        primary: 'hsl(240 80% 50%)',
        surface: 'hsl(0 0% 100%)',
        'text-primary': 'hsl(230 15% 10%)',
        'text-secondary': 'hsl(230 15% 40%)',
        dark: {
          bg: 'hsl(230 15% 8%)',
          surface: 'hsl(230 15% 12%)',
          'surface-light': 'hsl(230 15% 18%)',
          text: 'hsl(0 0% 95%)',
          'text-secondary': 'hsl(230 15% 70%)',
        },
        purple: {
          500: 'hsl(270 80% 60%)',
          600: 'hsl(270 80% 50%)',
          700: 'hsl(270 80% 40%)',
        },
      },
      borderRadius: {
        lg: '16px',
        md: '10px',
        sm: '6px',
      },
      spacing: {
        sm: '8px',
        md: '12px',
        lg: '20px',
        xl: '32px',
      },
      boxShadow: {
        card: '0 8px 24px hsla(230,15%,10%,0.12)',
        focus: '0 0 0 3px hsla(180,70%,45%,0.6)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 250ms cubic-bezier(0.22,1,0.36,1)',
        'slide-up': 'slideUp 250ms cubic-bezier(0.22,1,0.36,1)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
