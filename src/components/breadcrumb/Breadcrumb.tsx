import { ReactNode } from 'react';

import { ColorsTypes } from '../../shared/theme.types';
import { Box } from '../box';
import { Icon } from '../icon';
import { Typography } from '../typography';
import { BreadcrumbProps } from './Breadcrumb.types';

import {
  StyledBreadcrumbLabel,
  StyledBreadcrumbList,
  StyledBreadcrumbListItem,
  StyledBreadcrumbNavLink,
} from './Breadcrumb.styles';

const getLabelColor = (mode: BreadcrumbProps['mode'], active?: boolean, disabled?: boolean): ColorsTypes => {
  if (active) {
    return 'pink.main';
  }
  if (disabled) {
    return 'neutral.300';
  }
  return mode === 'dark' ? 'blue.main' : 'white.main';
};

export const Breadcrumb = ({ items, size = 'large', mode = 'dark' }: BreadcrumbProps) => {
  const typographyVariant = size === 'large' ? 'text16' : 'text14';

  const BreadcrumbLabel = ({
    children,
    active,
    disabled,
  }: {
    children: ReactNode;
    active?: boolean;
    disabled?: boolean;
  }) => {
    return (
      <StyledBreadcrumbLabel
        aria-disabled={disabled}
        $disabled={disabled}
        variant={typographyVariant}
        color={getLabelColor(mode, active, disabled)}
      >
        {children}
      </StyledBreadcrumbLabel>
    );
  };

  const BreadcrumbSeparator = (
    <Box as="span" mx={1}>
      <Typography variant={typographyVariant} color={getLabelColor(mode)}>
        /
      </Typography>
    </Box>
  );

  return (
    <nav aria-label="Breadcrumb">
      <StyledBreadcrumbList $size={size}>
        {items.map(({ label, route, active, disabled, icon }, index) => (
          <StyledBreadcrumbListItem key={route}>
            {icon ? (
              <Box display="flex" alignItems="center" mr={size === 'large' ? 1 : 0.5}>
                <Icon
                  color={getLabelColor(mode, active, disabled)}
                  size={size === 'large' ? '1.25x' : '1x'}
                  icon={icon}
                />
              </Box>
            ) : null}
            {route && !disabled ? (
              <StyledBreadcrumbNavLink to={route} aria-current={active ? 'page' : undefined}>
                <BreadcrumbLabel active={active} disabled={disabled}>
                  {label}
                </BreadcrumbLabel>
              </StyledBreadcrumbNavLink>
            ) : (
              <BreadcrumbLabel active={active} disabled={disabled}>
                {label}
              </BreadcrumbLabel>
            )}
            {index < items.length - 1 ? BreadcrumbSeparator : null}
          </StyledBreadcrumbListItem>
        ))}
      </StyledBreadcrumbList>
    </nav>
  );
};
