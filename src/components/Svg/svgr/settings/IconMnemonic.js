import React from 'react'

const SvgIconMnemonic = props => (
  <svg width={24} height={24} {...props}>
    <defs>
      <rect
        id="icon_mnemonic_svg__a"
        x={0.13}
        y={6.441}
        width={9.671}
        height={9.295}
        rx={2}
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <g transform="translate(6.939 3.718)">
        <path
          d="M4.966.502A3.516 3.516 0 0 0 1.45 4.018v4.903a2.5 2.5 0 0 0 2.5 2.5h2.032a2.5 2.5 0 0 0 2.5-2.5V4.018A3.516 3.516 0 0 0 4.966.502z"
          stroke="#4AC59A"
        />
        <use fill="#FFF" xlinkHref="#icon_mnemonic_svg__a" />
        <rect
          stroke="#4AC59A"
          x={0.63}
          y={6.941}
          width={8.671}
          height={8.295}
          rx={2}
        />
        <rect
          fill="#4AC59A"
          x={4.613}
          y={9.483}
          width={1}
          height={3.292}
          rx={0.5}
        />
        <circle fill="#4AC59A" cx={4.966} cy={10.266} r={1} />
      </g>
      <circle stroke="#4AC59A" cx={12} cy={12} r={11.455} />
    </g>
  </svg>
)

export default SvgIconMnemonic
