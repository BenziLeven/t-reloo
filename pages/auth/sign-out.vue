<template>
  <h1>Sign Out</h1>
</template>

<script>
export default {
    name: "SignOutPage",
    async asyncData ({ $fire }) {
        await $fire.auth.signOut()
    }
}
</script>

<style scoped>

</style>
