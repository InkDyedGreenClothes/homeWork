<template>
  <div>
      <Login></Login>
      <button @click="toHome">去Honme</button>
  </div>
</template>

<script>
import Login from '@/components/Login'
export default {
    methods: {
        toHome() {
            this.$router.push('/Home')
        }
    },
    components: {
        Login
    }
}
</script>

<style>

</style>