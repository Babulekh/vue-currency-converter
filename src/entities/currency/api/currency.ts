import type { CurrenciesExcahngeRates } from '../model'

export const getCurrenciesExchangeRates = async (): Promise<CurrenciesExcahngeRates> => {
  const currenciesExcahngeRatesDTO = await fetch('https://status.neuralgeneration.com/api/currency')

  const currenciesExcahngeRates: CurrenciesExcahngeRates = await currenciesExcahngeRatesDTO.json()

  return currenciesExcahngeRates
}
