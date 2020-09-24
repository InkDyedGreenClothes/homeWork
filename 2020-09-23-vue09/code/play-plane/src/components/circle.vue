<template>
  <container>
    <circle :x="x" :y="y"> </circle>
  </container>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import { game } from "../game";
// export { default as mapImg } from "../assets/map.jpg";

// 暗号 海哥还单身

const viewHeight = 500;
const viewWidth = 750;
const x = ref(0);
const y = ref(viewHeight);

// 滚动
const speed = 5;
function handleTickerAdd() {
  x.value += speed;
  // y.value += speed;
  if (x.value >= viewWidth) {
    game.ticker.remove(handleTickerAdd);
    game.ticker.add(handleTickerReduction);
  }
}
function handleTickerReduction() {
  x.value -= speed;
  if (x.value == 0) {
    
    game.ticker.remove(handleTickerReduction);
    game.ticker.add(handleTickerAdd);
  }
}
onMounted(() => {
  console.log('onMounted');
  game.ticker.add(handleTickerAdd);
});

onUnmounted(() => {
  console.log('onUnmounted');
  game.ticker.remove(handleTickerAdd);
  game.ticker.remove(handleTickerReduction);
});

export { x, y };

</script>

<style scoped></style>
