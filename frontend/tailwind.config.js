/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'iphone14': '430px', // Custom breakpoint for iPhone 14 Pro Max
      },
    },
  },
  plugins: [],
}