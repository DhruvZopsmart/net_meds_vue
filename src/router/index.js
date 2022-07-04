import { createRouter, createWebHistory } from "vue-router";
// import HomeView from "../views/HomeView.vue";
import orderView from "../views/orderView.vue";
import cartView from "../views/cartView.vue";
import Home from "../views/home.vue"
const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/order",
    name: "order",
    component: orderView,
  },
  {
    path: "/cart",
    name: "cart",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: cartView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
