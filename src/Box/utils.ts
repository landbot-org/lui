import { css } from 'styled-components';
import { getColorFromTheme } from '../shared/mixins';
import { Theme } from '../shared/theme.types';
import { BORDER_RADIUS_MAPPING, BOX_SHADOW_MAPPING } from './constants';
import { StyledBoxProps } from './types';

export const getElevationStyles = ({ $elevation = 0 }: StyledBoxProps) => {
  return {
    0: css`
      box-shadow: ${BOX_SHADOW_MAPPING[0]};
    `,
    1: css`
      box-shadow: ${BOX_SHADOW_MAPPING[1]};
    `,
    2: css`
      box-shadow: ${BOX_SHADOW_MAPPING[2]};
    `,
    3: css`
      box-shadow: ${BOX_SHADOW_MAPPING[3]};
    `,
    4: css`
      box-shadow: ${BOX_SHADOW_MAPPING[4]};
    `,
  }[$elevation];
};

export const getRadiusStyles = ({ $radius = 0 }: StyledBoxProps) => {
  return {
    0: css`
      border-radius: ${BORDER_RADIUS_MAPPING[0]}px;
    `,
    1: css`
      border-radius: ${BORDER_RADIUS_MAPPING[1]}px;
    `,
    2: css`
      border-radius: ${BORDER_RADIUS_MAPPING[2]}px;
    `,
    3: css`
      border-radius: ${BORDER_RADIUS_MAPPING[3]}px;
    `,
    4: css`
      border-radius: ${BORDER_RADIUS_MAPPING[4]}px;
    `,
    5: css`
      border-radius: ${BORDER_RADIUS_MAPPING[5]}px;
    `,
  }[$radius];
};

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
