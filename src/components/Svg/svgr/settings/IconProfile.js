import React from 'react'

const SvgIconProfile = props => (
  <svg width={24} height={24} {...props}>
    <defs>
      <circle id="icon_profile_svg__a" cx={11.455} cy={11.455} r={11.455} />
    </defs>
    <g transform="translate(.545 .545)" fill="none" fillRule="evenodd">
      <mask id="icon_profile_svg__b" fill="#fff">
        <use xlinkHref="#icon_profile_svg__a" />
      </mask>
      <use stroke="#4B53B6" xlinkHref="#icon_profile_svg__a" />
      <circle
        stroke="#4B53B6"
        mask="url(#icon_profile_svg__b)"
        cx={11.455}
        cy={9.622}
        r={4.124}
      />
      <rect
        stroke="#4B53B6"
        mask="url(#icon_profile_svg__b)"
        x={4.165}
        y={16.078}
        width={14.578}
        height={8.164}
        rx={4.082}
      />
    </g>
  </svg>
)

export default SvgIconProfile
