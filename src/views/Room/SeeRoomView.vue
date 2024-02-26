<template>
  <div class="bg-white p-5">
    <div class="grid xl:grid-cols-4 lg:grid-cols-2 gap-10">
      <div class="">
        <p class="text-xs">HONA NOMI</p>
        <p class="text-blue-700 text-xl mt-1">{{ RName }}</p>
      </div>
      <div class="">
        <p class="text-xs">FOYDALANUVCHILAR SONI</p>
        <p class="text-blue-700 text-xl mt-1">{{ RPlength }}</p>
      </div>
      <div class="">
        <p class="text-xs">HONA HOLATI</p>
        <p class="text-blue-700 text-xl mt-1">{{ RStatus }}</p>
      </div>
      <div class="">
        <p class="text-xs">HONA DARAJASI</p>
        <p class="text-blue-700 text-xl mt-1">{{ RType }}</p>
      </div>
      <div class="">
        <p class="text-xs">HONA NARHI</p>
        <p class="text-blue-700 text-xl mt-1">{{ RCost }} so'm</p>
      </div>
      <div class="">
        <p class="text-xs">XODIM</p>
        <p class="text-blue-700 text-xl mt-1">Falonchi Pistonchi</p>
      </div>
      <div class="">
        <p class="text-xs">QOSHILGAN VAQTI</p>
        <p class="text-blue-700 text-xl mt-1">June 12, 2022, 10:51 am</p>
      </div>
      <div class="">
        <p class="text-xs">O'ZGARTIRILGAN VAQTI</p>
        <p class="text-blue-700 text-xl mt-1">June 20, 2022, 22:00 pm</p>
      </div>
    </div>
    <div class="">
      <p class="text-xs mt-12">HONA MALUMOTLARI</p>
      <p class="text-gray-400 mt-2">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus,
        adipisci dignissimos voluptatibus rerum reprehenderit, sit nemo
        recusandae sint accusamus inventore non corporis, laudantium rem aut
        pariatur repudiandae quidem aliquid cupiditate? Lorem ipsum dolor, sit
        amet consectetur adipisicing elit. Maxime nisi consequatur quam impedit,
        libero aspernatur saepe, quibusdam sunt similique delectus molestiae
        nesciunt nam quos quae. Quas modi explicabo aut deserunt!
      </p>
    </div>
  </div>

  <div class="relative overflow-x-auto bg-white mt-12">
    <table
      class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
    >
      <thead
        class="text-xs w-[50%] text-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400"
      >
        <tr>
          <th scope="col" class="px-6 py-3">Ism Familiya</th>
          <th scope="col" class="px-6 py-3">Boshlanish sana</th>
          <th scope="col" class="px-6 py-3">Tugash sana</th>
          <th scope="col" class="px-6 py-3">Hizmatlar</th>
        </tr>
      </thead>
      <tbody>
        <tr class="bg-white border-b hover:bg-gray-100 dark:border-gray-700">
          <th
            scope="row"
            class="px-6 py-4 font-medium whitespace-nowrap dark:text-white"
          >
            Alisher Uzoqov
          </th>
          <td class="px-6 py-4">02.05.2022 dan</td>
          <td class="px-6 py-4">08.05.2022 gacha</td>
          <td class="px-6 py-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis,
            minima?
          </td>
        </tr>
      </tbody>
    </table>

    <div class="mt-7 flex items-center m-5">
      <p class="px-2 py-1 bg-gray-200 rounded-sm text-gray-400">Previous</p>
      <button
        class="bg-[#696cff] py-[5px] px-[12px] text-md mx-1 text-white rounded-[5px]"
      >
        1
      </button>
      <button
        class="hover:bg-gray-300 bg-gray-200 py-[5px] px-[12px] text-md text-white rounded-[5px]"
      >
        1
      </button>
      <button
        class="hover:bg-gray-300 bg-gray-200 py-[5px] px-[12px] text-md mx-1 text-white rounded-[5px]"
      >
        1
      </button>
      <p
        class="px-2 py-1 bg-gray-200 rounded-sm hover:bg-gray-300 text-gray-400"
      >
        Next
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute, RouterLink } from "vue-router";
import axios from "axios";

const route = useRoute();

let seeId = route.params.id;

const roomType = ref(null);
const roomStatus = ref(null);

const RName = ref(null);
const RType = ref("0");
const RStatus = ref("0");
const RPlength = ref("0");
const RCost = ref(null);
const err = ref(false);

const SelectDataApiCall = () => {
  axios
    .get(`/api/Room/get-by-id/${seeId}`)
    .then((res) => {
      if (res.status == 200) {
        RName.value = res.data.description;
        RType.value = res.data.roomTypeId;
        RStatus.value = res.data.roomStatusId;
        RPlength.value = res.data.number;
        RCost.value = res.data.price;
      }
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
    });

  axios
    .get("/api/RoomStatus/get-all-rooms")
    .then((res) => {
      if (res.status == 200) {
        roomStatus.value = res.data;
      }
    })
    .catch((eror) => {
      console.log(error);
      alert("status");
    });

  axios
    .get("/api/RoomType/get-all-roomtype")
    .then((response) => {
      roomType.value = response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

SelectDataApiCall();
</script>
