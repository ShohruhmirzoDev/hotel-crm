<template>
  <main>
    <h1 v-if="rooms == null" class="text-center text-3xl">Loading...</h1>

    <div
      class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3"
    >
      <div v-for="item in rooms">
        <div class="cursor-pointer rounded-md bg-[#71dd37] p-[15px] text-white">
          <div class="flex justify-between">
            <p class="text-[#566a7f] text-2xl font-semibold">
              {{ item.description }}
            </p>
            <div>
              <i v-for="_ in item.number" class="bx bx-user"></i>
            </div>
          </div>
          <p class="text-xl my-3">Oddiy</p>
          <div class="">
            <button
              class="bg-[#696cff] py-[5px] px-[15px] text-[0.75rem] m-1 text-white rounded-[5px] active:scale-95"
            >
              Band
            </button>
            <button
              class="bg-[#696cff] py-[5px] px-[15px] text-[0.75rem] m-1 text-white rounded-[5px] active:scale-95"
            >
              Bron
            </button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script setup>
import axios from "axios";
import { ref } from "vue";
const rooms = ref(null);

axios
  .get("/api/Room/get-all-rooms")
  .then((res) => {
    if (res.status === 200) {
      rooms.value = res.data;
    }
  })
  .catch((error) => {
    console.log(error);
  });

// axios.get("/api/RoomStatus/get-all-rooms")
// .then((response) => {
// 	if (response.status === 200) {
// 		roomType.value = response.data;
// 	}

// 	console.log(response);
// })
// .catch((errror) => {
// 	console.log(errror);
// });
</script>

<!-- <div class="  rounded-md bg-[#8ec5df] p-[15px] text-white">
			<div class="flex justify-between">
				<p class="text-[#566a7f] text-2xl font-semibold">102 xona</p>
				<p>ssss</p>
			</div>
			<p class="text-xl my-3">Oddiy</p>
			<div class="">
				<button
					class="bg-[#696cff] py-[5px] px-[15px] text-[0.75rem] m-1 text-white rounded-[5px]">Boshatish</button>
				<button class="bg-[#696cff] py-[5px] px-[15px] text-[0.75rem] m-1 text-white rounded-[5px]">Band</button>
			</div>
		</div> -->
