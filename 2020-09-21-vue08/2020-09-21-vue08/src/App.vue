<template>
  <div>
    <Button :show="show" @change="change"></Button>
    <Mousemove msg="Welcome to Your Vue.js App" v-if="show"/>
    <div style="margin-top:20px" v-else>暗号：钟老师是个好人</div>
  </div>
</template>

<script>
import Mousemove from './components/mousemove.vue'
import Button from './components/button.vue'
import {ref} from 'vue'

export default {
  name: 'App',
  components: {
    Mousemove,
    Button
  },
  setup () {
    const show = ref(true);
    const change = () => {
      show.value = !show.value;
    }
    return {
      show,
      change
    };
  }
}
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
