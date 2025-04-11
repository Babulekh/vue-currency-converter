<template>
  <div class="home">
    <ConvertedCurrenciesList />
  </div>
</template>

<script setup lang="ts">
import { ConvertedCurrenciesList } from './ui'
</script>

<style scoped style="scss">
.home {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
}
</style>
