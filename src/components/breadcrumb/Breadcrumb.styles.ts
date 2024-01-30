import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { Typography } from '../typography';
import { BreadcrumbProps } from './Breadcrumb.types';

export const StyledBreadcrumbList = styled.ol<{ $size: BreadcrumbProps['size'] }>`
  list-style: none;
  display: flex;
  padding: ${({ $size }) => ($size === 'large' ? '8px' : '8px 4px')};
  margin: 0;
`;

export const StyledBreadcrumbListItem = styled.li`
  display: flex;
  align-items: center;
`;

export const StyledBreadcrumbLabel = styled(Typography)<{ $disabled?: boolean }>`
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'inherit')};
  max-width: 200px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const StyledBreadcrumbNavLink = styled(NavLink)`
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
`;
