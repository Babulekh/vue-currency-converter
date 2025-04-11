<template>
  <nav class="menu">
    <RouterLink
      v-for="{ name, routeName } in menuList"
      :key="routeName"
      class="menuItem"
      :to="{ name: routeName }">
      {{ name }}
    </RouterLink>
  </nav>
</template>

<script setup lang="ts">
import type { RouteNames } from '@/shared/config'

import { routeNames } from '@/shared/config'

interface MenuItem {
  name: string
  routeName: RouteNames
}

const menuList: Array<MenuItem> = [
  { name: 'Главная', routeName: routeNames.home },
  { name: 'Конвертация', routeName: routeNames.converter }
]
</script>

<style scoped lang="scss">
.menu {
  display: flex;
  gap: 8px;
}

.menuItem {
  padding: 2px 4px;
  border: 1px solid gray;
  border-radius: 8px;
  color: black;
  text-decoration: none;
  background: white;

  &.router-link-exact-active {
    background: gray;
  }
}
</style>
