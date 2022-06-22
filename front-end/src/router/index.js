import Vue from "vue";
import VueRouter from "vue-router";

// router : 메뉴달기 비교) springboot : controller (메뉴달기)
Vue.use(VueRouter);

const routes = [
  // Main
  {
    path: "/",
    name: "*",
    component: () => import("@/views/MainView"),
  },
  // Main(home)
  {
    path: "/home",
    name: "home",
    component: () => import("@/views/MainView"),
  },
  // FaqboardList
  {
    path: "/faqboards",
    name: "faqboards",
    component: () => import("@/components/faqboard/FaqboardList"),
  },
  // AddFaqboard
  {
    path: "/add-faqboard",
    name: "add-faqboard",
    component: () => import("@/components/faqboard/AddFaqboard"),
  },
  // EditFaqboard
  {
    path: "/faqboards/:no",
    name: "edit-faqboard",
    component: () => import("@/components/faqboard/EditFaqboard"),
  },
  // AddCustomer
  {
    path: "/add-customer",
    name: "add-customer",
    component: () => import("@/components/customer/AddCustomer"),
  },
  // CustomerList
  {
    path: "/customers",
    name: "customers",
    component: () => import("@/components/customer/CustomerList"),
  },
  // EditCustomer
  {
    path: "/customers/:id",
    name: "edit-customer",
    component: () => import("@/components/customer/EditCustomer"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
