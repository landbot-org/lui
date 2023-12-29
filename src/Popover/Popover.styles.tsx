import styled from 'styled-components';

import { Box } from '../Box';
import { pxToRem } from '../shared/mixins';

export const StyledPopoverContent = styled(Box)<{ $color?: 'blue' | 'white' }>`
  position: relative;
  z-index: 1000;
  max-width: ${pxToRem(284)}rem;
  outline: none;
  background-color: ${({ $color, theme }) => ($color === 'blue' ? theme.palette.blue[800] : theme.palette.white.main)};
  border: 1px solid ${({ $color, theme }) => ($color === 'blue' ? theme.palette.blue[800] : theme.palette.neutral[300])};
  color: ${({ $color, theme }) => ($color === 'blue' ? theme.palette.white.main : theme.palette.blue.main)};
`;

export const StyledPopoverCloseWrapper = styled(Box)`
  position: absolute;
  top: 0;
  right: 0;
`;
