<template >
    <nav class=" p-2  w-full h-auto  rounded-[5px] mb-8  bg-white ">
        <div class="flex justify-between flex-wrap">
            <input type="search" placeholder="Search..."
                class="border-[#b0afaf] h-[37px] rounded-lg  lg:w-[480px] w-full text-[#353333] font-semibold ">
            <div class="md:my-3 sm:my-3 xl:my-0 lg:my-0">

                <RouterLink to="/room/addroom">
                    <button class="bg-[#696cff] py-[6px] px-[20px] text-md  m-1 text-white rounded-[5px]">
                        Xona Bron Qilish
                    </button>
                </RouterLink>
            </div>
        </div>
        <div class="flex justify-between mt-2">
            <div class="">
                <button class="bg-[#8592a3] py-[5px] px-[13px] text-[0.75rem] m-1 text-white rounded-[5px]">Hammasi</button>
                <button class="bg-[#73ce00] py-[5px] px-[13px] text-[0.75rem] m-1 text-white rounded-[5px]">Bo'sh</button>
                <button class="bg-[#8592a3] py-[5px] px-[13px] text-[0.75rem] m-1 text-white rounded-[5px]">Band
                    etilgan</button>
                <button class="bg-[#ff9b9b] py-[5px] px-[13px] text-[0.75rem] m-1 text-white rounded-[5px]">Band</button>
                <button
                    class="bg-[#ffca10] py-[5px] px-[13px] text-[0.75rem] m-1 text-white rounded-[5px]">Tozolovda</button>
                <button class="bg-[#787878] py-[5px] px-[13px] text-[0.75rem] m-1 text-white rounded-[5px]">Remont</button>
            </div>
            <div class="">
                <button
                    class=" py-[5px] px-[16px] hover:bg-[#8592a3] hover:text-white text-[0.75rem] m-1 text-[#8592a3] border-[#8592a3] border-2 rounded-[5px]">Oddiy</button>
                <button
                    class=" py-[5px] px-[16px] hover:bg-[#8592a3] hover:text-white text-[0.75rem] m-1 text-[#8592a3] border-[#8592a3] border-2 rounded-[5px]">Polu-Luks</button>
                <button
                    class=" py-[5px] px-[16px] hover:bg-[#8592a3] hover:text-white text-[0.75rem] m-1 text-[#8592a3] border-[#8592a3] border-2 rounded-[5px]">Lyuks</button>
                <button
                    class=" py-[5px] px-[16px] hover:bg-[#8592a3] hover:text-white text-[0.75rem] m-1 text-[#8592a3] border-[#8592a3] border-2 rounded-[5px]">3-kishilik</button>
                <button
                    class=" py-[5px] px-[16px] hover:bg-[#8592a3] hover:text-white text-[0.75rem] m-1 text-[#8592a3] border-[#8592a3] border-2 rounded-[5px]">2-kishilik</button>
                <button
                    class=" py-[5px] px-[16px] hover:bg-[#8592a3] hover:text-white text-[0.75rem] m-1 text-[#8592a3] border-[#8592a3] border-2 rounded-[5px]">1-kishilik</button>
            </div>
        </div>
    </nav>
</template>
<script>

</script>
