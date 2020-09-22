<template>
  <div class="hello">
    <h1>鼠标当前位置</h1>
    x : {{ x }} ------ y : {{ y }}
  </div>
</template>

<script>
import { useMousePosition } from '../use/useMousePosition'
import { toRefs } from 'vue'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup() {
    const position = useMousePosition();

    const { x, y } = toRefs(position);
  
    return {
      x, y
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
