<template>
  <div>
    <Button @fatherBtnClick="btnClick" :disbaledFlag="disbaledFlag">点击</Button>
    <h1>刚才子组件被{{ msg }}了{{ num == 0 ? '' : num }}下</h1>
  </div>
</template>

<script>
import Button from '../components/button.vue'
export default {
  data () {
    return {
      disbaledFlag: false,
      num: 0,
      msg: ''
    }
  },
  methods: {
    btnClick (val) {
      this.msg = val
      this.num++
      console.log(`点击的时候子组件返回了=>>>${val}`)
    }
  },
  components: {
    Button
  }
}
</script>

<style>
</style>
