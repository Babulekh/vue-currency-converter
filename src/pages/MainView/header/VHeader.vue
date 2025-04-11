<template>
  <header>
    <HeaderMenu />
    <CurrencyDropdown v-model:selected-currency="currentSelectedCurrency" />
  </header>
</template>

<script setup lang="ts">
import { CurrencyDropdown, useCurrencyStore } from '@/entities/currency'
import HeaderMenu from './HeaderMenu.vue'
import { storeToRefs } from 'pinia'

const { currentSelectedCurrency } = storeToRefs(useCurrencyStore())
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
