import React from 'react'

const SvgIconFeedback = props => (
  <svg width={24} height={24} {...props}>
    <g fill="none" fillRule="evenodd">
      <circle stroke="#00CDFF" cx={12} cy={12} r={11.5} />
      <path
        d="M11.955 18.381a6.427 6.427 0 1 0-5.452-3.022c.24.385-.564 2.607-.564 2.607s2.195-.815 2.655-.532c.978.6 2.129.947 3.36.947z"
        stroke="#00CDFF"
      />
      <path
        fill="#00CDFF"
        fillRule="nonzero"
        d="M11.804 14l-2.35 1.236.448-2.618L8 10.764l2.629-.382L11.804 8l1.176 2.382 2.628.382-1.902 1.854.45 2.618z"
      />
    </g>
  </svg>
)

export default SvgIconFeedback
