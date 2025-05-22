// frontend/tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html", // Escanea tu archivo HTML principal
      "./src/**/*.{js,ts,jsx,tsx}", // Escanea todos los archivos JS/TS/JSX/TSX en la carpeta src
    ],
    theme: {
      extend: {
        // Ejemplo: Si quieres añadir una fuente personalizada
        // fontFamily: {
        //   sans: ['Inter', 'sans-serif'], // 'Inter' sería el nombre de tu fuente
        // },
        // Ejemplo: Añadir un color personalizado
        // colors: {
        //   'brand-blue': '#1e40af',
        // }
      },
    },
    plugins: [
      require('@tailwindcss/forms'), // Habilita el plugin de formularios
    ],
  }