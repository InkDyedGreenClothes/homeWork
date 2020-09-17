<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <span class="num">{{ count }}</span>
    <button @click="add">+</button>
    <button @click="subtract">-</button>
    <button @click="reset">重置</button>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  computed: {
    ...mapState(['count'])
  },
  methods: {
    add() {
      this.$store.commit('countAdd')
    },
    subtract() {
      this.$store.commit('countSubtract')
    },
    reset() {
      this.$store.commit('countReset')
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.num {
  margin-right: 10px;
}
button {
  font-size: 16px;
  width: 50px;
  margin-right: 10px;
}
</style>
