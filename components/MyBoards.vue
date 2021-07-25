<template>
  <div class="d-flex flex-wrap align-center justify-start" style="margin: 0 -12px;">
    <p v-if="boards.length === 0">
      You have no boards yet.
    </p>
    <v-card
      v-for="board in boards"
      :key="board.id"
      :style="`background-color:${board.background_color}`"
      class="jello-board-tile"
      @click="$router.push('/boards/' + board.id)"
    >
      <v-card-title>
        {{ board.title }}
      </v-card-title>
    </v-card>
    <v-form />
  </div>
</template>

<script>
export default {
    name: "MyBoards",
    props: {
        boards: {
            type: Array,
            required: true,
            default: () => []
        }
    }
}
</script>

<style scoped>
.jello-board-tile {
    margin: 12px;
    width: 240px;
    height: 160px;
}

.v-card__title {
word-break: keep-all;
}
</style>
