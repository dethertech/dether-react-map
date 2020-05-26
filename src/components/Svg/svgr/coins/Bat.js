/* eslint-disable max-len, max-lines */
import React from 'react';

const st0 = {
  fill: '#662D91',
};

const st1 = {
  fill: '#9E1F63',
};

const st2 = {
  fill: '#FF5000',
};

const st3 = {
  fill: '#FFFFFF',
  stroke: '#FF5000',
  strokeWidth: 0.83,
  strokeMiterLimit: 10,
};

const Bat = props => (
  <svg width={20} height={20} viewBox="0 0 141.8 142" {...props}>
    <polygon style={st0} points="130.7,121.9 70.9,87.6 11.1,122.2 " />
    <polygon style={st1} points="70.9,17.8 70.5,87.6 130.7,121.9 " />
    <polygon style={st2} points="11.1,122.2 70.7,88.2 70.9,17.8 " />
    <polygon style={st3} points="70.5,60.2 46.4,101.7 95.2,101.7 " />
  </svg>
);

export default Bat;
