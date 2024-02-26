import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import LoginLayout from "../layout/LoginLayout.vue";
import AppLayout from "../layout/AppLayout.vue";
import RoomView from "../views/Room/Honalar.vue";  //Honalar View
import RoomAddRoomView from '../views/Room/RoomAddRoomView.vue'
import EditRoomView from '../views/Room/EditRoomView.vue'
import SeeRoomView from '../views/Room/SeeRoomView.vue';
import EmployeeView from "../views/Employees/EmployeeView.vue";  // Hodimlar View
import AddEmployeeView from "../views/Employees/AddEmployeeView.vue";
import GuestsView from '../views/Guests/GuestsView.vue'     //Mehmonlar View
import GuestsAddView from '../views/Guests/GuestsAddView.vue'
import TashkilotlarView from '..//views/TashkilotlarView.vue'
import SmSView from '..//views/SmSView.vue'
// import RegisterView from '../views/RegisterView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: {
        layout: AppLayout,
      },
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
      meta: {
        layout: LoginLayout,
      },
    },
    {
      path: "/room",
      name: "room",
      children: [
        {
          path: "",
          component: RoomView,
        },
        {
          path: "/room/addroom",
          component: RoomAddRoomView,
        },
        {
          path: "/room/editroom/:id",
          component: EditRoomView,
        },
        {
          path: "/room/seeroom/:id",
          component: SeeRoomView,
        },
      ],
      meta: {
        layout: AppLayout,
      },
    },
    {
      path: "/employee",
      name: "employee",
      children: [
        {
          path: "",
          component: EmployeeView,
        },
        {
          path: "/employee/AddEmployee",
          component: AddEmployeeView,
        },
      ],
      meta: {
        layout: AppLayout,
      },
    },
    {
      path: "/guests",
      name: "guests",
      children: [
        {
          path: "",
          component: GuestsView,
        },
        {
          path: "/guests/guestAdd",
          component: GuestsAddView,
        },
      ],
      meta: {
        layout: AppLayout,
      },
    },
    {
      path: "/tashkilotlar",
      name: "tashkilotlar",
      component: TashkilotlarView,
      meta: {
        layout: AppLayout,
      },
    },
    {
      path: "/sms",
      name: "sms",
      component: SmSView,
      meta: {
        layout: AppLayout,
      },
    },

    // {
    //   path: "/register",
    //   name: "register",
    //   component: RegisterView,
    // },
  ],
  linkActiveClass: "bg-gray-200",
});

export default router;
