/* eslint-disable max-len, max-lines */
import React from 'react';

const Theta = props => (
  <svg width={76} height={122} viewBox="0 0 76 122" {...props}>
    <defs>
      <linearGradient
        x1="8.159%"
        y1="28.973%"
        x2="97.458%"
        y2="106.622%"
        id="a"
      >
        <stop stopColor="#28B9E6" offset="0%" />
        <stop stopColor="#23D1D7" offset="100%" />
      </linearGradient>
      <linearGradient x1=".053%" y1="49.966%" x2="99.947%" y2="49.966%" id="b">
        <stop stopColor="#27C4DD" offset=".124%" />
        <stop stopColor="#24D9CC" offset="98.99%" />
      </linearGradient>
      <linearGradient
        x1="-18.538%"
        y1="25.244%"
        x2="118.538%"
        y2="74.756%"
        id="c"
      >
        <stop stopColor="#29B4EB" offset=".124%" />
        <stop stopColor="#21EBBC" offset="98.99%" />
      </linearGradient>
    </defs>
    <g fill="none" fillRule="evenodd">
      <path
        fill="url(#a)"
        d="M24.4 12.6V.2H12.8v12.4H.3v12.3h37.2V12.6z"
        transform="translate(19 31)"
      />
      <path
        fill="url(#b)"
        d="M24.4 47.5v12.4H12.8V47.5H.3V35.1h37.2v12.4z"
        transform="translate(19 31)"
      />
      <path
        d="M6.5.9L.3 7.1v107.8l6.2 6.2h62.8l6.2-6.2V7.1L69.3.9H6.5zm5.7 107.9V13.2h51.3v95.6H12.2z"
        fill="url(#c)"
        fillRule="nonzero"
      />
    </g>
  </svg>
);

export default Theta;
