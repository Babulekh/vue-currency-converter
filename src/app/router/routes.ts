import type { RouteRecordRaw } from 'vue-router'

import MainView from '@/pages/MainView'

import { routeNames } from '@/shared/config/config'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: routeNames.main,
    component: MainView,
    children: [
      {
        path: '',
        name: routeNames.home,
        component: () => import('@/pages/HomeView'),
      },
      {
        path: 'convert',
        name: routeNames.converter,
        component: () => import('@/pages/ConvertView'),
      },
    ],
  },
]
