import React from 'react';

export type TargetVariants = '_self' | '_blank';

type LinkPropsBase = {
  children: React.ReactNode;
  bold?: boolean;
  containsIcon?: boolean;
  target?: TargetVariants;
  href: string;
};

export type LinkProps = LinkPropsBase & JSX.IntrinsicElements['a'];
