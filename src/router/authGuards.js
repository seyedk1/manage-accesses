export const AuthGuards = {
    router: null,

    setInstanceRouter: function (router) {
        this.router = router
    },

    registerAuthGuard: function () {
        this.router.beforeEach((to, from, next) => {
            next();
        })
    }
}
