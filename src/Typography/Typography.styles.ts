import styled, { css } from 'styled-components';
import BaseSpacing from '../BaseSpacing';
import { Theme } from '../shared/theme.types';
import { TypographyProps } from './types';
import { STYLES } from './constants';

export const BaseTypography = styled(BaseSpacing)<TypographyProps>`
  ${({ theme }: { theme: Theme }) => css`
    font-family: ${theme.typography.font.primary};
  `}

  ${({ variant = 'body1' }: TypographyProps) => STYLES[variant]}

  ${({ weight }: TypographyProps) =>
    css`
      font-weight: ${weight};
    `}

  ${({ ellipsize }: TypographyProps) =>
    ellipsize &&
    css`
      white-space: nowrap;
      text-overflow: ellipsis;
      min-width: 0;
      overflow: hidden;
    `}
`;
