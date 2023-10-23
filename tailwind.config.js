/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridAutoColumns: {
        'card': '(auto-fill, minmax(300px, 1fr)',

      },
      gridTemplateColumns: {
        'card': 'repeat(auto-fill, minmax(300px, 1fr))',

      },
      gridAutoRows: {
        'card': '(auto-fill, minmax(100px, 300px)',
  
      },
      gridTemplateRows: {
        'card': 'repeat(auto-fill, minmax(100px, 300px))',
  
      }
    },

    
    
  },
  plugins: [],
}

