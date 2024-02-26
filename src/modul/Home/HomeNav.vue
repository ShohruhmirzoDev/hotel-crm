<template >
	<nav class=" p-2  w-full h-auto  rounded-[5px] mb-8  bg-white">
		<section class="">
			<div class="flex justify-between flex-wrap">
				<input type="search" placeholder="Search..."
					class="border-[#b0afaf] h-[37px] rounded-lg  lg:w-36 w-full text-[#353333] font-semibold ">
				<div class="md:my-3 sm:my-3 xl:my-0 lg:my-0">
					<input type="date" class="" required>
					<input type="date" class="ml-2">
					<button class="bg-[#696cff] py-[7px] px-[20px] text-[0.75rem]  m-1 text-white rounded-[5px]">
						<i class='bx bx-search text-xl'></i>
					</button>
				</div>
			</div>
			<div class="flex justify-between mt-2">
				<div class="">
					<button
						class="bg-[#696cff] py-[5px] px-[13px] text-[0.75rem] m-1 text-white rounded-[5px]">Holatlar</button>
					<button
						class="bg-[#696cff] py-[5px] px-[16px] text-[0.75rem] m-1 text-white rounded-[5px]">Katigoriya</button>
				</div>
				<div class="">
					<button class="bg-[#696cff] py-[5px] px-[15px] text-[0.75rem] m-1 text-white rounded-[5px]"
						data-modal-target="popup-modal" data-modal-toggle="popup-modal">Zakaz</button>
				</div>
			</div>
		</section>
	</nav>


	<!-- =========================== modal ============================================ -->
	<div id="popup-modal" tabindex="-1"
		class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
		<div class="relative p-4 w-full max-w-xl max-h-full">
			<div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
				<button type="button"
					class="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
					data-modal-hide="popup-modal">
					<svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
						viewBox="0 0 14 14">
						<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
							d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
					</svg>
					<span class="sr-only">Close modal</span>
				</button>
				<div class="p-4 md:p-5">

					<h3 class="mb-5 text-xl font-normal text-gray-500 dark:text-gray-400"> Hona boshqaruvi</h3>
					<div class=" flex justify-between">
						<div class="mr-8">
							<input type="search" class="h-[26px] w-full border-2 text-sm rounded-sm"
								placeholder="Honani qidirish...">
							<div
								class="w-[243px] h-[120px] overflow-x-auto overflow-scroll p-1 border-2 mt-1 text-gray-400">
								<p class="w-full py-1 pl-2  hover:bg-slate-200 focus:bg-gray-900 my-1">
									101 hona
								</p>
								<p class="w-full py-1 pl-2  hover:bg-slate-200 focus:bg-gray-900 my-1">
									102 hona
								</p>
								<p class="w-full py-1 pl-2  hover:bg-slate-200 focus:bg-gray-900 my-1">
									103 hona
								</p>
								<p class="w-full py-1 pl-2  hover:bg-slate-200 focus:bg-gray-900 my-1">
									104 hona
								</p>
								<p class="w-full py-1 pl-2  hover:bg-slate-200 focus:bg-gray-900 my-1">
									105 hona
								</p>
								<p class="w-full py-1 pl-2  hover:bg-slate-200 focus:bg-gray-900 my-1">
									106 hona
								</p>
							</div>
						</div>

						<div class="w-[243px] h-[150px] overflow-x-auto overflow-scroll p-1 border-2 mt-1 text-gray-400">
							<p class="w-full py-1 pl-2 1 hover:bg-slate-200 focus:bg-gray-900 my-1">
								Bron
							</p>
							<p class="w-full py-1 pl-2  hover:bg-slate-200 focus:bg-gray-900 my-1">
								Band
							</p>
							<p class="w-full py-1 pl-2  hover:bg-slate-200 focus:bg-gray-900 my-1">
								Bo'shatish
							</p>
							<p class="w-full py-1 pl-2  hover:bg-slate-200 focus:bg-gray-900 my-1">
								Tozalash
							</p>
						</div>
					</div>
					<div class="text-center m-8">
						<button
							class="hover:bg-[#696cff] py-[7px] px-[20px] text-[1rem] border-2 border-[#696cff] hover:text-white  m-1 text-[#696cff] rounded-[5px]">Tozalash</button>
						<button
							class="bg-[#696cff] py-[7px] px-[20px] text-[1rem]  text-white border-2 border-[#696cff]  m-1 rounded-[5px]">Saqlash</button>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- ==================================== madal  ======================================= -->
</template>
<script>

</script>

