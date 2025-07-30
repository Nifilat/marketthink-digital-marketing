import React from 'react';

const HamburgerIcon: React.FC<React.SVGProps<SVGSVGElement>> = props => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={['cursor-pointer', props.className].filter(Boolean).join(' ')}
    {...props}
  >
    <rect y="6" width="28" height="3" rx="1.5" fill="#EDFF81" />
    <rect y="13" width="28" height="3" rx="1.5" fill="#EDFF81" />
    <rect y="20" width="28" height="3" rx="1.5" fill="#EDFF81" />
  </svg>
);

export default HamburgerIcon;
