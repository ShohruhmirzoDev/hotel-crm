<template>
  <div class="bg-white p-5">
    <div class="flex justify-between mb-5">
      <select class="h-8 rounded-md text-xs border-gray-400">
        <option value="10">10</option>
        <option value="25">25</option>
        <option value="50">50</option>
        <option value="100">100</option>
      </select>

      <div class="flex items-center">
        <label class="text-lg mr-2 text-gray-500">Search :</label>
        <input
          type="search"
          class="w-48 h-8 text-sm rounded-md border-gray-300"
        />
      </div>
    </div>

    <!--  ================================== Malumot card ============================== -->
    <div class="relative overflow-x-auto">
      <table
        class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
      >
        <thead
          class="text-sm text-gray-500 uppercase bg-[#CDF3F8] dark:bg-gray-700 dark:text-gray-400"
        >
          <tr>
            <th scope="col" class="px-6 py-3">Xona</th>
            <th scope="col" class="px-6 py-3">FAMILIYA</th>
            <th scope="col" class="px-6 py-3">ISM</th>
            <th scope="col" class="px-6 py-3">VAQT</th>
            <th scope="col" class="px-6 py-3">TELEFON</th>
            <th scope="col" class="px-6 py-3">O'ZGARTIRISH</th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-white border-b hover:bg-gray-100 dark:border-gray-700">
            <th
              scope="row"
              class="px-6 py-2 overflow-hidden w-28 font-medium text-gray-400 whitespace-nowrap dark:text-white"
            >
              <p class="w-20">102</p>
            </th>
            <td class="px-6 py-4 overflow-hidden">
              <p class="w-28">Familiyasiiiii</p>
            </td>
            <td class="px-6 py-4 overflow-hidden">
              <p class="w-28">ism</p>
            </td>
            <td class="px-6 py-4">
              <p class="w-40">kun</p>
            </td>
            <td class="px-6 py-4">
              <p class="w-36">tel</p>
            </td>
            <td class="px-6 py-4">
              <div class="xl:w-80 flex items-center">
                <button
                  class="bg-blue-700 active:bg-blue-500 xl:py-1.5 py-[7px] flex justify-center items-center px-[16px] text-sm m-1 text-white  rounded-md hover:bg-blue-600"
                >
                  <i class="bx bx-trash"></i>
                  <p class="xl:block hidden">O'chirish</p>
                </button>
                
                  <button
                    class="bg-blue-700 active:bg-blue-500 xl:py-1.5 py-[7px] flex justify-center items-center px-[12px] text-sm m-1 text-white  rounded-md hover:bg-blue-600"
                  >
                    <i class="bx bxs-edit-alt"></i>
                    <p class="xl:block hidden">O'zgartirish</p>
                  </button>
                
                <button
                  class="bg-blue-700 active:bg-blue-500 xl:py-1.5 py-[7px] flex justify-center items-center px-[12px] text-sm m-1 text-white  rounded-md hover:bg-blue-600"
                >
                  <i class="bx bxs-bullseye"></i>
                  <p class="xl:block hidden">Ko'rish</p>
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!--  ================================== / Malumot card ============================== -->

    <div class="mt-8 flex items-center justify-end m-5 text-sm">
      <p
        class="px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded-sm text-gray-500"
      >
        Previous
      </p>
      <button
        class="bg-blue-700 py-[7px] px-[12px] text-md mx-1 text-gray-50 hover:text-white  rounded-md hover:bg-blue-600"
      >
        1
      </button>
      <button
        class=" bg-gray-200 py-[7px] px-[12px] text-md text-gray-500 hover:text-white  rounded-md hover:bg-blue-600"
      >
        2
      </button>
      <button
        class=" bg-gray-200 py-[7px] px-[12px] text-md mx-1 text-gray-500 hover:text-white  rounded-md hover:bg-blue-600"
      >
        3
      </button>
      <p
        class="px-2 py-1 bg-gray-200 rounded-sm hover:bg-gray-300 text-gray-500"
      >
        Next
      </p>
    </div>
  </div>
  <!-- -------------------- Loading ... ------------------ -->
  <!-- <div v-if="Staffadd == null" class="text-center w-full mx-auto mt-20">
    <i class="bx bx-loader bx-spin text-6xl" style="color: #2100f4"></i>
  </div> -->
</template>
<script setup>





</script>
