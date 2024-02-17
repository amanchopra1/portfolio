import React from 'react';
import { Div } from './HeroBgAnimationStyle';

const HeroBgAnimation = () => (
  <Div>
    <svg
      className="BgAnimation__svg"
      viewBox="0 0 602 602"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.15">
        {/* ... (existing paths) */}
      </g>
      <ellipse
        cx="295.027"
        cy="193.118"
        transform="translate(-295.027 -193.118)"
        rx="1.07306"
        ry="1.07433"
        fill="#F8CC62"  // Yellow color
      >
        <animateMotion dur="10s" repeatCount="indefinite" rotate="auto">
          <mpath xlinkHref="#path_2" />
        </animateMotion>
      </ellipse>
      {/* ... (other ellipses) */}
      <defs>
        <radialGradient
          id="paint0_radial"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(301 301) rotate(90) scale(300)"
        >
          <stop offset="0.333333" stopColor="#000000" />  {/* Black color */}
          <stop offset="1" stopColor="#F8CC62" stopOpacity="0" />  {/* Yellow color */}
        </radialGradient>
        {/* ... (other radial gradients) */}
        <linearGradient
          id="paint3_linear"
          x1="295.043"
          y1="193.116"
          x2="269.975"
          y2="218.154"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F8CC62" />  {/* Yellow color */}
          <stop offset="1" stopColor="#F8CC62" stopOpacity="0" />  {/* Yellow color */}
        </linearGradient>
        {/* ... (other linear gradients) */}
      </defs>
    </svg>
  </Div>
);

export default HeroBgAnimation;
