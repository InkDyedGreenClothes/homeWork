<template>
  <div>
    <button @click="handleClick">显示隐藏helloWorld</button>
  </div>
</template>

<script>
// import {ref} from 'vue'
export default {
  setup(props, { emit }) {
    const handleClick = () => {
      // console.log('我被点了');
      emit('change')
    }

    return {
      handleClick
    }
  }
}
</script>

<style scoped>
</style>