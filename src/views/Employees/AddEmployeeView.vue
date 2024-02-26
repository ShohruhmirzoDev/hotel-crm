<template>
  <div class="bg-white p-5">
    <div class="grid xl:grid-cols-3 lg:grid-cols-2 gap-5">

      <div class="text-gray-400">
        <label class="block mb-2 text-sm font-medium dark:text-white"
          >Username</label
        >
        <input
          v-model="UserName"
          type="text"
          placeholder="Username"
          class="block w-full p-2 text-md text-gray-500 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div class="text-gray-400">
        <label class="block mb-2 text-sm font-medium dark:text-white"
          >Email</label
        >
        <input
          v-model="Email"
          type="email"
          placeholder="Email"
          class="block w-full p-2 text-md text-gray-500 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div class="text-gray-400">
        <label class="block mb-2 text-sm font-medium dark:text-white"
          >Password</label
        >
        <input
          v-model="Password"
          type="password"
          placeholder="Password"
          class="block w-full p-2 text-md text-gray-500 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
    </div>

    <div class="grid xl:grid-cols-4 lg:grid-cols-2 gap-5 mt-8">
      <div class="text-gray-400">
        <label class="block mb-2 text-sm font-medium dark:text-white"
          >Ism</label
        >
        <input
          v-model="Name"
          type="text"
          placeholder="Xodim ismi"
          class="block w-full p-2 text-md text-gray-500 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>

      <div class="text-gray-400">
        <label class="block mb-2 text-sm font-medium dark:text-white"
          >Familiya</label
        >
        <input
          v-model="LastName"
          type="text"
          placeholder="Xodim familiyasi"
          class="block w-full p-2 text-md text-gray-500 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>

      <div class="text-gray-400">
        <label class="block mb-2 text-sm font-medium dark:text-white"
          >Otasini ismi</label
        >
        <input
          v-model="FatherName"
          type="text"
          placeholder="Otasining ismi"
          class="block w-full p-2 text-md text-gray-500 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>

      <div class="text-gray-400">
        <label
          for="countries"
          class="block mb-2 text-sm font-medium text-gray-400 dark:text-white"
          >Lavozimi</label
        >
        <select
          v-model="Position"
          id="countries"
          class="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
        <option value="0" selected>Hodim Lavozimi</option>
          <option v-for="item in Pid" :value="item.id">{{ item.name }}</option>

        </select>
      </div>

      <div class="text-gray-400">
        <label class="block mb-2 text-sm font-medium dark:text-white"
          >Telfon Raqam</label
        >
        <input
          v-model="Phone"
          type="Phone"
          placeholder="UZ (+99)"
          class="block w-full p-2 text-md text-gray-500 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>

      <div class="text-gray-400">
        <label class="block mb-2 text-sm font-medium dark:text-white"
          >Tug'ilgan sanasi</label
        >
        <input
          v-model="Birthday"
          type="date"
          placeholder="Password"
          class="block w-full p-2 text-md text-gray-500 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>

      <div class="text-gray-400">
        <label
          for="countries"
          class="block mb-2 text-sm font-medium text-gray-400 dark:text-white"
          >Jinsi</label
        >
        <select
          v-model="Gender"
          id="countries"
          class="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option selected>Erkak</option>
          <option value="US">Ayol</option>
        </select>
      </div>
    </div>

    <div class="my-6">
      <div class="text-gray-400">
        <label class="block mb-2 text-sm font-medium dark:text-white"
          >Manzil</label
        >
        <input
          v-model="Address"
          type="text"
          placeholder="Xodim manzili"
          class="block w-full p-2 text-md text-gray-500 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
    </div>

    <div class="text-gray-400">
      <label class="block mb-2 text-sm font-medium dark:text-white"
        >Qo'shimcha malumotlar</label
      >
      <textarea
      v-model="description"
        class="w-full h-[150px] rounded-lg border border-gray-300"
        placeholder="Qo'shimcha Izoh.."
      ></textarea>
    </div>

    <div v-if="err" class="text-red-500 text-center text-lg mt-3">
      <h1>Malumot yo'q ?</h1>
    </div>

    <div class="text-center mt-12">
      <RouterLink to="/employee" class="bg-transparent">
        <button
          type="button"
          class="text-blue-700 hover:text-white border-2 border-blue-700 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Ortga
        </button>
      </RouterLink>
      <button
      @click="AddStaff()"
        type="button"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 border-2 border-blue-700 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Saqlash
      </button>
    </div>
  </div>
</template>


<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import axios from 'axios';


const Pid = ref(null)


const UserName = ref(null);
const Email = ref(null);
const Password = ref(null);
const Name = ref(null);
const LastName = ref(null);
const FatherName = ref(null);
const Position = ref("0");
const Phone = ref("(+998) ");
const Birthday = ref(null);
const Gender = ref(null);
const Address = ref(null);
const description = ref(null);
const err = ref(false);


axios.get("/api/Position/get-all-positions")
.then((res)=>{
  if (res.status == 200) {
    Pid.value = res.data
  }
}).catch((error)=>{
  console.log(error);
})

const AddStaff = ()=>{
  if (UserName.value == null ||
      Email.value == null ||
      Name.value == null ||
      LastName.value == null ||
      FatherName.value == null ||
      Position.value == "0" ||
      Phone.value == null ||
      Birthday.value == null ||
      Gender.value == null ||
      Address.value == null ||
      description.value == null 
  ) {
    err.value = true;
  }
  else{
    axios.post("/api/Staff/add-staff",{
      firstName: Name.value,
      lastName: LastName.value,
      fatherName: FatherName.value,
      username: UserName.value,
      email: Email.value,
      positionId: Position.value,
      phoneNumber: Phone.value,
      gander: Gender.value,
      birthDate: Birthday.value,
      address: Address.value,
      description: description.value

    }).then((res)=>{
      if (res.status == 200) {
        alert("Add Staff added")
        Name.value = ""
        LastName.value = ''
        FatherName.value = ''
        Password.value = ''
        Email.value = ''
        UserName.value =''
        Position.value = ''
        Phone.value = ''
        Gender.value = ''
        Birthday.value = ''
        Address.value = ''
        description.value = ''
        
      }
    }).catch((error)=>{
      console.log(error);
    })


  }
}


</script>
<style></style>
