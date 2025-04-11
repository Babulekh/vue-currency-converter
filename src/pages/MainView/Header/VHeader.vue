<template>
  <header>
    <HeaderMenu />
    <CurrencyDropdown />
  </header>
</template>

<script setup lang="ts">
import CurrencyDropdown from './CurrencyDropdown.vue'
import HeaderMenu from './HeaderMenu.vue'
</script>

<style scoped lang="scss">
header {
  padding: 16px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: teal;
}
</style>
