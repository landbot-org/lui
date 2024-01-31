import React, { ReactNode } from 'react';

import { BreadcrumbProps } from './Breadcrumb.types';

import { StyledBreadcrumbLabel, getLabelColor, getTypographyVariant } from './Breadcrumb.styles';

export const BreadcrumbLabel = ({
  children,
  active,
  disabled,
  size,
  mode,
}: {
  children: ReactNode;
  active?: boolean;
  disabled?: boolean;
  size: BreadcrumbProps['size'];
  mode: BreadcrumbProps['mode'];
}) => {
  return (
    <StyledBreadcrumbLabel
      aria-disabled={disabled}
      $disabled={disabled}
      variant={getTypographyVariant(size)}
      color={getLabelColor(mode, active, disabled)}
      ellipsize
    >
      {children}
    </StyledBreadcrumbLabel>
  );
};
