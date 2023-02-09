import styled from 'styled-components';
import { Theme } from '../shared/theme.types';
import { LinkProps } from './types';

export const BaseLink = styled.a<LinkProps>`
  color: ${({ theme }: { theme: Theme }) => theme.palette.purple.main};
  display: inline-flex;
  gap: 4px;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
