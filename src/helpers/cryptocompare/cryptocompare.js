import config from '../../constants/config'

const corsAnywhereUrl = 'https://dether-cors-anywhere.herokuapp.com/'

const crossOriginAllowService = url => `${corsAnywhereUrl}${url}`

const buildCryptoCompareUrl = (currencies, token) => {
  const type = Array.isArray(token) ? 'pricemulti?fsyms' : 'price?fsym'

  const cryptoCompareUrl = `${config.cryptocompareApi}data/${type}=${token}&tsyms=${currencies}`

  return crossOriginAllowService(cryptoCompareUrl)
}

const buildCoinGeckoUrl = (currencies, tokens, tokenInfo) => {
  const tokenAddrs = tokens
    .reduce((acc, token) => {
      if (tokenInfo[token]) acc.push(tokenInfo[token].address)

      return acc
    }, [])
    .toString()

  const coinGeckoUrl = `${config.coinGeckoApi}simple/token_price/ethereum?contract_addresses=${tokenAddrs}&vs_currencies=${currencies}`

  return crossOriginAllowService(coinGeckoUrl)
}

// TODO: move to url builder helper
const buildTrustWalletUrl = (token, tokenAddress) =>
  Object.keys(tokenAddress).includes('mainnet')
    ? `${config.trustwalletApi}${tokenAddress.mainnet[token]}.png`
    : ''

export const converDevisToCrypto = ({ unitPrice, amount, sellRate }) => {
  const percentage = sellRate / 100
  const priceMarged = unitPrice + unitPrice * percentage

  return amount / priceMarged
}

export { buildCryptoCompareUrl, buildCoinGeckoUrl, buildTrustWalletUrl }
