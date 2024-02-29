<template>
  <div>
    <main
      class="mx-auto flex min-h-screen w-full items-center justify-center bg-gray-100 text-white"
    >
      <!-- component -->
      <section
        class="flex bg-white w-[30rem] flex-col space-y-10 rounded-md p-12 text-black"
      >
        <div class="text-center text-4xl font-medium">
          {{ ban ? "Xatolik" : " Login" }}
        </div>

        <div
          class="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500"
        >
          <input
            type="email"
            placeholder="Email or Username"
            v-model="email"
            :class="ban ? 'bg-red-700' : ''"
            class="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
          />
        </div>

        <div
          class="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500"
        >
          <input
            type="text"
            placeholder="Password"
            v-model="password"
            class="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
          />
        </div>

        <button
          class="transform rounded-sm bg-indigo-600 py-2 font-bold duration-300 hover:bg-indigo-400"
          @click="login()"
        >
          LOG IN
        </button>

        <a
          href="#"
          class="transform text-center font-semibold text-gray-500 duration-300 hover:text-gray-300"
          >FORGOT PASSWORD?</a
        >

        <p class="text-center text-lg">
          No account?
          <a
            href="#"
            class="font-medium text-indigo-500 underline-offset-4 hover:underline"
            >Create One</a
          >
        </p>
      </section>
    </main>
  </div>
</template>
<script setup>
import router from "@/router";
import axios from "axios";
import { ref } from "vue";

const loginToken = sessionStorage.getItem("login");

if (loginToken) {
  router.push("/");
}
const email = ref(null);
const password = ref(null);

let ban = ref(false);

function login() {
  axios
    .post("/api/Admin/login-admin", {
      email: email.value,
      password: password.value,
    })
    .then(function (res) {
      if (res.status === 200) {
        sessionStorage.setItem("login", String(res.data.token));
        router.go();
      }

    })
    .catch(function (error) {
      if (error.res.status === 404) ban.value = true;
    });
}
// console.log(ban.value);
</script>
<style></style>
