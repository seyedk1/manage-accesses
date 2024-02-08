import App from "@/App.vue";
import LoginView from "@/views/Login/LoginView.vue";
export const routes = [
  {
    path: "/",
    name: "main",
    redirect: { name: "login" },
    component: App,
  },

  // Login Page
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },

  // Add Role Page
  {
    path: "/add-role",
    name: "addRole",
    // route level code-splitting
    // this generates a separate chunk (addRole.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "add-role" */ "../views/AddRole/AddRoleView.vue"
      ),
  },

  //Not Found
  {
    path: "/404",
    name: "notFound",
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
