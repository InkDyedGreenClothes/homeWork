<template>
  <div>
      Login
      <button @click="toHome">去Honme</button>
  </div>
</template>

<script>
export default {
    methods: {
        toHome() {
            this.$router.push('/Home')
        }
    }
}
</script>

<style>

</style>