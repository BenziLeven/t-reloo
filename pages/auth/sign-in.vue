<template>
  <v-row align="center" justify="center">
    <v-col cols="12" md="8" sm="8" align="center" class="mt-24">
      <v-card class="elevation-10 text-left sign-in-form">
        <v-card-title class="align-center justify-center">
          T-Reloo
        </v-card-title>
        <v-card-text>
          <v-form>
            <v-text-field
              v-model="auth.email"
              label="Email"
              name="email"
              prepend-icon="mdi-account"
              type="text"
            />

            <v-text-field
              v-model="auth.password"
              label="Password"
              name="password"
              prepend-icon="mdi-lock"
              type="password"
            />
          </v-form>
        </v-card-text>
        <v-card-actions class="text-center">
          <v-btn
            class="login-button"
            depressed
            large
            @click="signIn"
          >
            Login
          </v-btn>
        </v-card-actions>
      </v-card>
      <v-snackbar
        v-model="snackbar"
        :timeout="4000"
        absolute
        bottom
        center
      >
        {{ snackbarText }}
      </v-snackbar>
    </v-col>
  </v-row>
</template>

<script>
export default {
    name: "SignInPage",
    data () {
        return {
            snackbar: false,
            snackbarText: "No error message",
            auth: {
                email: "",
                password: ""
            }
        }
    },
    head: {
        title: "Sign In"
    },
    methods: {
        signIn () {
            this.snackbarText = `FAKE -- You are signed in with [${this.auth.email} - ${this.auth.password}]`
            this.snackbar = true
        }
    }
}
</script>

<style scoped>
.sign-in-form {
  margin-top: 64px;
}
</style>
