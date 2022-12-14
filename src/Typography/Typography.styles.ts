import styled, { css } from 'styled-components';

import BaseSpacing from '../BaseSpacing';
import { getColorFromTheme } from '../shared/mixins';
import { TypographyStyledProps } from './types';
import { STYLES } from './constants';

export const BaseTypography = styled(BaseSpacing)<TypographyStyledProps>`
  ${({ theme }) => css`
    font-family: ${theme.typography.font.primary};
  `}

  ${({ $variant }) => $variant && STYLES[$variant]}

  ${({ $color, theme }) =>
    $color &&
    css`
      color: ${getColorFromTheme(theme, $color)};
    `}

  ${({ $fontWeight }) =>
    $fontWeight &&
    css`
      font-weight: ${$fontWeight};
    `}

  ${({ $ellipsize }) =>
    $ellipsize &&
    css`
      white-space: nowrap;
      text-overflow: ellipsis;
      min-width: 0;
      overflow: hidden;
    `}
`;
