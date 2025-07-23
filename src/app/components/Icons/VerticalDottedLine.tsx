import React from 'react';

const VerticalDottedLine: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg width="2" height="48" viewBox="0 0 2 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={['cursor-pointer', props.className].filter(Boolean).join(' ')}
        {...props}>
        <path d="M1 1V47" stroke="#A2BDAA" strokeLinecap="square" strokeDasharray="10 10" />
    </svg>
);

export default VerticalDottedLine; 