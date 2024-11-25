import { CSSProperties, styled } from 'styled-components';
import { Box } from '../box';

export const StyledOption = styled(Box)<{ $hover?: CSSProperties }>`
  cursor: pointer;

  &:hover {
    ${(props) => props.$hover && { ...props.$hover }}
  }
`;
