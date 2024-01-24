import { AnchorHTMLAttributes, ReactNode } from 'react';

import { TypographyVariants } from '../typography/Typography.types';

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  bold?: boolean;
  containsIcon?: boolean;
  variant?: TypographyVariants;
}
