<template>
  <div class="photoItem">
    <img :src="imgUrl" />
    <span>
      {{ imgName }}
    </span>
  </div>
</template>

<script>
export default {
  props: ["imgName", "imgUrl"],
};
</script>

<style scoped></style>
