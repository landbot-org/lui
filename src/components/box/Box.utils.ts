import { css } from 'styled-components';
import { getColorFromTheme } from '../../shared/mixins';
import { Theme } from '../../shared/theme.types';
import { BORDER_RADIUS_MAPPING, BOX_SHADOW_MAPPING } from './Box.constants';
import { StyledBoxProps } from './Box.types';

export const getBackgroundStyles = ({ $backgroundColor, theme }: StyledBoxProps & { theme: Theme }) => {
  if ($backgroundColor) {
    return css`
      background-color: ${getColorFromTheme(theme, $backgroundColor)};
    `;
  }
};

export const getElevationStyles = ({ $elevation = 0, $hoverElevation }: StyledBoxProps) => css`
  box-shadow: ${BOX_SHADOW_MAPPING[$elevation]};

  &:hover {
    box-shadow: ${BOX_SHADOW_MAPPING[$hoverElevation ?? $elevation]};
  }
`;

export const getRadiusStyles = ({ $radius = 0 }: StyledBoxProps) => css`
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
    ${$position && `position: ${$position};`}
    ${$top !== undefined && `top: ${$top}px;`}
    ${$right !== undefined && `right: ${$right}px;`}
    ${$bottom !== undefined && `bottom: ${$bottom}px;`}
    ${$left !== undefined && `left: ${$left}px;`}
  `;
};
