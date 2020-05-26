import React from 'react'

const SvgAndroidInstallStep3 = props => (
  <svg width={302} height={239} {...props}>
    <defs>
      <path
        d="M6 .633h282a6 6 0 0 1 6 6v218.324a6 6 0 0 1-6 6H6a6 6 0 0 1-6-6V6.633a6 6 0 0 1 6-6z"
        id="androidInstallStep3_svg__a"
      />
      <filter
        x="-2.4%"
        y="-2.2%"
        width="104.8%"
        height="106.1%"
        filterUnits="objectBoundingBox"
        id="androidInstallStep3_svg__b"
      >
        <feOffset dy={2} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur
          stdDeviation={2}
          in="shadowOffsetOuter1"
          result="shadowBlurOuter1"
        />
        <feComposite
          in="shadowBlurOuter1"
          in2="SourceAlpha"
          operator="out"
          result="shadowBlurOuter1"
        />
        <feColorMatrix
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
          in="shadowBlurOuter1"
        />
      </filter>
      <rect
        id="androidInstallStep3_svg__d"
        x={15.051}
        y={50.873}
        width={203.051}
        height={281.194}
        rx={10}
      />
      <path
        id="androidInstallStep3_svg__f"
        d="M.463.265h177.074v102.471H.463z"
      />
      <filter
        x="-2%"
        y="-2.4%"
        width="104%"
        height="106.8%"
        filterUnits="objectBoundingBox"
        id="androidInstallStep3_svg__e"
      >
        <feOffset dy={1} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur
          stdDeviation={1}
          in="shadowOffsetOuter1"
          result="shadowBlurOuter1"
        />
        <feColorMatrix
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.203521286 0"
          in="shadowBlurOuter1"
        />
      </filter>
    </defs>
    <g transform="translate(-9 -129)" fill="none" fillRule="evenodd">
      <g transform="translate(13 131)">
        <mask id="androidInstallStep3_svg__c" fill="#fff">
          <use xlinkHref="#androidInstallStep3_svg__a" />
        </mask>
        <use
          fill="#000"
          filter="url(#androidInstallStep3_svg__b)"
          xlinkHref="#androidInstallStep3_svg__a"
        />
        <use fill="#FFF" xlinkHref="#androidInstallStep3_svg__a" />
        <path
          stroke="#E3E3E3"
          strokeWidth={0.5}
          d="M6 .883a5.75 5.75 0 0 0-5.75 5.75v218.324a5.75 5.75 0 0 0 5.75 5.75h282a5.75 5.75 0 0 0 5.75-5.75V6.633A5.75 5.75 0 0 0 288 .883H6z"
        />
        <g mask="url(#androidInstallStep3_svg__c)">
          <g transform="translate(29.74 20.714)">
            <g transform="translate(.508 .286)">
              <use fill="#F2F2F2" xlinkHref="#androidInstallStep3_svg__d" />
              <rect
                stroke="#D6D6D6"
                x={15.551}
                y={51.373}
                width={202.051}
                height={280.194}
                rx={10}
              />
              <rect
                stroke="#D6D6D6"
                x={0.63}
                y={1.016}
                width={231.894}
                height={385.395}
                rx={30}
              />
            </g>
            <rect
              stroke="#D6D6D6"
              x={91.26}
              y={26.5}
              width={52}
              height={3}
              rx={1.5}
            />
            <circle stroke="#D6D6D6" cx={117.26} cy={16.786} r={2.5} />
          </g>
        </g>
      </g>
      <g transform="translate(71 233)">
        <use
          fill="#000"
          filter="url(#androidInstallStep3_svg__e)"
          xlinkHref="#androidInstallStep3_svg__f"
        />
        <use fill="#FFF" xlinkHref="#androidInstallStep3_svg__f" />
        <path d="M42.206 60.59H163.5" stroke="#007AFF" strokeLinecap="square" />
        <text fontFamily=".AppleSystemUIFont" fontSize={10} fill="#595959">
          <tspan x={10.138} y={22.967}>
            {'Add to Home screen'}
          </tspan>
        </text>
        <rect
          fill="#A2A2A2"
          x={10.138}
          y={40.774}
          width={19.816}
          height={19.816}
          rx={2}
        />
        <text fontFamily=".AppleSystemUIFont" fontSize={9} fill="#2A2B43">
          <tspan x={41.926} y={52.356}>
            {'https://www.dether.io'}
          </tspan>
        </text>
        <text fontFamily=".AppleSystemUIFont" fontSize={8} fill="#007AFF">
          <tspan x={145.862} y={93.356}>
            {'ADD'}
          </tspan>
        </text>
        <text fontFamily=".AppleSystemUIFont" fontSize={8} fill="#007AFF">
          <tspan x={89.862} y={93.356}>
            {'CANCEL'}
          </tspan>
        </text>
      </g>
      <circle
        stroke="#4B53B6"
        strokeWidth={2}
        cx={226}
        cy={324.022}
        r={23.978}
      />
    </g>
  </svg>
)

export default SvgAndroidInstallStep3
