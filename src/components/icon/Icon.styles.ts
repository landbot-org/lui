import { css, styled } from 'styled-components';

import { getColorFromTheme, pxToRem } from '../../shared/mixins';
import { ColorsTypes } from '../../shared/theme.types';
import { DIMENSIONS, PADDING } from './Icon.constants';
import { GRID_AREA, Size } from './Icon.types';

const paddingCss = css<{ $gridArea: GRID_AREA; $size: Size }>`
  ${({ $gridArea, $size }) => {
    const padding = pxToRem(PADDING[$size]);

    return {
      [GRID_AREA.NONE]: 0,
      [GRID_AREA.FIXED_WIDTH]: `padding: 0 ${padding}rem`,
      [GRID_AREA.SQUARE]: `padding: ${padding}rem`,
      [GRID_AREA.ROOMY]: `padding: ${2 * padding}rem`,
    }[$gridArea];
  }};
`;

const dimensionsCss = css<{ $size: Size }>`
  ${({ $size }) => {
    const dimensions = pxToRem(DIMENSIONS[$size]);

    return `height: ${dimensions}rem; width: ${dimensions}rem`;
  }};
`;

export const StyledIconContainer = styled.span<{
  $color: ColorsTypes | 'inherit';
  $gridArea: GRID_AREA;
  $size: Size;
}>`
  display: inline-flex;

  svg {
    color: ${({ $color, theme }) => ($color === 'inherit' ? $color : getColorFromTheme(theme, $color))};
    ${dimensionsCss};
    ${paddingCss};
  }
`;
