import styled, { css } from 'styled-components';

import { getColorFromTheme } from '../shared/mixins';
import { ColorsTypes } from '../shared/theme.types';
import { SizeTypes, VariantTypes } from './types';

interface TagWrapperProps {
  $backgroundColor: ColorsTypes;
  $borderColor: ColorsTypes;
  $color: ColorsTypes;
  $variant: VariantTypes;
  $size: SizeTypes;
}

export const TagWrapper = styled.div<TagWrapperProps>`
  display: inline-flex;
  align-items: center;
  padding: ${({ $size }) => ($size === 'large' ? '4px' : '2px')} 8px;
  border-radius: 4px;
  ${({ $backgroundColor, $color, theme }) =>
    css`
      background-color: ${getColorFromTheme(theme, $backgroundColor)};
      color: ${getColorFromTheme(theme, $color)};
    `}
  ${({ $borderColor, $variant, theme }) =>
    $variant === 'outlined' &&
    css`
      border-style: solid;
      border-width: 1px;
      border-color: ${getColorFromTheme(theme, $borderColor)};
    `}
`;
