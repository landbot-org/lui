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

export const getColorStyles = ({ $color, theme }: StyledBoxProps & { theme: Theme }) => {
  if ($color) {
    return css`
      color: ${getColorFromTheme(theme, $color)};
    `;
  }
};

export const getElevationStyles = ({ $elevation = 0 }: StyledBoxProps) =>
  css`
    box-shadow: ${BOX_SHADOW_MAPPING[$elevation]};
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
