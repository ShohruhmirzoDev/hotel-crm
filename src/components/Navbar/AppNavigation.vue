<template>
   <aside id="sidebar-multi-level-sidebar"
      class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
      aria-label="Sidebar">

      <div class="h-full px-3 py-4 overflow-y-auto bg-white dark:bg-gray-800">
         <img src="https://hoteluz.vercel.app/img/logo.png" class="" />

         <RouterLink v-for="item in AppNavData" :to="item.url"
            class="flex text-[#696cff] items-center w-full p-2 mb-1 font-bold text-base  transition duration-75 rounded-lg group hover:bg-gray-200 dark:text-white dark:hover:bg-gray-800">
            <i class="text-xl bx ml-2" :class="item.icon"></i>
            <span class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">{{ item.name }}</span>
         </RouterLink>

         <!-- ================== nav Futer ========================= -->

         <div class="absolute bottom-0 mb-2">
            <button class="px-[16px] py-[1px] bg-[#696cff] hover:bg-[#4548f5] rounded-[5px]">
               <i class='bx bx-lock-open-alt  text-xl text-white'></i>
            </button>

            <button id="dropdownTopButton" data-dropdown-toggle="dropdownTop" data-dropdown-placement="top"
               class="me-3 ml-2 mb-4 md:mb-0 text-white relative w-[170px] bg-[#696cff] hover:bg-[#4548f5] font-bold rounded-[5px] text-sm px-12 py-1.5 text-center inline-flex items-center"
               type="button"><i class='bx bx-user-circle text-xl absolute left-0 ml-2' style='color:#ffffff'></i> Name<svg
                  class="w-2 absolute m-2 right-0  h-2 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                  fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                     d="M9 5 5 1 1 5" />
               </svg>
            </button>

            <!-- Dropdown menu -->
            <div id="dropdownTop"
               class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
               <ul class=" text-md text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDividerButton">
                  <li>
                     <a href="#"
                        class="block px-4 py-2 hover:bg-gray-200 rounded-sm dark:hover:bg-gray-600 dark:hover:text-white">Shaxsiy
                        sahifa</a>
                  </li>
                  <li>
                     <a href="#"
                        class="block px-4 py-2 hover:bg-gray-200 rounded-sm dark:hover:bg-gray-600 dark:hover:text-white">Parolni
                        o'zgartirish</a>
                  </li>
               </ul>
               <div class="py-4 ">
                  <RouterLink to="/login" 
                     class="block px-4 py-2  text-md text-gray-700 hover:bg-gray-200 rounded-sm dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Chiqish
                     <i class='bx bx-exit bx-rotate-180 ml-12 text-xl'></i>
                  </RouterLink>
               </div>
            </div>
         </div>


      </div>
   </aside>
</template>
<script setup>
import { AppNavData } from "../../data/AppNavURLData.js"
import { RouterLink } from 'vue-router'

</script>
