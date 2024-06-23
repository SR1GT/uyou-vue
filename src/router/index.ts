import Home from "@/views/Home.vue";
import Services from "@/views/Services.vue";
import SPLogin from "@/views/SPLogin.vue";

import CloseAccount from "@/views/depositor/CloseAccount.vue";
import Login from "@/views/depositor/Login.vue";
import OpenAccount from "@/views/depositor/OpenAccount.vue";
import Saving from "@/views/depositor/Saving.vue";

import CAS from "@/views/salesperson/CAS.vue";
import OAS from "@/views/salesperson/OAS.vue";
import SPWorkbench from "@/views/salesperson/Workbench.vue";
import SS from "@/views/salesperson/SS.vue";

import {
  createRouter,
  // createWebHistory,
  createWebHashHistory,
} from "vue-router";

const router = createRouter({
  // history: createWebHistory(),
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/close",
      component: CloseAccount,
    },
    {
      path: "/login",
      component: Login,
    },
    {
      path: "/open",
      component: OpenAccount,
    },
    {
      path: "/splogin",
      component: SPLogin,
    },
    {
      path: "/salesperson",
      component: SPWorkbench,
      children: [
        {
          path: "cas",
          component: CAS,
        },
        {
          path: "oas",
          component: OAS,
        },
        {
          path: "ss",
          component: SS,
        },
      ],
    },
    {
      path: "/saving",
      component: Saving,
    },
    {
      path: "/services",
      component: Services,
    },
  ],
});

export default router;
