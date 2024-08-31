/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",  // This line tells Tailwind to scan all files in the src folder with these extensions
  ],
  theme: {
    extend: {},  // This is where you can customize your theme
  },
  plugins: [],  // This is where you can add Tailwind CSS plugins
}
