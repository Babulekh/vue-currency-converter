import type { CurrenciesExchangeRates } from '../model/types'

export const getCurrenciesExchangeRates = async (): Promise<CurrenciesExchangeRates> => {
  const currenciesExcahngeRatesDTO = await fetch('https://status.neuralgeneration.com/api/currency')

  const currenciesExcahngeRates: CurrenciesExchangeRates = await currenciesExcahngeRatesDTO.json()

  return currenciesExcahngeRates
}
