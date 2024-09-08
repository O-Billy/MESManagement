<template>
    <div
      :class="[
        'relative flex flex-col h-full w-full max-w-[25rem] md:max-w-[18rem] lg:max-w-[25rem] rounded-xl bg-sidebar-bg-color bg-clip-border p-4 text-gray-700 shadow-xl shadow-blue-gray-900/5 transition-transform duration-300 ease-in-out transform',
        {
          'translate-x-0': sidebarOpen,
          '-translate-x-full': !sidebarOpen,
        },
        'md:translate-x-0 md:block md:relative' 
      ]"
    >
      <!-- Sidebar header -->
      <div class="flex items-center gap-0.5 p-4 mb-0.5 
                  lg:ml-[-30px]
                  md:ml-[-30px]
                  mt-[-20px]">
        <img src="../assets/icon/sidebar/logo.png" alt="brand" class="w-12 h-12
                                                                      lg:w-10 h-10
                                                                      md:w-9 h-9" />
        <p class="block 
                   font-sidebar-logo-font 
                   sm:text-12px 
                   md:text-14px
                   lg:text-16px
                   lg:ml-[-10px]
                   md:ml-[-5px]
                   antialiased leading-snug tracking-normal">
          Management
        </p>



      </div>
  
      <hr class="my-2 border-blue-gray-50
                 sm:mt-[-5px]
                 md:mt-[-5px]
                 lg:mt-[-5px]
                 xl:mt-[5px]
                " />
  
      <!-- Sidebar Navigation -->
      <nav class="flex flex-col gap-0.1 p-0
                  font-management-font text-base font-normal text-blue-gray-700">
        
        <div class="relative flex items-center 
                    w-full
                    leading-tight transition-all 
                    rounded-none rounded-r-3xl 
                    text-gray-400 outline-none text-start group 
                    hover:bg-sidebar-hover-button-color hover:bg-opacity-90 hover:text-black 
                    focus:bg-sidebar-hover-button-color focus:bg-opacity-90 focus:text-black 
                    active:bg-sidebar-hover-button-color active:bg-opacity-90 active:text-black 
                    sm:ml-[-5px] sm:m-[5px]
                    md:ml-[-5px] md:m-[5px]
                    lg:ml-[-5px] lg:m-[5px]
                    xl:ml-[-5px] xl:m-[5px]
                    ">
          <img src="../assets/icon/sidebar/dashboard-icon.png" alt="brand" class="lg:w-5 lg:h-5 lg:ml-[2px]
                                                                                  sm:w-5 h-5 sm:ml-[2px]
                                                                                  md:h-5 h-5 md:ml-[2px]
                                                                                  z-10 group-hover:hidden" />
          <img src="../assets/icon/sidebar/dashboard-active-icon.png" alt="brand hover" class="lg:w-5 h-5 lg:ml-[2px]
                                                                                               sm:w-5 h-5 sm:ml-[-10px]
                                                                                               md:h-5 h-5 md:ml-[-10px]
                                                                                               z-10 hidden group-hover:block" />
          <p class="grid lg:ml-[8px] lg:text-12px
                    sm:ml-[6px] sm:text-12px
                    md:ml-[6px] md:text-12px 
                    place-items-center font-management-font font-normal text-base antialiased leading-relaxed">
            Dashboard
          </p>
        </div>

        
  
        <!-- More Menu Items... -->
  
      </nav>
  
      <hr class="my-2 border-blue-gray-50" />
  
      <!-- Logout Section -->
      <div class="logout mt-[4rem] bg-gradient-to-l bg-sidebar-logout-bg-color grid grid-cols-2 justify-center p-4 gap-4 rounded-lg shadow-md">
        <!-- Content... -->
      </div>
    </div>
  
    <!-- Sidebar toggle button for small screens -->
    <button @click="sidebarOpen = !sidebarOpen" class="md:hidden fixed bottom-4 right-4 bg-blue-500 text-white p-2 rounded-full z-50">
      Toggle Sidebar
    </button>
  </template>
  
  <script>
  export default {
    data() {
      return {
        sidebarOpen: false,
      };
    },
  };
  </script>
  
  <style scoped>
  
  </style>
  