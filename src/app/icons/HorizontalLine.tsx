import React from 'react';

const HorizontalLine: React.FC<React.SVGProps<SVGSVGElement>> = props => (
  <svg
    width="60"
    height="2"
    viewBox="0 0 60 2"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={['cursor-pointer', props.className].filter(Boolean).join(' ')}
    {...props}
  >
    <path opacity="0.4" d="M0 1H60" stroke="white" />
  </svg>
);

export default HorizontalLine;
