export const state = () => ({
    user: null
})

export const actions = {
    onStateChanged(state, { authUser, claims }) {
        if (!authUser) {
            state.commit("SET_USER", null)

            this.$router.push({
                path: "/auth/sign-in"
            })
        } else {
            const { uid, email } = authUser
            state.commit("SET_USER", { uid, email })
        }
    }
}

export const mutations = {
    SET_USER(state, user) {
        state.user = user
    }
}

export const getters = {
    getUser(state) {
        return state.user
    }
}
