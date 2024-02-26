import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";





export const useRoomStore = defineStore("RoomStore", () => {
  const rooms = ref(null);

  const ApiCall = () => {
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
  };

  ApiCall();

  return { rooms };
});
