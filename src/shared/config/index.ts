export const routeNames = {
  main: 'mainView',
  home: 'homeView',
  converter: 'converterView'
} as const satisfies Record<string, string>
export type RouteNames = (typeof routeNames)[keyof typeof routeNames]

export const supportedCurrencies = ['USD', 'EUR', 'RUB'] as const satisfies Array<string>
export type Currency = (typeof supportedCurrencies)[number]
