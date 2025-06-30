import { SVGProps } from 'react';

export const FlowFacebookApi = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" {...props}>
    <rect width={24} height={24} fill="#F58B0B" rx={4} />
    <g clipPath="url(#a)">
      <path
        fill="#fff"
        d="M13.593 6.526a.703.703 0 0 0-.867.472l-2.8 9.625a.687.687 0 0 0 .482.851.702.702 0 0 0 .866-.473l2.8-9.625a.687.687 0 0 0-.481-.85Zm1.763 2.58a.68.68 0 0 0 0 .973L17.309 12l-1.956 1.921a.68.68 0 0 0 0 .974.71.71 0 0 0 .991 0l2.45-2.406a.68.68 0 0 0 0-.974l-2.45-2.406a.71.71 0 0 0-.99 0l.002-.002Zm-6.71 0a.71.71 0 0 0-.99 0l-2.45 2.406a.68.68 0 0 0 0 .973l2.45 2.407a.71.71 0 0 0 .99 0 .68.68 0 0 0 0-.974L6.692 12l1.956-1.92a.68.68 0 0 0 0-.974Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M5 6.5h14v11H5z" />
      </clipPath>
    </defs>
  </svg>
);
