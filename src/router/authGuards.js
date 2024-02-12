export const AuthGuards = {
  router: null,

  setInstanceRouter: function (router) {
    this.router = router;
  },

  registerAuthGuard: function () {
    this.router.beforeEach(async (to, from, next) => {
      if (to.matched.some((route) => route.meta.requiresAuth)) {
        const token = localStorage.getItem("token");

        if (!token) {
          next({ name: "login" });
        } else {
          // Token exists, proceed to the next route
          next();
        }
      } else {
        // No authentication required, proceed to the next route
        next();
      }
    });
  },
};
