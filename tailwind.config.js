/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          900: '#0a0a0f',
          800: '#11111a',
          700: '#181826',
          600: '#222236',
          border: 'rgba(255, 255, 255, 0.08)',
        },
        electric: {
          violet: '#8B5CF6',
          cyan: '#06B6D4',
          purple: '#A855F7',
          pink: '#EC4899',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        mono: ['Fira Code', 'JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'gradient-electric': 'linear-gradient(135deg, #8B5CF6 0%, #06B6D4 100%)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'glass-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        glow: {
          '0%': { opacity: '0.4', filter: 'drop-shadow(0 0 15px rgba(139, 92, 246, 0.4))' },
          '100%': { opacity: '1', filter: 'drop-shadow(0 0 30px rgba(6, 182, 212, 0.8))' },
        },
      },
      boxShadow: {
        'neon-violet': '0 0 25px -5px rgba(139, 92, 246, 0.5)',
        'neon-cyan': '0 0 25px -5px rgba(6, 182, 212, 0.5)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
    },
  },
  plugins: [],
};
