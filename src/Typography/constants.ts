import { css } from 'styled-components';
import { pxToRem } from '../shared/mixins';
import { TypographyVariants } from './types';

export const VARIANT_MAPPING: Record<TypographyVariants, React.ElementType | keyof JSX.IntrinsicElements> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  body1: 'p',
  body2: 'p',
};

export const STYLES: Record<TypographyVariants, ReturnType<typeof css>> = {
  h1: css`
    font-size: ${pxToRem(30)}rem;
    font-weight: bold;
    letter-spacing: ${pxToRem(-0.3)}rem;
  `,
  h2: css`
    font-size: ${pxToRem(20)}rem;
    font-weight: bold;
    letter-spacing: ${pxToRem(-0.5)}rem;
  `,
  h3: css`
    font-size: ${pxToRem(16)}rem;
    font-weight: bold;
    letter-spacing: ${pxToRem(-0.5)}rem;
  `,
  body1: css`
    font-size: ${pxToRem(14)}rem;
    line-height: 1.5;
    letter-spacing: ${pxToRem(-0.4)}rem;
  `,
  body2: css`
    font-size: ${pxToRem(13)}rem;
    line-height: 1.6;
    letter-spacing: ${pxToRem(-0.2)}rem;
  `,
};
