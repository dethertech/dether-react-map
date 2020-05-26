import React from 'react'

const SvgTelegram = props => (
  <svg width={24} height={24} viewBox="0 0 29 29" {...props}>
    <defs>
      <path id="telegram_svg__a" d="M.004 27.901h27.79V.003H.005z" />
    </defs>
    <g fill="none" fillRule="evenodd">
      <g transform="translate(.773 .592)">
        <mask id="telegram_svg__b" fill="#fff">
          <use xlinkHref="#telegram_svg__a" />
        </mask>
        <path
          d="M27.795 13.95c0 7.705-6.222 13.951-13.898 13.951C6.222 27.901 0 21.655 0 13.951 0 6.246 6.222 0 13.897 0c7.676 0 13.898 6.246 13.898 13.95"
          fill="#121E38"
          mask="url(#telegram_svg__b)"
        />
      </g>
      <path
        d="M20.694 8.59l-2.278 11.486s-.318.797-1.195.414l-5.257-4.03-1.911-.924-3.218-1.083s-.494-.176-.542-.558c-.048-.382.557-.59.557-.59l12.793-5.018s1.051-.462 1.051.303"
        fill="#FEFEFE"
      />
      <path
        d="M11.56 19.947s-.153-.014-.344-.62c-.192-.605-1.163-3.791-1.163-3.791l7.726-4.907s.446-.27.43 0c0 0 .08.048-.16.271-.238.223-6.069 5.464-6.069 5.464"
        fill="#D5D5D5"
      />
      <path
        d="M13.98 18.005l-2.08 1.896s-.162.123-.34.046l.398-3.521"
        fill="#888"
      />
    </g>
  </svg>
)

export default SvgTelegram
