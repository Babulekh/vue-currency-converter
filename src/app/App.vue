<template>
  <RouterView />
</template>

<script setup lang="ts">
import { getCurrenciesExchangeRates, useCurrencyStore } from '@/entities/currency'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'

const { currenciesExchangeRates } = storeToRefs(useCurrencyStore())

onMounted(async () => {
  currenciesExchangeRates.value = await getCurrenciesExchangeRates()
})
</script>
