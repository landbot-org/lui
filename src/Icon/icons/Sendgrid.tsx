import React from 'react';

export const Sendgrid = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g clipPath="url(#clip0_1066_2139)">
        <path d="M40 0H13.3323V13.3323H0V40H26.6677V26.6677H40V0Z" fill="white" />
        <path opacity="0.4" d="M0 13.3325V26.6679H13.3323V40.0002H26.6677V13.3325H0Z" fill="#00B2E3" />
        <path d="M13.3323 26.6675H0V39.9998H13.3323V26.6675Z" fill="#1A82E2" />
        <g style={{ mixBlendMode: 'multiply' }}>
          <path d="M26.6677 13.3323V0H13.3323V13.3323V26.6677H26.6677H40V13.3323H26.6677Z" fill="#00B2E3" />
        </g>
        <path d="M40 0H26.6677V13.3323H40V0Z" fill="#1A82E2" />
      </g>
      <defs>
        <clipPath id="clip0_1066_2139">
          <rect width="40" height="40" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
