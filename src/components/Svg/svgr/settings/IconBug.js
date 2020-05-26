import React from 'react'

const SvgIconBug = props => (
  <svg width={25} height={24} {...props}>
    <g transform="translate(.456)" fill="none" fillRule="evenodd">
      <circle stroke="#919197" cx={12} cy={12.04} r={11.455} />
      <circle fill="#919197" cx={11.999} cy={19.286} r={1} />
      <path
        d="M11.992 15.424V5.457"
        stroke="#919197"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
)

export default SvgIconBug
