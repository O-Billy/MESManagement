module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
   darkMode: false, 
   theme: {
     extend: {
      colors: {
        //#region Sidebar
        'sidebar-bg-color': '#FBF7F4', 
        'sidebar-logout-bg-color': '#FCDEC6', 
        'sidebar-logout-hover-bg-color': '#FBF7F4',
        'sidebar-hover-button-color': '#FCDEC6', 
        'sidebar-hover-button-border-color': '#10B981', 
        //#endregion
        //#region Narbar
        
        //#endregion
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
