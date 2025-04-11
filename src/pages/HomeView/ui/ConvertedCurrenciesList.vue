<template>
  <div class="currenciesList">
    <div
      v-for="{ id, convertedValue } in convertedCurrenciesList"
      :key="id"
      class="currency">
      {{ id }} - {{ convertedValue.toFixed(2) }} {{ currentSelectedCurrency }}
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Currency } from '@/shared/config'

import { computed } from 'vue'
import { storeToRefs } from 'pinia'

import { supportedCurrencies } from '@/shared/config'
import { useCurrencyStore } from '@/entities/currency'

const { currentSelectedCurrency } = storeToRefs(useCurrencyStore())
const { getExchangeRate } = useCurrencyStore()

const convertedCurrenciesList = computed<Array<{ id: Currency; convertedValue: number }>>(() =>
  supportedCurrencies
    .filter((currencyName) => currencyName !== currentSelectedCurrency.value)
    .map((currencyName) => ({
      id: currencyName,
      convertedValue: getExchangeRate(currencyName, currentSelectedCurrency.value)
    }))
)
</script>

<style scoped lang="scss">
.currenciesList {
  padding: 8px;
  border: 1px solid gray;
  border-radius: 8px;
}
</style>
