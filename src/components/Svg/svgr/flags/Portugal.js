import React from 'react'

const SvgPortugal = props => (
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
      <path
        d="M0 10c0 4.3 2.714 7.965 6.522 9.378L7.392 10 6.521.622A10.004 10.004 0 0 0 0 10z"
        fill="#6DA544"
      />
      <path
        d="M20 10c0-5.523-4.477-10-10-10a9.98 9.98 0 0 0-3.478.622v18.756A9.978 9.978 0 0 0 10 20c5.523 0 10-4.477 10-10z"
        fill="#D80027"
      />
      <circle fill="#FFDA44" cx={6.522} cy={10} r={3.478} />
      <path
        d="M4.565 8.26v2.175a1.957 1.957 0 1 0 3.913 0V8.26H4.565z"
        fill="#D80027"
      />
      <path
        d="M6.522 11.087a.653.653 0 0 1-.652-.652v-.87h1.304v.87c0 .36-.293.652-.652.652z"
        fill="#F0F0F0"
      />
    </g>
  </svg>
)

export default SvgPortugal
