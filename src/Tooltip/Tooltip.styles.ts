import styled, { css } from 'styled-components';
import { Box } from '../Box';
import { pxToRem } from '../shared/mixins';
import { StylesProps } from './types';

export const StyledWrapperChildren = styled.span`
  display: block;
`;

export const StyledContent = styled(Box)<StylesProps>`
  border-radius: 4px;
  max-width: ${pxToRem(284)}rem;
  pointer-events: none;
  ${({ $color, theme }) => {
    return css`
      background-color: ${$color === 'blue' ? theme.palette.blue[800] : theme.palette.white.main};
      border: 1px solid ${$color === 'blue' ? theme.palette.blue[800] : theme.palette.neutral[300]};
    `;
  }}
`;
