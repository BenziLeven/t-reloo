export default function ({ app, route, redirect }) {
    if (route.path !== "/auth/sign-in") {
        if (!app.$fire.auth.currentUser) {
            return redirect("/auth/sign-in")
        }
    } else if (app.$fire.auth.currentUser) {
        return redirect("/")
    }
}
