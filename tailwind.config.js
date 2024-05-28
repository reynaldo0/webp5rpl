/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      height: {
        '128': '32rem',  // 512px
        '144': '36rem',  // 576px
        '160': '40rem',  // 640px
      }
    },
  },
  plugins: ['@tailwindcss/aspect-ratio'],
}

