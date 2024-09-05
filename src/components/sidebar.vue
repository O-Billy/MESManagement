<template>
    <div
    class="relative flex h-full w-full max-w-[15rem] flex-col rounded-xl bg-sidebar-bg-color bg-clip-border p-4 text-gray-700 shadow-xl shadow-blue-gray-900/5">
        <div class="flex items-center gap-0.1 p-4 mb-0.5 ml-[-20px] mt-[-20px]">
            <img src="../assets/icon/sidebar/logo.png" alt="brand" class="w-12 h-12" />
            <h5 class="block font-sidebar-logo-font text-xl antialiased leading-snug tracking-normal text-blue-gray-900">
            Management
            </h5>
        </div>
        <hr class="my-2 border-blue-gray-50" />
        <nav class="flex min-w-[240px] flex-col gap-0.1 p-2 ml-[-16px] font-management-font text-base font-normal text-blue-gray-700">
            
            <div class="relative block w-full">

            <div class="overflow-hidden">
                <div class="block w-full py-1 font-sans text-sm antialiased font-light leading-normal text-gray-700">
                <nav class="flex min-w-[240px] flex-col gap-1 p-0 font-sans text-base font-normal text-blue-gray-700">

                    <div role="button"
                    class="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
                        <img src="../assets/icon/sidebar/dashboard-icon.png" alt="brand" class="w-6 h-6" />
                        <p class="grid ml-[10px] place-items-center font-management-font font-normal text-base antialiased leading-relaxed text-blue-gray-900">
                            Dashboard
                        </p>
                    </div>

                    <div role="button"
                    class="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
                        <img src="../assets/icon/sidebar/application-icon.png" alt="brand" class="w-6 h-6" />
                        <p class="grid ml-[10px] place-items-center font-management-font font-normal text-base antialiased leading-relaxed text-blue-gray-900">
                            Application
                        </p>
                    </div>

                    <div role="button"
                    class="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
                        <img src="../assets/icon/sidebar/database-icon.png" alt="brand" class="w-6 h-6" />
                        <p class="grid ml-[10px] place-items-center font-management-font font-normal text-base antialiased leading-relaxed text-blue-gray-900">
                            Database
                        </p>
                    </div>

                    <div role="button"
                    class="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
                        <img src="../assets/icon/sidebar/cloud-icon.png" alt="brand" class="w-6 h-6" />
                        <p class="grid ml-[10px] place-items-center font-management-font font-normal text-base antialiased leading-relaxed text-blue-gray-900">
                            Cloud
                        </p>
                    </div>

                    <div role="button"
                    class="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
                        <img src="../assets/icon/sidebar/report-icon.png" alt="brand" class="w-6 h-6" />
                        <p class="grid ml-[10px] place-items-center font-management-font font-normal text-base antialiased leading-relaxed text-blue-gray-900">
                            Report
                        </p>
                    </div>

                    <div role="button"
                    class="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
                        <img src="../assets/icon/sidebar/setting-icon.png" alt="brand" class="w-6 h-6" />
                        <p class="grid ml-[10px] place-items-center font-management-font font-normal text-base antialiased leading-relaxed text-blue-gray-900">
                            Setting
                        </p>
                    </div>

                    <div role="button"
                    class="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
                        <img src="../assets/icon/sidebar/conversation-icon.png" alt="brand" class="w-6 h-6" />
                        <p class="grid ml-[10px] place-items-center font-management-font font-normal text-base antialiased leading-relaxed text-blue-gray-900">
                            Conversation
                        </p>
                    </div>

                    <div role="button"
                    class="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
                        <img src="../assets/icon/sidebar/help-icon.png" alt="brand" class="w-6 h-6" />
                        <p class="grid ml-[10px] place-items-center font-management-font font-normal text-base antialiased leading-relaxed text-blue-gray-900">
                            Help ?
                        </p>
                    </div>
        
                </nav>
                </div>
            </div>
            </div>
    
            <hr class="my-2 border-blue-gray-50" />
            
            <div class="logout w-55 h-100">
                <div class="mt-[5rem] bg-gradient-to-l bg-sidebar-logout-bg-color grid grid-col-2 justify-center p-4 gap-4 rounded-lg shadow-md">
                    <div class="col-span-2 text-lg font-bold capitalize rounded-md text-center">
                        <img src="../assets/img/sidebar/missile.png" class=" mt-[-7.5rem]" alt="">
                        <p class="font-management-font text-sm font-normal normal-case ml-2">Do you want to logout ?</p>
                        <button
                        class="mt-2 font-management-font flex justify-center gap-2 items-center mx-auto shadow-xl text-lg bg-white-400 backdrop-blur-md font-normal isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-emerald-500 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
                        type="submit"
                        >
                        Logout
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 19"
                            class="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45"
                        >
                            <path
                            class="fill-gray-800 group-hover:fill-gray-800"
                            d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                            ></path>
                        </svg>
                        </button>


                    </div>
                </div>
            </div>

        </nav>
    </div>

</template>