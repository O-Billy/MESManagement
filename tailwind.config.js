module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
   darkMode: false, 
   mode: 'jit',
   content: [
    "./src/**/*.{html,js,vue}", 
  ],
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

      },
      fontFamily: {
        'sidebar-logo-font': ['Playwrite CU', 'sans-serif'], 
        'management-font': ['Poppins', 'sans-serif'], 
      },

      fontSize: {
        '10px': '10px',
        '11px': '11px',
        '12px': '12px',
        '14px': '14px',
        '18px': '18px',
        '20px': '20px',
        '22px': '22px',
      }
      
     },
   },
   variants: {
    extend: {
      fontSize: ['responsive'],
    },
  },
   plugins: [],
 }
