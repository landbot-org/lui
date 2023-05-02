import styled from 'styled-components';
import BaseSpacing from '../BaseSpacing';

import { StyledBoxProps } from './types';
import { getBackgroundStyles, getBorderStyles, getColorStyles, getElevationStyles, getRadiusStyles } from './utils';

export const BoxStyled = styled(BaseSpacing)<StyledBoxProps>`
  align-items: ${({ $alignItems }) => $alignItems};
  display: ${({ $display }) => $display};
  flex-basis: ${({ $flexBasis }) => $flexBasis};
  flex-direction: ${({ $flexDirection }) => $flexDirection};
  flex-grow: ${({ $flexGrow }) => $flexGrow};
  flex-shrink: ${({ $flexShrink }) => $flexShrink};
  flex-wrap: ${({ $flexWrap }) => $flexWrap};
  justify-content: ${({ $justifyContent }) => $justifyContent};
  gap: ${({ $gap }) => $gap && `${$gap}px`};
  ${getBackgroundStyles}
  ${getColorStyles}
  ${getElevationStyles}
  ${getRadiusStyles}
  ${getBorderStyles}
`;
