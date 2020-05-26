import React from 'react'

const SvgIosInstallStep1 = props => (
  <svg width={302} height={239} {...props}>
    <defs>
      <path
        d="M6 .633h282a6 6 0 0 1 6 6v218.324a6 6 0 0 1-6 6H6a6 6 0 0 1-6-6V6.633a6 6 0 0 1 6-6z"
        id="iosInstallStep1_svg__a"
      />
      <filter
        x="-2.4%"
        y="-2.2%"
        width="104.8%"
        height="106.1%"
        filterUnits="objectBoundingBox"
        id="iosInstallStep1_svg__b"
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
      <linearGradient
        x1="50%"
        y1="0%"
        x2="50%"
        y2="100%"
        id="iosInstallStep1_svg__d"
      >
        <stop stopColor="#F8F8F8" offset="0%" />
        <stop stopColor="#F9F9F9" offset="48.085%" />
        <stop stopColor="#F8F8F8" offset="100%" />
      </linearGradient>
    </defs>
    <g transform="translate(-9 -129)" fill="none" fillRule="evenodd">
      <g transform="translate(13 131)">
        <mask id="iosInstallStep1_svg__c" fill="#fff">
          <use xlinkHref="#iosInstallStep1_svg__a" />
        </mask>
        <use
          fill="#000"
          filter="url(#iosInstallStep1_svg__b)"
          xlinkHref="#iosInstallStep1_svg__a"
        />
        <use fill="#FFF" xlinkHref="#iosInstallStep1_svg__a" />
        <path
          stroke="#E3E3E3"
          strokeWidth={0.5}
          d="M6 .883a5.75 5.75 0 0 0-5.75 5.75v218.324a5.75 5.75 0 0 0 5.75 5.75h282a5.75 5.75 0 0 0 5.75-5.75V6.633A5.75 5.75 0 0 0 288 .883H6z"
        />
        <g mask="url(#iosInstallStep1_svg__c)">
          <g transform="translate(30.248 -176)" stroke="#D6D6D6">
            <rect
              x={15.551}
              y={51.373}
              width={202.051}
              height={280.194}
              rx={10}
            />
            <rect x={0.63} y={1.016} width={231.894} height={385.395} rx={30} />
            <circle cx={115.829} cy={357.438} r={16.012} />
          </g>
          <path
            fillOpacity={0.65}
            fill="url(#iosInstallStep1_svg__d)"
            d="M0 .315h201.341v27.684H0z"
            transform="translate(46.13 126.578)"
          />
          <path fill="#000" opacity={0.3} d="M46.13 126.578h201.341v1H46.13z" />
          <path
            d="M188.013 135.387c0-.695-.564-1.259-1.259-1.259h-3.46c-.052 0-.1.01-.151.016l.011-.016h-1.433a.944.944 0 0 0-.944.944v10.067c0 .522.422.944.944.944h5.033c.484 0 .925.182 1.259.48v-11.176zm.629 12.584v.314h-.63v-.314c0-.695-.563-1.259-1.258-1.259h-5.033a1.573 1.573 0 0 1-1.573-1.573v-10.067c0-.868.704-1.573 1.573-1.573h5.033c.657 0 1.235.335 1.573.844a1.886 1.886 0 0 1 1.573-.844h5.034c.868 0 1.573.705 1.573 1.573v10.067c0 .87-.705 1.573-1.573 1.573H189.9c-.695 0-1.258.564-1.258 1.259zm0-12.584V146.564a1.88 1.88 0 0 1 1.258-.48h5.034a.944.944 0 0 0 .944-.945v-10.067a.944.944 0 0 0-.944-.944H193.5l.011.016c-.05-.006-.099-.016-.15-.016h-3.46c-.696 0-1.26.564-1.26 1.259z"
            fill="#C3C3C1"
          />
          <path
            d="M146.486 132.686l-1.98 1.98-.445-.445 2.74-2.74 2.739 2.74-.445.444-1.98-1.98v9.78h-.629v-9.78zm6.296 15.6h-11.959V136.33h4.405v.629h-3.776v10.696h10.701V136.96h-3.78v-.63h4.41v11.955z"
            fill="#007AFF"
          />
          <path
            d="M221.989 147.97v.315H233.944v-11.954H221.989v11.64zm.315-11.01h11.325l-.315-.315v11.326l.315-.315h-11.325l.314.315v-11.326l-.314.315zm3.775-3.775v2.516h-.63v-2.831h11.955V144.825h-2.831v-.63h2.517l-.315.315v-11.325l.315.314h-11.326l.315-.314zM56.648 140.246l-.334.334.334.333 5.98 5.98.667-.668-5.98-5.979v.667l6.137-6.136-.668-.668zM107.302 140.913v-.667l-5.98 5.98.668.667 5.98-5.98.333-.333-.334-.334-6.137-6.137-.667.668z"
            fill="#C3C3C1"
            fillRule="nonzero"
          />
        </g>
      </g>
      <circle
        stroke="#4B53B6"
        strokeWidth={2}
        cx={160}
        cy={271.227}
        r={28.635}
      />
    </g>
  </svg>
)

export default SvgIosInstallStep1
