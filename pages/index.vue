<template>
  <v-container>
    <v-dialog v-model="dialog" class="d-block lskdfkkkkkk">
      <board-creation-form @close-dialog="toggleDialog" />
    </v-dialog>
    <div class="d-flex flex-row align-center justify-space-between">
      <h1>My Boards</h1>
      <v-btn small depressed @click="toggleDialog">
        ADD BOARD
      </v-btn>
    </div>
    <my-boards :boards="boards" />
    <v-snackbar
      v-model="snackbar"
      :timeout="3000"
      absolute
      bottom
      color="primary"
    >
      {{ snackbarText }}
    </v-snackbar>
  </v-container>
</template>

<script>
import BoardCreationForm from "~/components/BoardCreationForm"
import MyBoards from "~/components/MyBoards"

export default {
    components: { BoardCreationForm, MyBoards },
    async asyncData({ $fire, store }) {
        const userId = store.state.auth.user.uid
        const collectionUrl = `/users/${userId}/boards`

        const userBoards = (await $fire.firestore.collection(collectionUrl).get()).docs
        const boards = []

        userBoards.forEach((board) => {
            if (board.exists) { boards.push(board.data()) }
        })

        return { boards }
    },
    data() {
        return {
            snackbarText: "no error",
            snackbar: false,
            dialog: false
        }
    },
    methods: {
        toggleDialog() {
            this.dialog = !this.dialog
        }
    }
}
</script>

<style>
.v-dialog {
    width: 320px;
}
</style>
