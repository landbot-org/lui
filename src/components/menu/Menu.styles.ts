import { styled } from 'styled-components';
import { Box } from '../box';

export const StyledContainer = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
})<{ $width?: string | number }>`
  width: ${({ $width }) => (typeof $width === 'number' ? `${$width}px` : $width)};
`;
