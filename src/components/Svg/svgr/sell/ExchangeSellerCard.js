import React from 'react'

const SvgExchangeSellerCard = props => (
  <svg width={135} height={170} {...props}>
    <defs>
      <path
        d="M34.193 95.053c22.567-28.32 33.85-48.712 33.85-61.175 0-18.695-15.155-33.85-33.85-33.85S.343 15.183.343 33.878c0 12.463 11.283 32.855 33.85 61.175z"
        id="ExchangeSellerCard_svg__a"
      />
    </defs>
    <g transform="translate(-54 -25)" fill="none" fillRule="evenodd">
      <path
        d="M93.492 121.99a2 2 0 0 0-1.26.446l-36.123 29.29a2 2 0 0 0 1.26 3.553h124.228a2 2 0 0 0 1.26-3.554l-36.123-29.289a2 2 0 0 0-1.26-.446H93.493z"
        stroke="#2A2B43"
        strokeWidth={2}
      />
      <g transform="translate(83.624 49.123)">
        <use fill="#FFF" xlinkHref="#ExchangeSellerCard_svg__a" />
        <path
          stroke="#4B53B6"
          strokeWidth={2}
          d="M34.193 93.446c21.906-27.634 32.85-47.553 32.85-59.568 0-18.142-14.708-32.85-32.85-32.85-18.143 0-32.85 14.708-32.85 32.85 0 12.015 10.944 31.934 32.85 59.568z"
        />
        <circle
          stroke="#4B53B6"
          strokeWidth={2}
          cx={34.193}
          cy={34.953}
          r={17.156}
        />
      </g>
      <g
        transform="translate(154.973 126.043)"
        stroke="#4B53B6"
        strokeWidth={2}
      >
        <ellipse cx={16.26} cy={33.67} rx={16.26} ry={6.695} />
        <ellipse fill="#FFF" cx={16.26} cy={28.697} rx={16.26} ry={6.695} />
        <ellipse fill="#FFF" cx={16.26} cy={23.339} rx={16.26} ry={6.695} />
        <ellipse fill="#FFF" cx={16.26} cy={17.981} rx={16.26} ry={6.695} />
        <ellipse fill="#FFF" cx={16.26} cy={12.622} rx={16.26} ry={6.695} />
        <ellipse fill="#FFF" cx={16.26} cy={7.264} rx={16.26} ry={6.695} />
      </g>
      <path
        d="M117.719 35.709v-9.41M76.064 57.625l-6.537-6.769M159.142 57.393l6.77-6.537"
        stroke="#4B53B6"
        strokeWidth={2}
        strokeLinecap="round"
      />
      <ellipse fill="#F7F7F7" cx={118} cy={190} rx={47} ry={5} />
    </g>
  </svg>
)

export default SvgExchangeSellerCard
