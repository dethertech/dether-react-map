import { name, product, os } from 'platform'
import MobileDetect from 'mobile-detect'

import { getValueExists } from '../helpers'

const { navigator, matchMedia } = window
const mobileDetect = new MobileDetect(navigator.userAgent)
const development = process.env.NODE_ENV === 'development'

const isInWebAppiOS = Boolean(getValueExists(navigator, 'standalone'))
const isInWebAppChrome = Boolean(
  matchMedia && matchMedia('(display-mode: standalone)').matches
)
const getFamily = getValueExists(os, 'family')
const iOS = getFamily && getFamily.includes('iOS')
const iPhone = product ? product.includes('iPhone') : false
const android = getFamily && getFamily.includes('Android')
const isInMobile = !!mobileDetect.mobile()

const isSafari = iOS && (name || '').includes('Safari')
const isChrome = android && (name || '').includes('Chrome')

const isSafariBrowser = (name || '').includes('Safari')
const isChromeBrowser = (name || '').includes('Chrome')

const isWrongBrowser =
  (!development && !isInMobile) ||
  (!development && isInMobile && !(isSafari || isChrome))

// iPhone 8 and iPhone X have a same user agent. We cannot avoid using window.screen.
// This works well both in iOS Safari and (UI|WK)WebView of iPhone X.
// https://github.com/OnsenUI/OnsenUI/blob/e510ed9c2e55a662c07dc56f4fa4f619719b1dde/core/src/ons/platform.js#L109
const iPhoneX =
  iPhone &&
  ((window.screen.width === 375 && window.screen.height === 812) ||
    (window.screen.width === 812 && window.screen.height === 375))

export default {
  standalone: development || isInWebAppiOS || isInWebAppChrome,
  compatible: development || isSafari || isChrome,
  iPhone: development || iPhone,
  iOS,
  android,
  mobile: development || isInMobile,
  iPhoneX,
  isChrome: isChromeBrowser,
  isSafari: isSafariBrowser,
  development,
  isWrongBrowser,
  isInMobile
}
