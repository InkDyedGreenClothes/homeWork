<template>
  <div id="app">
    <Photo></Photo>
  </div>
</template>

<script>
import Photo from "./view/Photo";
export default {
  name: "App",
  components: {
    Photo,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
