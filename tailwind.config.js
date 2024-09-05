module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
   darkMode: false, 
   theme: {
     extend: {
      colors: {
        'sidebar-bg-color': '#FBF7F4', 
        'sidebar-logout-bg-color': '#FCDEC6', 
      },
      fontFamily: {
        'sidebar-logo-font': ['Playwrite CU', 'sans-serif'], 
        'management-font': ['Poppins', 'sans-serif'], 
      },
     },
   },
   variants: {
     extend: {},
   },
   plugins: [],
 }
