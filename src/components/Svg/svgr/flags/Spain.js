import React from 'react'

const SvgSpain = props => (
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
        d="M0 10c0 1.223.22 2.395.622 3.478l9.378.87 9.378-.87A9.979 9.979 0 0 0 20 10c0-1.223-.22-2.395-.622-3.478L10 5.652l-9.378.87A9.979 9.979 0 0 0 0 10z"
        fill="#FFDA44"
      />
      <g fill="#D80027">
        <path d="M19.378 6.522a10.004 10.004 0 0 0-18.756 0h18.756zM.622 13.478a10.004 10.004 0 0 0 18.756 0H.622z" />
      </g>
    </g>
  </svg>
)

export default SvgSpain
