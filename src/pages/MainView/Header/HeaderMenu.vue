<template>
  <nav>
    <div class="menuItem" v-for="{ name, routeName } in menuList" :key="routeName">
      <RouterLink :to="{ name: routeName }">
        {{ name }}
      </RouterLink>
    </div>
  </nav>
</template>

<script setup lang="ts">
import type { RouteNames } from '@/shared/config/config'

import { routeNames } from '@/shared/config/config'

interface MenuItem {
  name: string
  routeName: RouteNames
}

const menuList: Array<MenuItem> = [
  { name: 'Главная', routeName: routeNames.home },
  { name: 'Конвертация', routeName: routeNames.converter },
]
</script>

<style scoped lang="scss"></style>
