<template>
  <!-- Modal toggle -->
  <button
    data-modal-target="default-modal"
    data-modal-toggle="default-modal"
    class="bg-blue-700 py-1.5 px-5  text-md m-1 text-white rounded-[5px]"
  >
    Positionlarni ko'rish
  </button>

  <!-- Main modal -->
  <div
    id="default-modal"
    tabindex="-1"
    aria-hidden="true"
    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
  >
    <div class="relative p-4 w-full max-w-2xl max-h-full">
      <!-- Modal content -->
      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <!-- Modal header -->
        <div
          class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600"
        >
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
            Position of the modal
          </h3>
          <button
            type="button"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-hide="default-modal"
          >
            <svg
              class="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <!-- Modal body -->
        <div class="p-4 md:p-5 space-y-4 my-2">
          <div
            v-for="item in data"
            :key="item.id"
            class="bg-slate-100 p-1 pl-2 rounded-sm flex justify-between items-center"
          >
            <p>{{ item.name }}</p>
            <div class="">
              <button
                @click="DeletePosition(item.id)"
                class="bg-red-600 py-1 px-2 rounded-md mx-2 active:bg-red-800"
              >
                <i class="bx bx-trash text-white text-xl"></i>
              </button>
              <button class="bg-blue-600 py-1 px-2 rounded-md active:bg-blue-800">
                <i class="bx bx-pencil text-white text-xl"></i>
              </button>
            </div>
          </div>
        </div>
        <!-- Modal footer -->
        <div
          class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600"
        >
          <button
            data-modal-hide="default-modal"
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Yopish
          </button>
          
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useRoute, RouterLink } from "vue-router";
import axios from "axios";

const data = ref(null);

const ApiCallPostion = () => {
  axios
    .get("/api/Position/get-all-positions")
    .then((res) => {
      if (res.status == 200) {
        data.value = res.data;
        
      }
    })
    .catch((error) => {
      console.log(error);
    });
};
ApiCallPostion();

const DeletePosition = (id) => {
  let mod = confirm(" Position O'chirilsinmi");
  if (mod) {
    axios
      .delete(`/api/Position/delete-position${id}`)
      .then((res) => {
        if (res.status == 200) {
          ApiCallPostion();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
};

const PositionEdit = ()=>{
    
}
</script>
