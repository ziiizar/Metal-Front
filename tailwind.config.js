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
  
      },
      fontSize: {
        8: '8px',
        12: '12px'
       
      },
      lineHeight: {
        'chiquita': '10px',
        
      }
      ,
      colors: {
        'fondo': '#E0E0E5',
      },



    },

   

    
    
  },
  plugins: [],
}

