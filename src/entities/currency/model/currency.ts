import type { Ref } from 'vue'
import type { Currency } from '@/shared/config'
import type { CurrenciesExchangeRates } from './types'

import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCurrencyStore = defineStore('currency', () => {
  const currentSelectedCurrency: Ref<Currency> = ref('RUB')
  const currenciesExchangeRates: Ref<CurrenciesExchangeRates> = ref({})
  const getExchangeRate = (tickerFrom: Currency, tickerTo: Currency): number => {
    const pairName = `${tickerFrom}-${tickerTo}`.toLowerCase()
    return currenciesExchangeRates.value[pairName] ?? 0
  }

  return { currentSelectedCurrency, currenciesExchangeRates, getExchangeRate }
})
