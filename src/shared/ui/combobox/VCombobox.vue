<template>
  <div
    class="dropdown"
    ref="dropdown">
    <div
      class="value"
      @click="toggleDropdown">
      {{ selectedLabel }}
    </div>
    <div
      class="options"
      :class="{ visible: isDropdownOpened }">
      <div
        v-for="{ id, label } in options"
        :key="id"
        class="option"
        @click="selectOption(id)">
        {{ label }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Ref } from 'vue'

import { computed, ref, useTemplateRef } from 'vue'
import { onClickOutside } from '@vueuse/core'

export interface Option {
  id: string
  label: string
}

interface Props {
  options: Array<Option>
}

const { options } = defineProps<Props>()

const selectedOptionId = defineModel<string>('selectedOptionId', { default: null })
const selectedLabel = computed<string>(
  () => options.find(({ id }) => selectedOptionId.value === id)?.label ?? ''
)
const selectOption = (optionId: string) => {
  selectedOptionId.value = optionId
  closeDropdown()
}

const isDropdownOpened: Ref<boolean> = ref(false)
const toggleDropdown = () => (isDropdownOpened.value = !isDropdownOpened.value)
const closeDropdown = () => (isDropdownOpened.value = false)

const dropdownElement = useTemplateRef<HTMLDivElement>('dropdown')
onClickOutside(dropdownElement, closeDropdown)
</script>

<style scoped lang="scss">
.dropdown {
  position: relative;
}

.value {
  padding: 4px 8px;
  border: 1px solid gray;
  border-radius: 8px;
  background: white;
  cursor: pointer;
  user-select: none;
}

.options {
  display: none;
  padding: 4px;
  position: absolute;
  top: calc(100% + 4px);
  border: 1px solid gray;
  border-radius: 8px;
  background: white;

  &.visible {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
}

.option {
  padding: 0 4px;
  border-radius: 8px;
  cursor: pointer;
  user-select: none;

  &:hover {
    background: lightblue;
  }
}
</style>
