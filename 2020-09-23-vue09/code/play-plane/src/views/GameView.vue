<template>
  <container>
    <Map></Map>
    <Circle></Circle>
  </container>
</template>

<script>
import Map from "../components/Map";
import Circle from '../components/circle'

export default {
  setup() {
    return {
      Map,
      Circle
    };
  },
};
</script>

<style scoped></style>
