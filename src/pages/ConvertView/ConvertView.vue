<template>
  <div class="convert">
    <CurrencyConverter />
  </div>
</template>

<script setup lang="ts">
import { CurrencyConverter } from './ui'
</script>

<style scoped lang="scss">
.convert {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
}
</style>
