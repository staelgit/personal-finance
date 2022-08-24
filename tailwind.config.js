/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ['./src/**/*.{js,jsx,ts,tsx}'],
   theme: {
      extend: {
         colors: {
            primary: {
               light: '#bae6fd', // sky-200
               DEFAULT: '#38bdf8', // sky-400
               dark: '#0284c7' // sky-600
            },
            secondary: {
               ultralight: '#f3f4f6', // gray-100
               light: '#e5e7eb', // gray-200
               DEFAULT: '#9ca3af', // gray-400
               dark: '#4b5563' // gray-600
            }
         }
      }
   },
   plugins: []
};
