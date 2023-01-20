import styled from 'styled-components';
import BaseSpacing from '../BaseSpacing';

import { StyledBoxProps } from './types';
import { getBackgroundStyles, getBorderStyles, getElevationStyles, getRadiusStyles } from './utils';

export const BoxStyled = styled(BaseSpacing)<StyledBoxProps>`
  align-items: ${({ $alignItems }) => $alignItems};
  display: ${({ $display }) => $display};
  flex-direction: ${({ $flexDirection }) => $flexDirection};
  justify-content: ${({ $justifyContent }) => $justifyContent};
  flex-wrap: ${({ $flexWrap }) => $flexWrap};
  gap: ${({ $flexGap }) => $flexGap && `${$flexGap}px`};
  ${getBackgroundStyles}
  ${getElevationStyles}
  ${getRadiusStyles}
  ${getBorderStyles}
`;
