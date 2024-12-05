import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';
import { ColorsTypes } from '../../shared/theme.types';
import { Typography } from '../typography';
import { BreadcrumbProps } from './Breadcrumb.types';

export const StyledBreadcrumbNav = styled.nav`
  min-width: 0;
`;

export const StyledBreadcrumbList = styled.ol<{ $size: BreadcrumbProps['size'] }>`
  list-style: none;
  display: flex;
  padding: ${({ $size }) => ($size === 'large' ? '8px' : '8px 4px')};
  margin: 0;
`;

export const StyledBreadcrumbListItem = styled.li`
  display: flex;
  align-items: center;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const StyledBreadcrumbLabel = styled(Typography)<{ $disabled?: boolean }>`
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'inherit')};
  max-width: 200px;
`;

export const StyledBreadcrumbNavLink = styled(NavLink)`
  text-decoration: none;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  :hover {
    text-decoration: underline;
  }
`;

export const getTypographyVariant = (size: BreadcrumbProps['size']) => (size === 'large' ? 'text16' : 'text14');

export const getLabelColor = (mode: BreadcrumbProps['mode'], active?: boolean, disabled?: boolean): ColorsTypes => {
  if (active) {
    return 'pink.main';
  }
  if (disabled) {
    return 'neutral.300';
  }
  return mode === 'dark' ? 'blue.main' : 'white.main';
};
