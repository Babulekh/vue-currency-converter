<template>
  <main>
    <VHeader />
    <RouterView />
  </main>
</template>

<script setup lang="ts">
import { VHeader } from './header'
</script>

<style lang="scss" scoped>
main {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
