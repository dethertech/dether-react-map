/* eslint-disable */

const KYC_URL = process.env.REACT_APP_KYC_URL || ''

const CODE_REF_API_URL = process.env.REACT_APP_REF_URL || ''
const SEND_DTH_API_URL = process.env.REACT_APP_SEND_API || ''
/**
 * App Config
 */
const config = {
  BLOCKCYPHER_TOKEN: process.env.REACT_APP_BLOCKCYPHER_API_TOKEN,
  ENTRY_FEE: Number(process.env.REACT_APP_ENTRY_FEE),
  MIN_RAISE: Number(process.env.REACT_APP_MIN_RAISE),
  BID_PERIOD: Number(process.env.REACT_APP_BID_PERIOD),
  COOLDOWN_PERIOD_BID: process.env.REACT_APP_COOLDWON_PERIOD_BID,
  // Languages
  APP_DEFAULT_LANGUAGE: process.env.REACT_APP_DEFAULT_LANGUAGE || 'en',
  // Maintenance
  APP_MAINTENANCE: process.env.REACT_APP_MAINTENANCE === 'true' || false,
  network: process.env.REACT_APP_ETH_NETWORK || 'kovan',
  btcNetwork: process.env.REACT_APP_BTC_NETWORK || 'testnet',
  rpcURL: process.env.REACT_APP_RPC_URL || '',
  cryptocompareApi: process.env.REACT_APP_CRYPTOCOMPARE_API || '',
  coinGeckoApi: process.env.REACT_APP_COINGECKO_API || '',
  trustwalletApi: process.env.REACT_APP_TRUSTWALLET_API || '',
  defaultPriceHTG: Number(process.env.REACT_APP_PRICE_HTG) || 69.85,
  defaultGasPrice: 14000000000,
  defaultGasLimit: 500000,
  certifierID: process.env.REACT_APP_CERTIFIER_ID,
  codeRefApi: {
    url: CODE_REF_API_URL,
    createRef: `${CODE_REF_API_URL}/createRef`,
    getAddress: `${CODE_REF_API_URL}/getAddress`,
  },
  sendDthApi: {
    url: SEND_DTH_API_URL,
    sendDth: `${SEND_DTH_API_URL}/sendReferrer`,
  },
  kyc: {
    url: KYC_URL,
    sendUrl: `${KYC_URL}/sms/`,
    verifUrl: `${KYC_URL}/sms/verif`,
  },
  pinataApiKey: process.env.REACT_APP_PINATA_API_KEY || '',
  pinataSecretApiKey: process.env.REACT_APP_PINATA_SECRET_API_KEY || '',
  braveBrowserVersion: process.env.REACT_APP_BRAVE_BROWSER_VERSION || 'Brave',
  abiErc20: [
    {
      constant: true,
      inputs: [],
      name: 'name',
      outputs: [
        {
          name: '',
          type: 'bytes32',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [],
      name: 'stop',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          name: 'guy',
          type: 'address',
        },
        {
          name: 'wad',
          type: 'uint256',
        },
      ],
      name: 'approve',
      outputs: [
        {
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          name: 'owner_',
          type: 'address',
        },
      ],
      name: 'setOwner',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'totalSupply',
      outputs: [
        {
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          name: 'src',
          type: 'address',
        },
        {
          name: 'dst',
          type: 'address',
        },
        {
          name: 'wad',
          type: 'uint256',
        },
      ],
      name: 'transferFrom',
      outputs: [
        {
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'decimals',
      outputs: [
        {
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          name: 'guy',
          type: 'address',
        },
        {
          name: 'wad',
          type: 'uint256',
        },
      ],
      name: 'mint',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          name: 'wad',
          type: 'uint256',
        },
      ],
      name: 'burn',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          name: 'name_',
          type: 'bytes32',
        },
      ],
      name: 'setName',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          name: 'src',
          type: 'address',
        },
      ],
      name: 'balanceOf',
      outputs: [
        {
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'stopped',
      outputs: [
        {
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          name: 'authority_',
          type: 'address',
        },
      ],
      name: 'setAuthority',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'owner',
      outputs: [
        {
          name: '',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'symbol',
      outputs: [
        {
          name: '',
          type: 'bytes32',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          name: 'guy',
          type: 'address',
        },
        {
          name: 'wad',
          type: 'uint256',
        },
      ],
      name: 'burn',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          name: 'wad',
          type: 'uint256',
        },
      ],
      name: 'mint',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          name: 'dst',
          type: 'address',
        },
        {
          name: 'wad',
          type: 'uint256',
        },
      ],
      name: 'transfer',
      outputs: [
        {
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          name: 'dst',
          type: 'address',
        },
        {
          name: 'wad',
          type: 'uint256',
        },
      ],
      name: 'push',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          name: 'src',
          type: 'address',
        },
        {
          name: 'dst',
          type: 'address',
        },
        {
          name: 'wad',
          type: 'uint256',
        },
      ],
      name: 'move',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [],
      name: 'start',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'authority',
      outputs: [
        {
          name: '',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          name: 'guy',
          type: 'address',
        },
      ],
      name: 'approve',
      outputs: [
        {
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          name: 'src',
          type: 'address',
        },
        {
          name: 'guy',
          type: 'address',
        },
      ],
      name: 'allowance',
      outputs: [
        {
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          name: 'src',
          type: 'address',
        },
        {
          name: 'wad',
          type: 'uint256',
        },
      ],
      name: 'pull',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          name: 'symbol_',
          type: 'bytes32',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          name: 'guy',
          type: 'address',
        },
        {
          indexed: false,
          name: 'wad',
          type: 'uint256',
        },
      ],
      name: 'Mint',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          name: 'guy',
          type: 'address',
        },
        {
          indexed: false,
          name: 'wad',
          type: 'uint256',
        },
      ],
      name: 'Burn',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          name: 'authority',
          type: 'address',
        },
      ],
      name: 'LogSetAuthority',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          name: 'owner',
          type: 'address',
        },
      ],
      name: 'LogSetOwner',
      type: 'event',
    },
    {
      anonymous: true,
      inputs: [
        {
          indexed: true,
          name: 'sig',
          type: 'bytes4',
        },
        {
          indexed: true,
          name: 'guy',
          type: 'address',
        },
        {
          indexed: true,
          name: 'foo',
          type: 'bytes32',
        },
        {
          indexed: true,
          name: 'bar',
          type: 'bytes32',
        },
        {
          indexed: false,
          name: 'wad',
          type: 'uint256',
        },
        {
          indexed: false,
          name: 'fax',
          type: 'bytes',
        },
      ],
      name: 'LogNote',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          name: 'src',
          type: 'address',
        },
        {
          indexed: true,
          name: 'guy',
          type: 'address',
        },
        {
          indexed: false,
          name: 'wad',
          type: 'uint256',
        },
      ],
      name: 'Approval',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          name: 'src',
          type: 'address',
        },
        {
          indexed: true,
          name: 'dst',
          type: 'address',
        },
        {
          indexed: false,
          name: 'wad',
          type: 'uint256',
        },
      ],
      name: 'Transfer',
      type: 'event',
    },
  ],
}

export default config
