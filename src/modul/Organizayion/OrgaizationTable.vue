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
            <th scope="col" class="px-6 py-3">MANZIL</th>
            <th scope="col" class="px-6 py-3">DIREKTOR</th>
            <th scope="col" class="px-6 py-3">TELFON</th>
            <th scope="col" class="px-6 py-3">O'ZGARTIRISH</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in Organization"
            class="bg-white border-b hover:bg-gray-100 dark:border-gray-700"
          >
            <th
              scope="row"
              class="px-6 py-2 overflow-hidden w-full font-medium text-gray-400 whitespace-nowrap dark:text-white"
            >
              <p class="w-20">{{ item.yuridikAddress }}</p>
            </th>

            <td class="px-6 py-4">
              <p class="w-40">{{ item.derektorFullName }}</p>
            </td>
            <td class="px-6 py-4">
              <p class="w-36">{{ item.phoneNumber }}</p>
            </td>
            <td class="px-6 py-4">
              <div class="xl:w-80 flex items-center">
                <button
                  @click="DeleteOrganization(item.id)"
                  class="bg-blue-700 active:bg-blue-500 xl:py-2 py-1.5 flex justify-center items-center px-[16px] text-sm m-1 text-white rounded-2"
                >
                  <i class="bx bx-trash"></i>
                  <p class="xl:block hidden">O'chirish</p>
                </button>

                <button
                  class="bg-blue-700 active:bg-blue-500 xl:py-2 py-1.5 flex justify-center items-center px-2.5 text-sm m-1 text-white rounded-2"
                >
                  <i class="bx bxs-edit-alt"></i>
                  <p class="xl:block hidden">O'zgartirish</p>
                </button>

                <button
                  class="bg-blue-700 active:bg-blue-500 xl:py-2 py-1.5 flex justify-center items-center px-2.5 text-sm m-1 text-white rounded-2"
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
        class="bg-blue-700 py-1.5 px-2.5 text-md mx-1 text-gray-50 hover:text-white rounded-2"
      >
        1
      </button>
      <button
        class="hover:bg-gray-300 bg-gray-200 py-1.5 px-2.5 text-md text-gray-500 hover:text-white rounded-2"
      >
        2
      </button>
      <button
        class="hover:bg-gray-300 bg-gray-200 py-1.5 px-2.5 text-md mx-1 text-gray-500 hover:text-white rounded-2"
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
 <!--  ---------------------------- Loading .. ----------------------------- -->
  <div v-if="Organization == null" class="text-center w-full mx-auto mt-20">
    <i class="bx bx-loader bx-spin text-6xl" style="color: #2100f4"></i>
  </div>
</template>
<script setup>
import { ref } from "vue";
import axios from "axios";
import router from '@/router';

const Organization = ref(null);

const OrganizationApiFunction = () => {
  axios
    .get("/api/Organization/get-all-organization")
    .then((res) => {
      if (res.status == 200) {
        Organization.value = res.data;
      }
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
    });
  
};
OrganizationApiFunction();


const DeleteOrganization = (id) => {
  let mod = confirm("Organization O'chirilsinmi");
  if (mod) {
    axios
      .delete(`/api/Organization/delete-organization?id=${id}`)
      .then((res) => {
        if (res.status == 200) {
          OrganizationApiFunction();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
};
</script>
