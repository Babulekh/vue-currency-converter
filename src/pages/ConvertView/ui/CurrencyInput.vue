<template>
  <input
    class="currencyInput"
    type="number"
    v-model="amount"
    @input="emit('convert')" />
</template>

<script setup lang="ts">
const emit = defineEmits<{ (e: 'convert'): void }>()
const amount = defineModel<number | string>('amount', { default: '' })
</script>

<style scoped lang="scss">
.currencyInput {
  border-radius: 8px;
  border: 1px solid gray;
  outline: none;
  appearance: none;
  -moz-appearance: textfield;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
}
</style>
