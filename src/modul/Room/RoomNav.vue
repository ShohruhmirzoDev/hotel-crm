<template >
    <nav class=" p-2  w-full h-auto  rounded-md mb-8  bg-white ">
        <div class="flex justify-between flex-wrap">
            <input type="search" placeholder="Search..."
                class="border-gray-400 h-9 rounded-lg  lg:w-96 w-full text-gray-800 font-semibold ">
            <div class="md:my-3 sm:my-3 xl:my-0 lg:my-0">

                <RouterLink to="/room/addroom">
                    <button class="bg-blue-700 py-1.5 px-5 text-md  m-1 text-white rounded-md">
                        Xona Bron Qilish
                    </button>
                </RouterLink>
            </div>
        </div>
        <div class="flex justify-between mt-2">
            <div class="">
                <button class="bg-gray-500 py-1.5 px-3 text-sm m-1 text-white rounded-md">Hammasi</button>
                <button class="bg-lime-500 py-1.5 px-3 text-sm m-1 text-white rounded-md">Bo'sh</button>
                <button class="bg-gray-500 py-1.5 px-3 text-sm m-1 text-white rounded-md">Band
                    etilgan</button>
                <button class="bg-[#ff9b9b] py-1.5 px-3 text-sm m-1 text-white rounded-md">Band</button>
                <button
                    class="bg-[#ffca10] py-1.5 px-3 text-sm m-1 text-white rounded-md">Tozolovda</button>
                <button class="bg-[#787878] py-1.5 px-3 text-sm m-1 text-white rounded-md">Remont</button>
            </div>
            <div class="">
                <button
                    class=" py-1.5 px-3 hover:bg-gray-500 hover:text-white text-sm m-1 text-gbg-gray-500 text-gray-500 border-2 rounded-md">Oddiy</button>
                <button
                    class=" py-1.5 px-3 hover:bg-gray-500 hover:text-white text-sm m-1 text-gbg-gray-500 text-gray-500 border-2 rounded-md">Polu-Luks</button>
                <button
                    class=" py-1.5 px-3 hover:bg-gray-500 hover:text-white text-sm m-1 text-gbg-gray-500 text-gray-500 border-2 rounded-md">Lyuks</button>
                <button
                    class=" py-1.5 px-3 hover:bg-gray-500 hover:text-white text-sm m-1 text-gbg-gray-500 text-gray-500 border-2 rounded-md">3-kishilik</button>
                <button
                    class=" py-1.5 px-3 hover:bg-gray-500 hover:text-white text-sm m-1 text-gbg-gray-500 text-gray-500 border-2 rounded-md">2-kishilik</button>
                <button
                    class=" py-1.5 px-3 hover:bg-gray-500 hover:text-white text-sm m-1 text-gbg-gray-500 text-gray-500 border-2 rounded-md">1-kishilik</button>
            </div>
        </div>
    </nav>
</template>
<script>

</script>
