<template>
     <nav class=" p-2  w-full h-auto  rounded-[5px] mb-8 m-1  bg-white  shadow-md">
                    		<div class="flex justify-between items-center flex-wrap">
                    			<p class="text-[#9c9999] ml-1">Tashkilotlar haqida malumotlar</p>
                    			<div class="md:my-3 sm:my-3 xl:my-0 lg:my-0">
        				
                    				<button class="bg-[#696cff] py-[5px] px-[20px] text-md  m-1 text-white rounded-[5px]">
                    					Tashkilot  Qo'shish
                    				</button>
                    			</div>
                    		</div>
            		
                    </nav>
                    <section class="w-full bg-white text-[#ada8a8] rounded-md p-5">
                        <div class="flex justify-between items-center mb-5">
                            <select class="h-[26px] border-[#c9c2c2] rounded-md">
                                <option value="10">10</option>
                                <option value="25">25</option>
                                <option value="50">50</option>
                                <option value="75">75</option>
                                <option value="100">100</option>
                            </select>
                            <p>
                                <label for="">Search:</label>
                                <input type="search" class="w-[157px] h-[26px] border-[#ada8a8] rounded-sm ml-2">
                            </p>
                        </div>
                         <div class="flex justify-between  items-center text-md text-[#566a7f] bg-[#c5eaf3] p-2 px-4">
                                <p class="font-semibold w-52">Nom</p>
                                <p class="w-16">
                                    Direktor
                                </p>
                                <p class="w-28 ">
                                    Telefon
                                </p>
                                <div class="mr-28">
                                    O'zgartirish
                                </div>
                            </div>

                             <div class="flex justify-between  items-center text-md text-[#8592a3] hover:bg-gray-100 p-2 px-4 rounded-md">
                                <p class="w-38">
                                    Namangan viloyati shust tumani BM
                                </p>
                                <p class="w-32">
                                    Muhammad Ali
                                </p>
                                <p class="w-32 ">
                                    +99 988 45 54
                                </p>
                                <div class="">
                                    <button class="bg-[#696cff] py-[4px] px-[11px] text-[0.75rem] m-1 text-white rounded-[5px]" data-modal-target="popup-modal" data-modal-toggle="popup-modal"><i class='bx bx-trash'></i> O'chirish</button>
                                    <button class="bg-[#696cff] py-[4px] px-[11px] text-[0.75rem] m-1 text-white rounded-[5px]"><i class='bx bxs-edit-alt'></i> O'zgartirish</button>
                                    <button class="bg-[#696cff] py-[4px] px-[11px] text-[0.75rem] m-1 text-white rounded-[5px]"><i class='bx bxs-bullseye'></i> Ko'rish</button>
                                </div>
                            </div>
                            <hr>

                            <div class="mt-7 flex items-center absolute right-0 mr-7">
                                <p class="hover:text-gray-500">Previous</p>
                                <button class="bg-[#696cff] py-[5px] px-[15px] text-md  mx-2 text-white rounded-[5px]">
                        			1
                        		</button>
                                <p class="hover:text-gray-500">Next</p>
                            </div>
                    </section>









                    <!-- =========================== modal ============================================ -->
            <div id="popup-modal" tabindex="-1" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div class="relative p-4 w-full max-w-md max-h-full">
                    <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <button type="button" class="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="popup-modal">
                            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                            </svg>
                            <span class="sr-only">Close modal</span>
                        </button>
                        <div class="p-4 md:p-5 text-center">
                            <svg class="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                            </svg>
                            <h3 class="mb-5 text-xl font-normal text-gray-500 dark:text-gray-400"> Tashkilotni o'chirish</h3>
                            <button data-modal-hide="popup-modal" type="button" class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center me-2">
                                O'chirish
                            </button>
                            <button data-modal-hide="popup-modal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Bekor Qilish</button>
                        </div>
                    </div>
                </div>
            </div>
        <!-- =========================== / modal ============================================ -->
</template>
<script>

</script>
<style>
    
</style>