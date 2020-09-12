<template>
  <div>
    <button @click="btnClick" :disabled="disbaledFlag">
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    btnClick () {
      if (!this.disbaledFlag) {
        this.$emit('fatherBtnClick', 'click')
      }
    }
  },
  props: {
    disbaledFlag: {
      type: Boolean
    }
  }
}
</script>

<style>
button {
    height: 30px;
    width: 50px;
    font-size: 14px;
    background: #1988FA;
    border: 1px solid #1988FA;
    color: #fff;
}
</style>
