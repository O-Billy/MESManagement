<template>
<div>
    <div class="body-header flex justify-between items-center">
        <div class="ml-[23px] top-3 font-management-font">
            <p class="font-semibold text-base">Application</p>
            <p class="text-sm text-gray-400">Hi Admin, all applications loaded from SFTP: 10.209.25.135, Totals: 50, Load time: 30-08-2024 | 11:33 AM</p>
        </div>

        <div class="relative top-2 flex items-center w-[240px] p-3 leading-tight transition-all rounded-l-3xl text-black outline-none text-start bg-sidebar-hover-button-color shadow-lg">
            <span class="flex items-center justify-center w-8 h-8 bg-white rounded-full z-10">
                <img src="../assets/icon/sidebar/button-active-icon.png" alt="icon" class="w-4 h-4 z-10 rotate-180" />
            </span>
            <p class="grid ml-auto place-items-center font-management-font font-normal text-base antialiased leading-relaxed z-10">
                Administrator View
            </p>
        </div>
    </div>

    <div class="body-main h-full">
<<<<<<< HEAD
        <div class="m-[22px] h-[77vh] bg-white rounded-3xl custom-shadow">


=======
        <div class="m-[22px] h-[77vh] lg:h-[129vh] bg-white rounded-3xl custom-shadow">

            <!-- Tab Menu -->
>>>>>>> wfh
            <div class="border-b border-gray-200 dark:border-gray-700">
                <ul class="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
                    <li class="me-2">
                        <a href="#" class="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group">
                            <svg class="w-4 h-4 me-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
                            </svg>
                            Home
                        </a>
                    </li>
                    <li class="me-2">
                        <a href="#" class="inline-flex items-center justify-center p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500 group" aria-current="page">
                            <svg class="w-4 h-4 me-2 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                                <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z"/>
                            </svg>
                            Program
                        </a>
                    </li>
                    <li class="me-2">
                        <a href="#" class="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group">
                            <svg class="w-4 h-4 me-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M5 11.424V1a1 1 0 1 0-2 0v10.424a3.228 3.228 0 0 0 0 6.152V19a1 1 0 1 0 2 0v-1.424a3.228 3.228 0 0 0 0-6.152ZM19.25 14.5A3.243 3.243 0 0 0 17 11.424V1a1 1 0 0 0-2 0v10.424a3.227 3.227 0 0 0 0 6.152V19a1 1 0 1 0 2 0v-1.424a3.243 3.243 0 0 0 2.25-3.076Zm-6-9A3.243 3.243 0 0 0 11 2.424V1a1 1 0 0 0-2 0v1.424a3.228 3.228 0 0 0 0 6.152V19a1 1 0 1 0 2 0V8.576A3.243 3.243 0 0 0 13.25 5.5Z"/>
                            </svg>
                            Website | API
                        </a>
                    </li>
                    <li class="me-2">
                        <a href="#" class="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group">
                            <svg class="w-4 h-4 me-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                                <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"/>
                            </svg>
                            System Log
                        </a>
                    </li>
                    <li class="me-2">
                        <a href="#" class="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group">
                            <svg class="w-4 h-4 me-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                                <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"/>
                            </svg>
                            Other Tool
                        </a>
                    </li>
                </ul>
            </div>
<<<<<<< HEAD
=======
            <!-- Tab Menu End -->
            
            <!-- Action bar -->
            <div class="actionbar lg:m-[10px]">
                <div class="actionbar-title flex justify-between">
                    <div class="actionbar-left">
                        <p><span class="text-gray-400">Application</span> / List of program & website(83)</p>
                        <p class="text-11px text-gray-400">List of applications avaiable on MES system.</p>
                    </div>
                    <div class="actionbar-right">
 
                        <button
                        class="rounded-lg relative w-36 h-8 cursor-pointer flex items-center border border-green-500 bg-green-500 group hover:bg-green-500 active:bg-green-500 active:border-green-500"
                        >
                        <span
                            class="text-gray-200 font-semibold text-14px ml-10 transform group-hover:translate-x-20 transition-all duration-300"
                            >Add New Item</span
                        >
                        <span
                            class="absolute left-0 h-full w-10 rounded-lg bg-green-500 flex items-center justify-center transform group-hover:translate-x-0 group-hover:w-full transition-all duration-300"
                        >
                            <svg
                            class="svg w-8 text-white"
                            fill="none"
                            height="24"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            viewBox="0 0 24 24"
                            width="24"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <line x1="12" x2="12" y1="5" y2="19"></line>
                            <line x1="5" x2="19" y1="12" y2="12"></line>
                            </svg>
                        </span>
                        </button>


                    </div>

                </div>

                <div class="actionbar-search lg:mt-[10px] flex justify-between">
                    <div class="actionbar-search-left">
                        <form class="form relative ">
                            <button class="absolute left-2 -translate-y-1/2 top-1/2 p-1">
                                <svg
                                width="17"
                                height="16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                role="img"
                                aria-labelledby="search"
                                class="w-5 h-5 text-gray-700"
                                >
                                <path
                                    d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
                                    stroke="currentColor"
                                    stroke-width="1.333"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                ></path>
                                </svg>
                            </button>
                            <input
                                class="input rounded-md px-8 py-3 border-2 
                                        bg-[#DFE6EE]
                                        lg:text-12px
                                        lg:w-[111%] h-[6vh]
                                        border-transparent focus:outline-none focus:border-blue-500 
                                        placeholder-gray-400 transition-all duration-300 shadow-3xl"
                                placeholder="Search Applications ..."
                                type="text"
                            />
                        </form>
                    </div>
                    <div class="actionbar-search-right">
                        <form class="max-w-sm mx-auto">
                            <select id="countries" class=" lg:h-[6.6vh] lg:mt-[-13px] lg:text-12px bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option selected>--- Select Privilege ---</option>
                                <option value="US">Admin | IT</option>
                                <option value="CA">QA | PQE | IPQC</option>
                                <option value="FR">PD-SI | IE</option>
                                <option value="DE">PM | MPM | PC</option>
                            </select>
                        </form>
                    </div>

                </div>
            </div>
            <!-- Action bar end -->
>>>>>>> wfh

        </div>
    </div>

</div>

</template>