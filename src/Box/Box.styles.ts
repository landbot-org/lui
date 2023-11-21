import styled from 'styled-components';
import BaseSpacing from '../BaseSpacing';

import { StyledBoxProps } from './types';
import {
  getBackgroundStyles,
  getBorderStyles,
  getElevationStyles,
  getPositionStyles,
  getRadiusStyles,
  getFlexboxStyles,
  getOverflowStyles,
  getSizeStyles,
} from './utils';

export const BoxStyled = styled(BaseSpacing)<StyledBoxProps>`
  display: ${({ $display }) => $display};
  ${getFlexboxStyles}
  ${getPositionStyles}
  ${getBackgroundStyles}
  ${getElevationStyles}
  ${getRadiusStyles}
  ${getBorderStyles}
  ${getOverflowStyles}
  ${getSizeStyles}
`;
