/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Azure Serenity Palette
        'azure': {
          50: '#F8FBFF',   // Gris Azulado
          100: '#B0E0E6',  // Azul Cielo Suave
          200: '#87CEEB',  // Celeste Principal
          300: '#6BB6FF',  // Azul Polvoso
          400: '#2E86AB',  // Azul Profundo
          500: '#1B4965',  // Azul Marino Elegante
        },
        'coral': {
          400: '#FF6B6B',  // Coral Complementario
        }
      }
    },
  },
  plugins: [],
};
