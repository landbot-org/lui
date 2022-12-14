import styled from 'styled-components';

export const StyledIconContainer = styled.span<{ $width: number; $height: number }>`
  svg {
    height: ${({ $height }) => $height}rem;
    width: ${({ $width }) => $width}rem;
  }
`;
