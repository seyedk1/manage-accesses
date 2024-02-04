import HomeView from "@/views/Home/HomeView.vue";
export const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  
  //Not Found
  {
    path: "/404",
    name: "notFound",
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "not-found" */ "../views/NotFound/NotFound.vue"
      ),
  },
  {
    path: "/:pathMatch(.*)",
    redirect: {
      name: "notFound",
    },
  },
];
