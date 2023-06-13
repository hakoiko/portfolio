<script setup lang="ts">
import Intro from './components/Intro.vue';


</script>

<template>
  <div class="app">
    <Intro />
  </div>
</template>

<style lang="scss" scoped>
.app {
  display: flex;
  place-items: start;
  background: linear-gradient(#fafaea, #ccc);
  min-height: 100dvh;
  padding: 80px;
  padding-top: 150px;
}
</style>