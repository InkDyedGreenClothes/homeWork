<template>
  <div class="home">
    Home
    <button @click="goToLogin">返回Login</button>
  </div>
</template>

<script>

export default {
  name: 'Home',
  methods: {
    goToLogin() {
      this.$router.go(-1)
    }
  }
}
</script>
