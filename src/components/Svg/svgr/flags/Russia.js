import React from 'react'

const SvgRussia = props => (
  <svg width={24} height={24} {...props}>
    <g transform="translate(2 2)" fill="none" fillRule="evenodd">
      <circle
        stroke="#E6E6E6"
        strokeWidth={2}
        fill="#FFF"
        fillRule="nonzero"
        cx={9.967}
        cy={9.967}
        r={10.967}
      />
      <circle fill="#F0F0F0" cx={10} cy={10} r={10} />
      <path
        d="M19.378 13.478A9.978 9.978 0 0 0 20 10c0-1.223-.22-2.395-.622-3.478H.622A9.979 9.979 0 0 0 0 10c0 1.223.22 2.395.622 3.478l9.378.87 9.378-.87z"
        fill="#0052B4"
      />
      <path
        d="M10 20c4.3 0 7.965-2.714 9.378-6.522H.622A10.004 10.004 0 0 0 10 20z"
        fill="#D80027"
      />
    </g>
  </svg>
)

export default SvgRussia
