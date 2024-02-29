<template>
  <div class="bg-white p-5 rounded-sm">
    <div class="grid xl:grid-cols-3 lg:grid-cols-2 gap-5 text-gray-500">
      <div class="mb-6">
        <label
          for="default-input"
          class="block mb-2 text-sm font-medium dark:text-white"
          >Tashkilot nomi</label
        >
        <input
          v-model="OName"
          type="text"
          id="default-input"
          placeholder="Tashkilot nomi"
          class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>

      <div class="mb-6">
        <label
          for="default-input"
          class="block mb-2 text-sm font-medium dark:text-white"
          >Telfon raqam</label
        >
        <input
          v-model="OPhonenumber"
          type="text"
          id="default-input"
          placeholder="Tel:"
          class="bg-gray-50 border  border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>

      <div class="mb-6">
        <label
          for="default-input"
          class="block mb-2 text-sm font-medium dark:text-white"
          >INN</label
        >
        <input
          v-model="OInn"
          type="text"
          id="default-input"
          placeholder="INN"
          class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
    </div>

    <div class="">
      <div class="mb-6 w-1/2">
        <label
          for="default-input"
          class="block mb-2 text-sm font-medium text-gray-500"
          >Derektor I.F.SH</label
        >
        <input
          v-model="ODerektorName"
          type="text"
          id="default-input"
          placeholder="Ism Familiya"
          class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
    </div>

    <div class="">
      <div class="mb-6">
        <label
          for="default-input"
          class="block mb-2 text-sm font-medium text-gray-500"
          >Yuridik address</label
        >
        <input
          v-model="OAddresYuridik"
          type="text"
          id="default-input"
          placeholder="Address"
          class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
    </div>

    <div class="">
      <label class="block mb-2 text-sm font-medium text-gray-700"
        >Qo'shimcha malumotlar</label
      >
      <textarea
        v-model="OInformation"
        class="w-full h-[150px] rounded-lg border border-gray-300"
        placeholder="Qo'shimcha Izoh.."
      ></textarea>
    </div>
    <div v-if="err" class="text-red-600 text-xl text-center">
      <h1>Malumotlar yo'q</h1>
    </div>

    <div class="text-center mt-12">
      <RouterLink to="/organization" class="bg-transparent">
        <button
          type="button"
          class="text-blue-700 hover:text-white border-2 border-blue-700 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Bekor Qilish
        </button>
      </RouterLink>
      <button
        @click="ApiCallOrganization()"
        type="button"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 border-2 border-blue-700 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Yuborish
      </button>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import axios from "axios";

const OName = ref(null);
const OPhonenumber = ref(null);
const OInn = ref(null);
const ODerektorName = ref(null);
const OAddresYuridik = ref(null);
const OInformation = ref(null);
const err = ref(false);

const ApiCallOrganization = () => {
    if (
        OName.value == null ||
        OPhonenumber.value == null ||
        OInn.value == null ||
        ODerektorName.value == null ||
        OAddresYuridik.value == null || 
        OInformation.value == null
    ) {
        err.value = true;
    }
    else{
        axios.post("/api/Organization/add-organization",{
            organizationName: OName.value,
            phoneNumber: OPhonenumber.value,
            inn: OInn.value,
            derektorFullName: ODerektorName.value,
            yuridikAddress: OAddresYuridik.value,
            otherInformation: OInformation.value
        })
        .then((res)=>{
            if (res.status == 200) {
                alert("Add Organization")
                OName.value = '',
                OPhonenumber.value = '',
                OInn.value = '',
                ODerektorName.value = '',
                OAddresYuridik.value = '',
                OInformation.value = ''
            }
        }).catch((error)=>{
            console.log(error);
        })

    }



};
</script>
