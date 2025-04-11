<template>
  <VCombobox
    :options="supportedCurrenciesOptions"
    v-model:selected-option-id="currentSelectedCurrency" />
</template>

<script setup lang="ts">
import type { Option } from '@/shared/ui/combobox'

import { storeToRefs } from 'pinia'
import { supportedCurrencies, useCurrencyStore } from '@/entities/currency'

import VCombobox from '@/shared/ui/combobox/VCombobox.vue'

const supportedCurrenciesOptions: Array<Option> = supportedCurrencies.map((currencyName) => ({
  id: currencyName,
  label: currencyName
}))

const { currentSelectedCurrency } = storeToRefs(useCurrencyStore())
</script>
