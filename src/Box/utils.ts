import { css } from 'styled-components';
import { getColorFromTheme } from '../shared/mixins';
import { Theme } from '../shared/theme.types';
import { BORDER_RADIUS_MAPPING, BOX_SHADOW_MAPPING } from './constants';
import { StyledBoxProps } from './types';

export const getBackgroundStyles = ({ $backgroundColor, theme }: StyledBoxProps & { theme: Theme }) => {
  if ($backgroundColor) {
    return css`
      background-color: ${getColorFromTheme(theme, $backgroundColor)};
    `;
  }
};

export const getElevationStyles = ({ $elevation = 0, $hoverElevation }: StyledBoxProps) =>
  css`
    box-shadow: ${BOX_SHADOW_MAPPING[$elevation]};

    &:hover {
      box-shadow: ${BOX_SHADOW_MAPPING[$hoverElevation ?? $elevation]};
    }
  `;

export const getRadiusStyles = ({ $radius = 0 }: StyledBoxProps) =>
  css`
    border-radius: ${BORDER_RADIUS_MAPPING[$radius]}px;
  `;

export const getBorderStyles = ({
  $border = 0,
  $borderColor = 'neutral.300',
  theme,
}: StyledBoxProps & { theme: Theme }) => {
  if ($border > 0) {
    return css`
      border: ${$border}px solid ${getColorFromTheme(theme, $borderColor)};
    `;
  }
};

export const getPositionStyles = ({ $position, $top, $right, $bottom, $left }: StyledBoxProps) => {
  return css`
    position: ${$position};
    top: ${typeof $top === 'number' ? `${$top}px;` : $top};
    right: ${typeof $right === 'number' ? `${$right}px;` : $right};
    bottom: ${typeof $bottom === 'number' ? `${$bottom}px;` : $bottom};
    left: ${typeof $left === 'number' ? `${$left}px;` : $left};
  `;
};

export const getFlexboxStyles = ({
  $alignItems,
  $flexBasis,
  $flexDirection,
  $flexGrow,
  $flexShrink,
  $flexWrap,
  $justifyContent,
  $gap,
}: StyledBoxProps) => {
  return css`
    align-items: ${$alignItems};
    flex-basis: ${typeof $flexBasis === 'number' ? `${$flexBasis}px` : $flexBasis};
    flex-direction: ${$flexDirection};
    flex-grow: ${$flexGrow};
    flex-shrink: ${$flexShrink};
    flex-wrap: ${$flexWrap};
    justify-content: ${$justifyContent};
    gap: ${typeof $gap === 'number' ? `${$gap}px` : $gap};
  `;
};

export const getOverflowStyles = ({ $overflow, $overflowX, $overflowY }: StyledBoxProps) => {
  return css`
    overflow: ${$overflow};
    overflow-x: ${$overflowX};
    overflow-y: ${$overflowY};
  `;
};

export const getSizeStyles = ({ $maxHeight, $maxWidth, $minHeight, $minWidth, $height, $width }: StyledBoxProps) => {
  return css`
    max-height: ${typeof $maxHeight === 'number' ? `${$maxHeight}px` : $maxHeight};
    max-width: ${typeof $maxWidth === 'number' ? `${$maxWidth}px` : $maxWidth};
    min-height: ${typeof $minHeight === 'number' ? `${$minHeight}px` : $minHeight};
    min-width: ${typeof $minWidth === 'number' ? `${$minWidth}px` : $minWidth};
    height: ${typeof $height === 'number' ? `${$height}px` : $height};
    width: ${typeof $width === 'number' ? `${$width}px` : $width};
  `;
};
