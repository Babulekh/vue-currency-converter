<template>
  <VCombobox
    :options="supportedCurrenciesOptions"
    v-model:selected-option-id="selectedCurrency" />
</template>

<script setup lang="ts">
import type { Currency } from '@/shared/config'
import type { Option } from '@/shared/ui/combobox'

import { supportedCurrencies } from '@/shared/config'

import { VCombobox } from '@/shared/ui/combobox'

const supportedCurrenciesOptions: Array<Option> = supportedCurrencies.map((currencyName) => ({
  id: currencyName,
  label: currencyName
}))

const selectedCurrency = defineModel<Currency>('selectedCurrency', { default: 'RUB' })
</script>
