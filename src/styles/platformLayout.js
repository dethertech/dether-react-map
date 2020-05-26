import platform from '../constants/platform'

export const layoutScroll = platform.android
  ? {
      height: window.innerHeight,
      maxHeight: window.innerHeight,
      WebkitOverflowScrolling: 'touch',
      overflow: 'auto'
    }
  : {
      height: window.innerHeight,
      maxHeight: window.innerHeight,
      WebkitOverflowScrolling: 'touch',
      overflow: 'auto'
    }

export const bottomPadding = platform.android
  ? {
      display: 'block',
      height: '125px',
      width: '100%'
    }
  : {}
