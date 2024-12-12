/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        jobDetailBanner : "url('/src/assets/jb-detail-page.webp')"
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

