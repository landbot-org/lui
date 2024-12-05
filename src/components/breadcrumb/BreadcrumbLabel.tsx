import React, { ReactNode } from 'react';
import { StyledBreadcrumbLabel, getLabelColor, getTypographyVariant } from './Breadcrumb.styles';
import { BreadcrumbProps } from './Breadcrumb.types';

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
      fontWeight={500}
      ellipsize
    >
      {children}
    </StyledBreadcrumbLabel>
  );
};
