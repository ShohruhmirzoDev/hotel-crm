<template>
  <div class="bg-white p-5 rounded-lg">
    <div
      class="grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-5 md:gap-3"
    >
      <div>
        <input
          v-model="RName"
          type="text"
          id="small-input"
          placeholder="Room name"
          class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>

      <select
        id="small"
        v-model="RPlength"
        class="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option value="0" selected>User length</option>
        <option value="1">1- person</option>
        <option value="2">2- person</option>
        <option value="3">3- person</option>
        <option value="4">4- person</option>
        <option value="5">5- person</option>
      </select>

      <select
        v-model="RStatus"
        id="small"
        class="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option value="0" selected>Room status</option>
        <option v-for="item in roomStatus" :value="item.id">
          {{ item.name }}
        </option>
      </select>

      <select
        v-model="RType"
        id="small"
        class="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option value="0" selected>Room level</option>
        <option v-for="item in roomType" :value="item.id">
          {{ item.name }}
        </option>
      </select>

      <div>
        <input
          v-model="RCost"
          type="number"
          id="small-input"
          placeholder="Room Cost"
          class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
    </div>

    <textarea
      id="message"
      rows="4"
      class="block p-3.5 w-full mt-10 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="Additional comment.."
    >
    </textarea>

    <div v-if="err" class="text-center text-red-700 font-bold text-4xl mt-8">
      <h1>Insufficent data</h1>
    </div>
    <div class="text-center mt-12">
      <RouterLink to="/room" class="bg-transparent">
        <button
          type="button"
          class="text-blue-700 hover:text-white border-2 border-blue-700 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Back
        </button>
      </RouterLink>
      <button
        type="button"
        @click="AddRoom()"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 border-2 border-blue-700 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Submit
      </button>
    </div>
  </div>
</template>
<script setup>
import { RouterLink } from "vue-router";
import axios from "axios";
import { ref } from "vue";

const roomType = ref(null);
const roomStatus = ref(null);

const RName = ref(null);
const RType = ref("0");
const RStatus = ref("0");
const RPlength = ref("0");
const RCost = ref(null);
const err = ref(false);

axios
  .get("/api/RoomStatus/get-all-rooms")
  .then((res) => {
    if (res.status == 200) {
      roomStatus.value = res.data;
    }
  })
  .catch((error) => {
    console.log(error);
  });

axios
  .get("/api/RoomType/get-all-roomtype")
  .then((response) => {
    roomType.value = response.data;
  })
  .catch((error) => {
    console.log(error);
  });

const AddRoom = () => {
  if (
    RName.value == null ||
    RType.value == "0" ||
    RStatus.value == "0" ||
    RPlength.value == "0" ||
    RCost.value == null
  ) {
    err.value = true;
  } else {
    axios
      .post("/api/Room/add-room", {
        number: RPlength.value,
        price: RCost.value,
        description: RName.value,
        roomTypeId: RType.value,
        roomStatusId: RStatus.value,
      })
      .then(function (res) {
        if (res.status == 200) {
          alert("Add  Room");
          (RPlength.value = "0"),
            (RType.value = "0"),
            (RStatus.value = "0"),
            (RCost.value = null),
            (RName.value = null);
        }
      });
  }
};
</script>
