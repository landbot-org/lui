import React from 'react';

import { TypographyVariants } from '../Typographyz/types';

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  bold?: boolean;
  containsIcon?: boolean;
  variant?: TypographyVariants;
}
