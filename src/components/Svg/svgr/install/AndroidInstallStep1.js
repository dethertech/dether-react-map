import React from 'react'

const SvgAndroidInstallStep1 = props => (
  <svg width={302} height={239} {...props}>
    <defs>
      <path
        d="M6 .633h282a6 6 0 0 1 6 6v218.324a6 6 0 0 1-6 6H6a6 6 0 0 1-6-6V6.633a6 6 0 0 1 6-6z"
        id="androidInstallStep1_svg__a"
      />
      <filter
        x="-2.4%"
        y="-2.2%"
        width="104.8%"
        height="106.1%"
        filterUnits="objectBoundingBox"
        id="androidInstallStep1_svg__b"
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
    </defs>
    <g transform="translate(4 2)" fill="none" fillRule="evenodd">
      <mask id="androidInstallStep1_svg__c" fill="#fff">
        <use xlinkHref="#androidInstallStep1_svg__a" />
      </mask>
      <use
        fill="#000"
        filter="url(#androidInstallStep1_svg__b)"
        xlinkHref="#androidInstallStep1_svg__a"
      />
      <use fill="#FFF" xlinkHref="#androidInstallStep1_svg__a" />
      <path
        stroke="#E3E3E3"
        strokeWidth={0.5}
        d="M6 .883a5.75 5.75 0 0 0-5.75 5.75v218.324a5.75 5.75 0 0 0 5.75 5.75h282a5.75 5.75 0 0 0 5.75-5.75V6.633A5.75 5.75 0 0 0 288 .883H6z"
      />
      <g mask="url(#androidInstallStep1_svg__c)">
        <g transform="translate(29.74 20.714)" stroke="#D6D6D6">
          <g transform="translate(.508 .286)">
            <rect
              x={15.551}
              y={51.373}
              width={202.051}
              height={280.194}
              rx={10}
            />
            <rect x={0.63} y={1.016} width={231.894} height={385.395} rx={30} />
          </g>
          <rect x={91.26} y={26.5} width={52} height={3} rx={1.5} />
        </g>
      </g>
      <circle stroke="#D6D6D6" cx={147} cy={37.5} r={2.5} />
      <path
        d="M55.41 72.75h183.046a9 9 0 0 1 9 9V111H46.41V81.75a9 9 0 0 1 9-9z"
        fill="#F2F2F2"
      />
      <g>
        <g transform="translate(184.56 85.28)">
          <rect
            stroke="#C3C3C1"
            fill="#F2F2F2"
            width={12.176}
            height={12.442}
            rx={1}
          />
          <path
            fill="#C3C3C1"
            d="M5.069 8.618v-.53h.929v-3.24l.014-.56-.014-.014-.475.308-.643.405-.076-.608 1.494-1.012h.412v4.72h.908v.531z"
          />
        </g>
      </g>
      <g>
        <path d="M233.012 100.733h-8.982V82.375h8.982z" />
        <path
          d="M228.521 88.494c.823 0 1.497-.688 1.497-1.53 0-.841-.674-1.53-1.497-1.53-.823 0-1.497.689-1.497 1.53 0 .842.674 1.53 1.497 1.53zm0 1.53c-.823 0-1.497.688-1.497 1.53 0 .841.674 1.53 1.497 1.53.823 0 1.497-.689 1.497-1.53 0-.842-.674-1.53-1.497-1.53zm0 4.59c-.823 0-1.497.688-1.497 1.53 0 .84.674 1.529 1.497 1.529.823 0 1.497-.688 1.497-1.53 0-.841-.674-1.53-1.497-1.53z"
          fill="#494949"
        />
      </g>
      <circle
        stroke="#4B53B6"
        strokeWidth={2}
        cx={228.53}
        cy={90.875}
        r={23.978}
      />
    </g>
  </svg>
)

export default SvgAndroidInstallStep1
