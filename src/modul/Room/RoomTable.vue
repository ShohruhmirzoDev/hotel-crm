<template>
  <section class="bg-white rounded-md">
    <div class="relative overflow-x-auto xl:shadow-md rounded-lg">
      <table
        class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
      >
        <thead
          class="text-sm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
        >
          <tr>
            <th scope="col" class="pl-6 py-3">Xona raqami</th>
            <th scope="col" class="pl-6 py-3">Holati</th>
            <th scope="col" class="pl-6 py-3">User</th>
            <th scope="col" class="px-6 py-3">Sanasi</th>
            <th scope="col" class="px-6 py-3">Status</th>
            <th scope="col" class="pl-6 py-3">Action</th>
          </tr>
        </thead>

        <tbody>
          <tr
            v-for="items in room"
            class="odd:bg-white odd:dark:bg-gray-900 hover:bg-gray-100 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
          >
            <th
              scope="row"
              class="pl-6 w-40 py-2 font-medium text-gray-500 whitespace-nowrap dark:text-white"
            >
              {{ items.description }}
            </th>
            <th>
              <button
                class="bg-gray-300 py-1.5 w-[149px] m-1 text-white rounded-md"
              >
                Band-Etilgan
              </button>
            </th>
            <td class="px-6 py-2">
              <div class="w-16">
                <i class="bx bx-user" v-for="icon in items.number"></i>
              </div>
            </td>
            <td class="px-6 py-2 w-40">
              <p class="w-40">05.05-07.05 gacha</p>
            </td> 
            <td class="px-6 py-2 w-16">Lyuks</td>
            <td class="px-6 py-2">
              <div class="w-80">
                <button
                  @click="DeleteRoom(items.id)"
                  class="bg-blue-700 py-1.3 px-3 text-sm m-1 text-white rounded-md"
                >
                  <i class="bx bx-trash"></i> O'chirish
                </button>
                <RouterLink :to="'/room/editroom/' + items.id">
                  <button
                    class="bg-blue-700 py-1.3 px-3 text-sm m-1 text-white rounded-md"
                  >
                    <i class="bx bxs-edit-alt"></i> O'zgartirish
                  </button>
                </RouterLink>
                <RouterLink :to="'/room/seeroom/' + items.id">
                  <button
                    class="bg-blue-700 py-1.3 px-3 text-sm m-1 text-white rounded-md"
                  >
                    <i class="bx bxs-bullseye"></i> Ko'rish
                  </button>
                </RouterLink>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
  <div v-if="room == null" class="text-center w-full mx-auto my-52">
    <i
      class="bx bx-loader-circle bx-spin bx-rotate-90 text-6xl"
      style="color: #001caa"
    ></i>
  </div>
</template>
<script setup>
import { ref } from "vue";
import axios from "axios";
import { RouterLink } from "vue-router";

const room = ref(null);

const ApiCall = () => {
  axios
    .get("/api/Room/get-all-rooms")  
    .then((res) => {
      if (res.status === 200) {
        room.value = res.data;
      }
    })
    .catch((error) => {
      console.log(error);
    });
};
 
ApiCall();
// Delete API Room

const DeleteRoom = (id) => {
  let mod = confirm("Room deleted");

  if (mod) {
    axios
      .delete(`/api/Room/delete-room?id=${id}`)
      .then((res) => {
        console.log(res);
        if (res.status == 200) {
          alert("Room deleted");
          ApiCall();
        }
      })
      .catch((error) => console.log(error));
  }
};
</script>

<style></style>
