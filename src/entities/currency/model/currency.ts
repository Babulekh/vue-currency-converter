import type { Ref } from 'vue'
import type { Currency, CurrenciesExchangeRates } from './types'

import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCurrencyStore = defineStore('currency', () => {
  const currentSelectedCurrency: Ref<Currency> = ref('RUB')

  const currenciesExchangeRates: Ref<CurrenciesExchangeRates> = ref({})

  return { currentSelectedCurrency, currenciesExchangeRates }
})
