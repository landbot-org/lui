import React, { ReactNode } from 'react';
import { StyledBreadcrumbNavLink } from './Breadcrumb.styles';
import { BreadcrumbItem } from './Breadcrumb.types';

export const BreadcrumbLabelContainer = ({
  route,
  active,
  disabled,
  children,
}: {
  route: BreadcrumbItem['route'];
  active: BreadcrumbItem['active'];
  disabled: BreadcrumbItem['disabled'];
  children: ReactNode;
}) => {
  if (!route || disabled) return <>{children}</>;

  return (
    <StyledBreadcrumbNavLink to={route} aria-current={active ? 'page' : undefined}>
      {children}
    </StyledBreadcrumbNavLink>
  );
};
