import { SVGProps } from 'react';

export const FlowMessenger = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" {...props}>
    <rect width={24} height={24} fill="#0866FF" rx={4} />
    <path
      fill="#fff"
      d="m15.019 15.19 3.87-6.147c.39-.617-.331-1.336-.92-.919l-4.041 2.864a.4.4 0 0 1-.455.007L9.887 8.61a.644.644 0 0 0-.905.2L5.11 14.956c-.389.617.332 1.337.921.919l4.042-2.864a.4.4 0 0 1 .455-.007l3.586 2.384a.644.644 0 0 0 .905-.2Z"
    />
  </svg>
);
