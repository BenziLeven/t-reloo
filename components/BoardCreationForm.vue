<template>
  <v-container class="d-block">
    <v-col>
      <v-row no-gutters align="center">
        <v-row no-gutters>
          <h3>Add Board</h3>
        </v-row>
        <v-icon @click="closeDialog">
          mdi-close
        </v-icon>
      </v-row>
      <v-form>
        <div class="d-flex flex-column">
          <v-text-field
            v-model="board.title"
            label="Board title"
            name="title"
            type="text"
            :rules="[(v) => !!v || 'Board title is required']"
            required
          />
          <v-color-picker
            v-model="board.color"
            dot-size="25"
            hide-inputs
            swatches-max-height="100"
            class="color-picker"
          />
          <v-btn
            :disabled="!valid"
            color="primary"
            @click="createBoard"
          >
            Submit
          </v-btn>
        </div>
      </v-form>
    </v-col>
  </v-container>
</template>

<script>
export default {
    name: "BoardCreationForm",
    data() {
        return {
            board: {
                title: "",
                color: ""
            }
        }
    },
    computed: {
        valid() {
            return this.board.title.length > 0
        }
    },
    methods: {
        createBoard() {
            this.closeDialog()
        },
        closeDialog() {
            this.$emit("close-dialog")
        }
    }
}
</script>

<style>
.v-color-picker {
    width: 100%;
    margin-bottom: 32px;
}
</style>
