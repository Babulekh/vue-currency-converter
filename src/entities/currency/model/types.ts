export type CurrenciesExchangeRates = Record<string, number>

export const supportedCurrencies = ['USD', 'EUR', 'RUB'] as const satisfies Array<string>
export type Currency = (typeof supportedCurrencies)[number]
