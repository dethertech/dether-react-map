export const currencies = {
  USD: '$',
  EUR: '€',
  THB: '฿',
  MXN: '$',
  NGN: '₦',
  UAH: '₴',
  INR: '₹',
  PHP: '₱',
  VND: '₫',
  AUD: '$',
  JPY: '¥',
  CAD: '$',
  RUB: '₽',
  KRW: '₩',
  GBP: '£',
  IDR: 'Rp',
  HKD: 'HK$',
  CHF: 'CHF',
  MYR: 'RM',
  KES: 'KSh',
  PKR: '₨',
  DKK: 'kr',
  TZS: 'TSh',
  ZAR: 'R',
  PLN: 'zł',
  HTG: 'G',
  CZK: 'Kč',
  RON: 'lei',
  SEK: 'kr'
}

export const APIcurrencies = [
  'USD',
  'EUR',
  'THB',
  'MXN',
  'NGN',
  'UAH',
  'INR',
  'PHP',
  'VND',
  'AUD',
  'JPY',
  'CAD',
  'RUB',
  'KRW',
  'GBP',
  'IDR',
  'HKD',
  'CHF',
  'MYR',
  'KES',
  'PKR',
  'DKK',
  'TZS',
  'ZAR',
  'PLN'
]

export const APIcurrencies2 = [
  'USD',
  'EUR',
  'CAD',
  'GBP',
  'HTG',
  'CZK',
  'RON',
  'SEK'
]

export const currencyIds = {
  USD: 1,
  EUR: 2,
  THB: 3,
  MXN: 4,
  NGN: 5,
  UAH: 6,
  INR: 7,
  PHP: 8,
  VND: 9,
  AUD: 10,
  JPY: 11,
  CAD: 12,
  RUB: 13,
  KRW: 14,
  GBP: 15,
  IDR: 16,
  HKD: 17,
  CHF: 18,
  MYR: 19,
  KES: 20,
  PKR: 21,
  DKK: 22,
  TZS: 23,
  ZAR: 24,
  PLN: 25,
  HTG: 26,
  CZK: 27,
  RON: 28,
  SEK: 29
}

export const currencyIdsTab = [
  { value: 1, name: 'USD' },
  { value: 2, name: 'EUR' },
  { value: 3, name: 'THB' },
  { value: 4, name: 'MXN' },
  { value: 5, name: 'NGN' },
  { value: 6, name: 'UAH' },
  { value: 7, name: 'INR' },
  { value: 8, name: 'PHP' },
  { value: 9, name: 'VND' },
  { value: 10, name: 'AUD' },
  { value: 11, name: 'JPY' },
  { value: 12, name: 'CAD' },
  { value: 13, name: 'RUB' },
  { value: 14, name: 'KRW' },
  { value: 15, name: 'GBP' },
  { value: 16, name: 'IDR' },
  { value: 17, name: 'HKD' },
  { value: 18, name: 'CHF' },
  { value: 19, name: 'MYR' },
  { value: 20, name: 'KES' },
  { value: 21, name: 'PKR' },
  { value: 22, name: 'DKK' },
  { value: 23, name: 'TZS' },
  { value: 24, name: 'ZAR' },
  { value: 25, name: 'PLN' },
  { value: 26, name: 'HTG' },
  { value: 27, name: 'CZK' },
  { value: 28, name: 'RON' },
  { value: 29, name: 'SEK' }
]

export const idToCurrency = (currencyId) => {
  for (const key in currencyIds) {
    if (currencyIds[key]) {
      if (currencyIds[key] === currencyId) return key
    }
  }

  return null
}

export const currenciesList = [
  { iso: 'USD', char: '$' },
  { iso: 'EUR', char: '€' },
  { iso: 'THB', char: '฿' },
  { iso: 'MXN', char: '$' },
  { iso: 'NGN', char: '₦' },
  { iso: 'UAH', char: '₴' },
  { iso: 'INR', char: '₹' },
  { iso: 'PHP', char: '₱' },
  { iso: 'VND', char: '₫' },
  { iso: 'AUD', char: '$' },
  { iso: 'JPY', char: '¥' },
  { iso: 'CAD', char: '$' },
  { iso: 'RUB', char: '₽' },
  { iso: 'KRW', char: '₩' },
  { iso: 'GBP', char: '£' },
  { iso: 'IDR', char: 'Rp' },
  { iso: 'HKD', char: 'HK$' },
  { iso: 'CHF', char: 'CHF' },
  { iso: 'MYR', char: 'RM' },
  { iso: 'KES', char: 'KSh' },
  { iso: 'PKR', char: '₨' },
  { iso: 'DKK', char: 'kr' },
  { iso: 'TZS', char: 'TSh' },
  { iso: 'ZAR', char: 'R' },
  { iso: 'PLN', char: 'zł' },
  { iso: 'HTG', char: 'G' },
  { iso: 'CZK', char: 'Kč' },
  { iso: 'RON', char: 'lei' },
  { iso: 'SEK', char: 'kr' }
]