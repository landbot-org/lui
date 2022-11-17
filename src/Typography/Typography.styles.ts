import styled, { css } from 'styled-components';

import BaseSpacing from '../BaseSpacing';
import { getColorFromTheme } from '../shared/mixins';
import { TypographyProps } from './types';
import { STYLES } from './constants';

export const BaseTypography = styled(BaseSpacing)<TypographyProps>`
  ${({ theme }) => css`
    font-family: ${theme.typography.font.primary};
  `}

  ${({ variant = 'body1' }) => STYLES[variant]}

  ${({ color, theme }) =>
    css`
      color: ${getColorFromTheme(theme, color || 'blue.900')};
    `}

  ${({ fontWeight }) =>
    css`
      font-weight: ${fontWeight};
    `}

  ${({ ellipsize }) =>
    ellipsize &&
    css`
      white-space: nowrap;
      text-overflow: ellipsis;
      min-width: 0;
      overflow: hidden;
    `}
`;
