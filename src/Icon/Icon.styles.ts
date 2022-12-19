import styled from 'styled-components';

export const StyledIconContainer = styled.span<{ $color: string; $height: number; $width: number }>`
  svg {
    color: ${({ $color }) => $color};
    height: ${({ $height }) => $height}rem;
    width: ${({ $width }) => $width}rem;
  }
`;
