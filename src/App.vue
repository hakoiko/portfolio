<script setup lang="ts">
import Intro from './components/Intro.vue';
</script>

<template>
  <div class="app">
    <Intro />
  </div>
</template>

<style lang="scss">
@import './variables.scss';
.app {
  display: flex;
  place-items: start;
  background: linear-gradient(#fafaea, #ccc);
  min-height: 100dvh;
  padding: 80px;
  box-sizing: border-box;
  padding-top: 150px;
  @media (width < $breakpoint-mobile) {
    padding: 40px;
  }
}
</style>