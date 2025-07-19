import React from 'react';

interface CloseIconProps extends React.SVGProps<SVGSVGElement> {}

const CloseIcon: React.FC<CloseIconProps> = (props) => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={['cursor-pointer', props.className].filter(Boolean).join(' ')}
    {...props}
  >
    <circle cx="11" cy="11" r="11" fill="#EDFF81"/>
    <path d="M7 7L15 15" stroke="#253D32" strokeWidth="2" strokeLinecap="round"/>
    <path d="M15 7L7 15" stroke="#253D32" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export default CloseIcon; 