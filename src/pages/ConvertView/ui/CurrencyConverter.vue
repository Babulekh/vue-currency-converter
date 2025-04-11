<template>
  <div class="currencyConverter">
    <div class="currency">
      <CurrencyInput
        v-model:amount="amountToSend"
        @convert="convertFromSentCurrency" />
      <CurrencyDropdown v-model:selected-currency="sendTicker" />
    </div>
    <div class="currency">
      <CurrencyInput
        v-model:amount="amountToReceive"
        @convert="convertToSentCurrency" />
      <CurrencyDropdown v-model:selected-currency="receiveTicker" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Ref } from 'vue'
import type { Currency } from '@/shared/config'

import { computed, ref, watch } from 'vue'
import { storeToRefs } from 'pinia'

import { CurrencyDropdown, useCurrencyStore } from '@/entities/currency'
import CurrencyInput from './CurrencyInput.vue'

const { currenciesExchangeRates } = storeToRefs(useCurrencyStore())
const { getExchangeRate } = useCurrencyStore()

const sendTicker: Ref<Currency> = ref('USD')
const receiveTicker: Ref<Currency> = ref('RUB')
const currentExchangeRate: Ref<number> = computed(() =>
  getExchangeRate(sendTicker.value, receiveTicker.value)
)
watch([sendTicker, receiveTicker], ([newTicker1, newTicker2], [oldTicker1, oldTicker2]) => {
  if (newTicker1 === newTicker2) {
    sendTicker.value = oldTicker1
    receiveTicker.value = oldTicker2
  } else {
    if (newTicker1 !== oldTicker1) convertFromSentCurrency()
    if (newTicker2 !== oldTicker2) convertToSentCurrency()
  }
})

const amountToSend: Ref<string | number> = ref(1000)
const amountToReceive: Ref<string | number> = ref(0)

const formatAmount = (amount: string | number): number => {
  amount = Math.abs(Number(amount))
  const match = String(amount).match(/^(\d+)(\.\d{0,2})?/)

  if (match?.[2]) return Number(match?.[0]) ?? 0
  return Number(amount)
}

const convertFromSentCurrency = () => {
  amountToSend.value = formatAmount(amountToSend.value)
  amountToReceive.value = formatAmount(amountToSend.value * currentExchangeRate.value)
}
const convertToSentCurrency = () => {
  amountToReceive.value = formatAmount(amountToReceive.value)
  amountToSend.value = formatAmount(amountToReceive.value / currentExchangeRate.value)
}

watch(currenciesExchangeRates, convertFromSentCurrency, { immediate: true })
</script>

<style scoped lang="scss">
.currencyConverter {
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  border: 1px solid gray;
  border-radius: 8px;
}

.currency {
  display: flex;
  gap: 4px;
}
</style>
