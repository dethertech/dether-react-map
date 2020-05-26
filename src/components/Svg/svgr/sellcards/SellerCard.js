import React from 'react'

const SvgSellerCard = props => (
  <svg height={165} viewBox="0 0 58 58" width={165} {...props}>
    <g fill="#e24b39">
      <path d="M0 28.019L.032 28 0 27.981zM58 27.981l-.032.019.032.019zM29 11L.032 28l5.523 3.241L0 34.494l5.534 3.248-.001-.001L0 40.981 29 58l29-17.019-5.533-3.24-.001.001L58 34.494l-5.555-3.253L57.968 28z" />
    </g>
    <path d="M58 28.019L29 11 0 28.019v-.038L29 45l29-17.019z" fill="#bf4d90" />
    <path
      d="M29 45L5.555 31.241 0 34.494l29 17.019 29-17.019-5.555-3.253z"
      fill="#75348b"
    />
    <path
      d="M29 51.513L5.533 37.741 0 40.981 29 58l29-17.019-5.533-3.24z"
      fill="#bf4d90"
    />
    <circle cx={29} cy={17} fill="#57abc1" r={17} />
    <path
      d="M16 18a1 1 0 0 1-1-1c0-7.72 6.28-14 14-14a1 1 0 1 1 0 2c-6.617 0-12 5.383-12 12a1 1 0 0 1-1 1zM29 31a1 1 0 1 1 0-2c6.617 0 12-5.383 12-12a1 1 0 1 1 2 0c0 7.72-6.28 14-14 14z"
      fill="#2d6d77"
    />
    <path d="M34 19l-5-2-5 2 5-10z" fill="#3a808c" />
    <path d="M34 19l-5-2-5 2 5 6z" fill="#2d6d77" />
  </svg>
)

export default SvgSellerCard