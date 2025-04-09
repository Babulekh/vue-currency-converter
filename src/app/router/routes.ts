import type { RouteRecordRaw } from 'vue-router'

import MainView from '@/pages/MainView'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Main',
    component: MainView,
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/pages/HomeView'),
      },
      {
        path: '',
        name: 'Home',
        component: () => import('@/pages/ConvertView'),
      },
    ],
  },
]
