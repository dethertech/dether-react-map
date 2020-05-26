/* eslint-disable max-len, max-lines */
import React from 'react';
import styled from 'styled-components';

const SVG = styled.svg`
  & .st0 {
    fill: #f5c430;
  }

  & .st1 {
    fill: #ffffff;
  }
`;

const Flixxo = props => (
  <SVG width={21} height={21} viewBox="0 0 141.8 142" {...props}>
    <circle cx={70.9} cy={71} r={68.3} fill="#f5c430" />
    <path
      d="M51.8 92.9V49.1c0-2.3 2.8-3.9 5-2.6l41.1 21.9c2.2 1.2 2.2 4.2 0 5.3L56.7 95.6c-2.1 1.2-4.9-.2-4.9-2.7z"
      fill="#fff"
    />
  </SVG>
);

export default Flixxo;
