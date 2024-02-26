<template >
  <div>
    <main class="mx-auto flex min-h-screen w-full items-center justify-center bg-gray-900 text-white">
      <!-- component -->
      <section class="flex w-[30rem] flex-col space-y-10">
        <div class="text-center text-4xl font-medium">Register</div>

        <div class="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
          <input type="text" placeholder=" LastName"
            class="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
            v-model="lastName" />
        </div>

        <div class="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
          <input type="text" placeholder="FirstName"
            class="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
            v-model="firstName" />
        </div>

        <div class="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
          <input type="email" placeholder=" Email address"
            class="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
            v-model="email" />
        </div>

        <div class="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
          <input type="text" placeholder="Password"
            class="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
            v-model="password" />
        </div>

        <div class="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
          <input type="text" placeholder=" Number"
            class="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
            v-model="phoneNumber" />
        </div>

        <button @click="register()"
          class="transform rounded-sm bg-indigo-600 py-2 font-bold duration-300 hover:bg-indigo-400">
          Register
        </button>

        <a href="#" class="transform text-center font-semibold text-gray-500 duration-300 hover:text-gray-300">FORGOT
          PASSWORD?</a>

        <p class="text-center text-lg">
          No account?
          <a href="#" class="font-medium text-indigo-500 underline-offset-4 hover:underline">Create One</a>
        </p>
      </section>
    </main>
  </div>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';

import { RouterLink, RouterView } from 'vue-router'
import router from '@/router';

const lastName = ref(null);
const firstName = ref(null);
const email = ref(null);
const password = ref(null);
const phoneNumber = ref(null);

function register() {

  axios.post("https://ho-tel.1kb.uz/api/Auth/register", {
    email: email.value,
    password: password.value,
    firstName: firstName.value,
    lastName: lastName.value,
    phoneNumber: phoneNumber.value,
    roles: ["admin"],
  })
    .then(function (response) {
      console.log(response);
      if (response.status === 200) {
              routerRegister();
      }

    }).catch(function (error) {
      console.log(error + ' Qayerdadir xato bor ')


    })

  // fetch("https://ho-tel.1kb.uz/api/Auth/register",
  //   {
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json'
  //     },
  //     method: "POST",
  //     body: JSON.stringify({
  //       email: email.value,
  //       password: password.value,
  //       firstName: firstName.value,
  //       lastName: lastName.value,
  //       phoneNumber: phoneNumber.value,
  //       roles: ["admin"],
  //     })
  //   })
  //   .then(function (res) {

  //     
  //   })

  //   .catch(function (res) { console.log(res) })
}

function routerRegister() {
  router.push('/login')
}










</script>



