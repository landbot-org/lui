import { SVGProps } from 'react';

export const FlowWeb = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" {...props}>
    <rect width={24} height={24} fill="#D7376B" rx={4} />
    <path
      fill="#fff"
      d="M7.8 6c-.772 0-1.4.673-1.4 1.5v5.25h-.98c-.232 0-.42.202-.42.45 0 .994.753 1.8 1.68 1.8h6.02v-2.25H7.8V7.5h7v.75h1.4V7.5c0-.827-.628-1.5-1.4-1.5h-7Zm7 10.5v-6h2.8v6h-2.8Zm-1.4-6.375v6.75c0 .621.47 1.125 1.05 1.125h3.5c.58 0 1.05-.504 1.05-1.125v-6.75C19 9.504 18.53 9 17.95 9h-3.5c-.58 0-1.05.504-1.05 1.125Z"
    />
  </svg>
);
