/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
         'custom-100px-1fr': ' 1fr 100px', 
        },
    },
  },
  plugins: [
    daisyui,
  ],
}
