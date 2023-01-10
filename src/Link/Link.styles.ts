import styled from 'styled-components';
import { TargetVariants } from './types';

interface StyledLinkProps {
  $bold: boolean;
  $containsIcon: boolean;
  target: TargetVariants;
  href: string;
}

export const StyledLink = styled.a<StyledLinkProps>`
  display: inline-flex;
  gap: 4px;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
