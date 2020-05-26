/* global test expect */

/**
 * Constants
 */
import routes from './routes'

/**
 * TESTS
 */
test('routes constants', () => {
  expect(routes).toEqual({
    // Home page
    home: '/',

    // Settings
    settings: '/settings',
    'settings.avatar': '/settings/avatar',
    'settings.language': '/settings/language',
    'settings.password': '/settings/password',

    // OnBoarding
    onboarding: '/onboarding',
    'onboarding.create.wallet': '/onboarding/create-wallet',
    'onboarding.create.password': '/onboarding/create-password',
    'onboarding.import.wallet': '/onboarding/import-wallet',

    // Wallet
    wallet: '/wallet',

    // Map
    map: '/map',

    // Sell
    sell: '/sell',

    // Error & Maintenance
    error: '/404',
    maintenance: '/maintenance',

    // Terms and conditions & Privacy Policy
    terms: '/terms-and-contiditons',
    privacy: '/privacy-policy',
  })
})
