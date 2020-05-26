/**
 * Routes
 */
const routes = {
  // Home page
  home: '/',

  // Settings
  settings: '/settings',
  'settings.verification': '/settings/verification',
  'settings.currency': '/settings/currency',
  'settings.faq': '/settings/faq',
  'settings.report': '/settings/report',
  'settings.contact': '/settings/contact',
  'settings.languages': '/settings/languages',

  'settings.walletinfo': '/settings/walletinfo',
  'settings.referral': '/settings/referral',
  'settings.logout': '/settings/logout',
  // Terms and conditions & Privacy Policy
  'settings.terms': '/settings/terms',
  'settings.privacy': '/settings/privacy-policy',
  // temp only for debug purpose
  'settings.debugredux': '/settings/debugredux',

  // OnBoarding
  onboarding: '/onboarding',
  'onboarding.create.wallet': '/onboarding/create-wallet',
  'onboarding.create.password': '/onboarding/create-password',
  'onboarding.import.wallet': '/onboarding/import-wallet',
  'onboarding.install': '/onboarding/install',
  'onboarding.wrongBrowser': '/onboarding/wrongBrowser',
  'onboarding.languages': '/onboarding/languages',

  chat: '/chat',
  'chat.channel': '/chat/channel',
  'chat.inbox': '/chat/inbox',

  // Wallet
  wallet: '/wallet',
  'wallet.exchange': '/wallet/exchange',
  'wallet.send': '/wallet/send',

  // Map
  map: '/map',

  // Sell
  sell: '/sell', // CreatePoint.js
  'sell.zone': '/sell/zone', // SelectZone.js
  'sell.staking': `/sell/staking/:location`, // ZoneStaking.js
  'sell.setup': '/sell/setup/:location', // SetUp.js
  'sell.bid': '/sell/bid/:location', // Bid.js
  'sell.bid.current': '/sell/bid/current/:location', // Bid.js
  'sell.bid.ended': '/sell/bid/ended', // BidEnded.js
  'sell.dashboard': '/sell/dashboard', // Dashboard.js
  'sell.settings': '/sell/settings', // Settings.js
  'sell.cash': '/sell/cash', // SellCash.js
  'sell.crypto': '/sell/crypto', //SellCrypto.js
  'sell.myshop': '/sell/shop/myshop',
  'sell.editshop': '/sell/shop/edit',
  'sell.deleteshops': '/sell/shop/delete',

  // Shop
  shop: '/shop',
  'shop.zone': '/shop/zone',
  'shop.staking': `/shop/staking/:location/:country`,
  'shop.dashboard': '/shop/dashboard',
  'shop.topup': '/shop/dashboard/topup',

  // Error & Maintenance
  error: '/404',
  maintenance: '/maintenance',

  // Terms and conditions & Privacy Policy
  terms: '/terms-and-conditions',
  privacy: '/privacy-policy',
}

export const secureRoutes = [
  'wallet',
  'map',
  'sell',
  'settings',
  'chat',
  'shop',
]

export default routes
