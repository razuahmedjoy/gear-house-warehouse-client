module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {
      colors :{
        "primary": "#6366f1"
      }
    },
    
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
  
}
