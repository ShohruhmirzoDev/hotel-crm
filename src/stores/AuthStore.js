import { defineStore } from "pinia";
import { ref, reactive } from "vue";
import axios from "axios";
export const useAuthStore = defineStore("auth", () => {
  const state = reactive({
    user: null,
    token: null,
    isAuthenticated: false,
  });

  const mutations = {
    setUser(user) {
      state.user = user;
    },
    setToken(token) {
      state.token = token;
    },
    setIsAuthenticated(isAuthenticated) {
      state.isAuthenticated = isAuthenticated;
    },
  };

  const actions = {
    login({ email, password }) {
      axios
        .post("/api/Admin/login-admin", {
          email,
          password,
        })
        .then(function (res) {
          if (res.status === 200) {
            mutations.setUser(res.data);
            mutations.setToken(res.data.token);
            mutations.setIsAuthenticated(true);
          }
        });
    },
  };
  return { state, mutations, actions };
});
