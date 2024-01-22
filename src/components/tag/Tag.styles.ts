import { css, styled } from 'styled-components';

import { getColorFromTheme } from '../../shared/mixins';
import { ColorsTypes } from '../../shared/theme.types';
import { TagSizeTypes, TagVariantTypes } from './Tag.types';

interface TagWrapperProps {
  $backgroundColor: ColorsTypes;
  $borderColor: ColorsTypes;
  $color: ColorsTypes;
  $variant: TagVariantTypes;
  $size: TagSizeTypes;
}

export const TagWrapper = styled.div<TagWrapperProps>`
  display: inline-flex;
  align-items: center;
  padding: ${({ $size }) => ($size === 'large' ? '4px' : '2px')} 8px;
  border-radius: 4px;
  ${({ $backgroundColor, $color, theme }) => css`
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
