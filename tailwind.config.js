/** @type {import('tailwindcss'). Config} */
export default {
  content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx, tsx}",
  ],
  theme: {
  extend: {
    colors:{
      primary: "#FBBF24",
      secondary: "#ed8900",
    },
    container:  {
      center: true,
      padding: {
        default: "1rem",
        sm: "3rem",
      }
    }
  },
  },
  plugins: [],
  }