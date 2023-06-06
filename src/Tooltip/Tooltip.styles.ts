import styled from 'styled-components';
import { Box } from '../Box';
import { pxToRem } from '../shared/mixins';
import { StylesProps } from './types';

export const StyledWrapperChildren = styled.span`
  display: inline-block;
  height: fit-content;
`;

export const StyledContent = styled(Box)<StylesProps>`
  background-color: ${({ $color, theme }) => ($color === 'blue' ? theme.palette.blue[800] : theme.palette.white.main)};
  border: 1px solid ${({ $color, theme }) => ($color === 'blue' ? theme.palette.blue[800] : theme.palette.neutral[300])};
  border-radius: 4px;
  pointer-events: none;
  max-width: ${pxToRem(284)}rem;
`;
