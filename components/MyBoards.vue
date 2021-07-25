<template>
  <div class="d-flex flex-wrap align-center justify-start">
    <p v-if="boards.length === 0">
      You have no boards yet.
    </p>
    <v-card
      v-for="board in boards"
      :key="board.id"
      :style="board.image.downloadURL != '' ? `background:url(${board.image.downloadURL});`: board.color ? `background-color:${board.color}` : ''"
      class="jello-board-tile"
      @click="$router.push('/boards/' + board.id)"
    >
      <v-card-title :style="board.image.downloadURL != '' ? 'color:#fff':''">
        {{ board.title }}
      </v-card-title>
      <v-card-subtitle :style="board.image.downloadURL != '' ? 'color:#fff':''">
        created {{ board.dateCreated | formatDate }}
      </v-card-subtitle>
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

</style>
