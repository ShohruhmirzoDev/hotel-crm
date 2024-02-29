<template>
  <div class="bg-white p-5">
    <div class="grid xl:grid-cols-3 lg:grid-cols-2 gap-5">
      <div class="">
        <label class="block mb-2 text-sm font-medium text-gray-700">Ism</label>
        <input
          v-model="GName"
          type="text"
          placeholder="Ism"
          class="block w-full p-2 text-md border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 text-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div class="">
        <label class="block mb-2 text-sm font-medium text-gray-700"
          >Familiya</label
        >
        <input
          v-model="GLName"
          type="text"
          placeholder="Familiya"
          class="block w-full p-2 text-md border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 text-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>

      <div class="">
        <label class="block mb-2 text-sm font-medium text-gray-700"
          >Otasini ismi</label
        >
        <input
          v-model="GFName"
          type="text"
          placeholder="Otasining ismi"
          class="block w-full p-2 text-md border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 text-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>

      <div class="">
        <label class="block mb-2 text-sm font-medium text-gray-700"
          >Telfon Raqam</label
        >
        <input
          v-model="GPNumber"
          type="Phone"
          placeholder="UZ (+99)"
          class="block w-full p-2 text-md border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 text-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>

      <div class="">
        <label class="block mb-2 text-sm font-medium text-gray-700"
          >Tug'ilgan sanasi</label
        >
        <input
          v-model="GbirthDate"
          type="date"
          placeholder="Password"
          class="block w-full p-2 text-md border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 text-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>

      <div class="">
        <label
          for="countries"
          class="block mb-2 text-sm font-medium text-gray-700"
          >Jinsi</label
        >
        <select
          v-model="GGender"
          id="countries"
          class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 text-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="0" selected>Erkak</option>
          <option value="1">Ayol</option>
        </select>
      </div>

      <div class="">
        <label class="block mb-2 text-sm font-medium text-gray-700"
          >Pasport</label
        >
        <input
          v-model="GPassport"
          type="text"
          placeholder=" AA 12 34 456"
          class="block w-full p-2 text-md border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 text-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>

      <div class="">
        <label
          for="countries"
          class="block mb-2 text-sm font-medium text-gray-700"
          >Xona Tanlang</label
        >
        <select
          v-model="Groom"
          id="countries"
          class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 text-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option :value="item.id" v-for="item in roomIds">
            {{ item.description }}
          </option>
        </select>
      </div>

      <div class="">
        <label class="block mb-2 text-sm font-medium text-gray-700"
          >Berilgan sanasi</label
        >
        <input
          v-model="GdateOfIssue"
          type="date"
          class="block w-full p-2 text-md border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 text-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>

      <div class=""></div>
    </div>

    <div class="my-8 w-1/2">
      <div class="">
        <label class="block mb-2 text-sm font-medium text-gray-700"
          >YASHASH Manzil</label
        >
        <input
          v-model="GAddress"
          type="text"
          placeholder="Yashash joyi"
          class="block w-full p-2 text-md border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 text-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
    </div>

    <!-- -------------------------- Search card ------------------------------ -->

    <div class="bg-white shadow-xl p-5 my-8">
      <div
        class="border border-gray-100 rounded-lg mt-4 p-5 py-12 text-gray-600"
      >
        <div class="">
          <label class="block mb-2 text-xs font-medium text-gray-700"
            >TASHKILOT NOMI</label
          >
          <input
            v-model="organizationName"
            type="text"
            placeholder="Tashkilot nomi"
            class="block w-full p-2 text-sm border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 text-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>

        <div class="my-5">
          <label class="block mb-2 text-xs font-medium text-gray-700"
            >citizenship</label
          >
          <input
            v-model="citizenship"
            type="text"
            placeholder="Manzil"
            class="block w-full p-2 text-sm border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 text-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div class="grid xl:grid-cols-3 lg:grid-cols-2 gap-5">
          <div class="">
            <label class="block mb-2 text-xs font-medium text-gray-700"
              >INN description</label
            >
            <input
              v-model="description"
              type="text"
              placeholder="AA 00 12 362"
              class="block w-full p-2 text-sm border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 text-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>

          <div class="">
            <label class="block mb-2 text-xs font-medium text-gray-700"
              >organization</label
            >
            <input
              v-model="organization"
              type="text"
              placeholder="Ism Familiya"
              class="block w-full p-2 text-sm border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 text-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- ----------------- Qo'shimcha malumot -------------------- -->
    <div class="">
      <label class="block mb-2 text-sm font-medium text-gray-700"
        >Qo'shimcha malumotlar</label
      >
      <textarea
        class="w-full h-[150px] rounded-lg border border-gray-300"
        placeholder="Qo'shimcha Izoh.."
      ></textarea>
    </div>
    <div v-if="err" class="text-red-600 text-xl text-center">
      <h1>Malumotlar yo'q</h1>
    </div>

    <div class="text-center mt-12">
      <RouterLink to="/guests" class="bg-transparent">
        <button
          type="button"
          class="text-blue-700 hover:text-white border-2 border-blue-700 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Back
        </button>
      </RouterLink>
      <button
        @click="AddGuests"
        type="button"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 border-2 border-blue-700 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Submit
      </button>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";
import { RouterLink } from "vue-router";

const roomIds = ref("0");


const GName = ref(null);
const GLName = ref(null);
const GFName = ref(null);
const GPNumber = ref(null);
const GbirthDate = ref(null);
const GGender = ref(null);
const GPassport = ref(null);
const GdateOfIssue = ref(null);
const GgivenByWhom = ref(null);
const GAddress = ref(null);
const Groom = ref(null);

const organizationName = ref(null);
const citizenship = ref(null);
const description = ref(null);
const organization = ref(null);


const err = ref(false);

const AddGuests = () => {

  if (
    GName.value == null 
   
  ) {
    
    err.value = true;
  }
   else {
    axios
      .post("/api/Guest/add-guest", {
        lastName: GLName.value,
        firstName: GName.value,
        fatherName: GFName.value,
        phoneNumber: GPNumber.value,
        passport: GPassport.value,
        birthDate: GbirthDate.value,
        dateOfIssue: GdateOfIssue.value,
        address: GAddress.value,
        roomId: Groom.value,
        givenByWhom: GgivenByWhom.value,
        organizationName: organizationName.value,
        citizenship: citizenship.value,
        description: description.value,
        organization: organization.value,
        gender: GGender.value,
      })
      .then((res) => {
        if (res.status == 200) {
          alert("Add guest ");
        }
        
        console.log(res);                                                                                                                             
      })
      .catch((error) => {
        console.log(error);
      });
  }
};

axios
  .get("/api/Room/get-all-rooms")
  .then((res) => {
    if (res.status == 200) {
      roomIds.value = res.data;
    }
  })
  .catch((error) => {
    console.log(error);
  });
</script>
