import { css } from 'styled-components';
import { TypographyVariants } from './types';

export const VARIANT_MAPPING: Record<TypographyVariants, React.ElementType | keyof JSX.IntrinsicElements> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  subtitle1: 'h6',
  subtitle2: 'h6',
  text16: 'p',
  text14: 'p',
  text12: 'p',
  text10: 'p',
};

export const STYLES: Record<TypographyVariants, ReturnType<typeof css>> = {
  h1: css`
    font-size: 3rem;
    font-weight: 400;
    letter-spacing: -1px;
    line-height: 60px;
  `,
  h2: css`
    font-size: 2.5rem;
    font-weight: 400;
    letter-spacing: -0.5px;
    line-height: 50px;
  `,
  h3: css`
    font-size: 2rem;
    font-weight: 500;
    letter-spacing: -0.5px;
    line-height: 40px;
  `,
  h4: css`
    font-size: 1.75rem;
    font-weight: 500;
    letter-spacing: 0px;
    line-height: 34px;
  `,
  h5: css`
    font-size: 1.5rem;
    font-weight: 500;
    letter-spacing: 0px;
    line-height: 32px;
  `,
  h6: css`
    font-size: 1.375rem;
    font-weight: 500;
    letter-spacing: 0px;
    line-height: 28px;
  `,
  subtitle1: css`
    font-size: 1.25rem;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 28px;
  `,
  subtitle2: css`
    font-size: 1.125rem;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 28px;
  `,
  text16: css`
    font-size: 1rem;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 24px;
  `,
  text14: css`
    font-size: 0.875rem;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 22px;
  `,
  text12: css`
    font-size: 0.75rem;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 20px;
  `,
  text10: css`
    font-size: 0.625rem;
    font-weight: 400;
    letter-spacing: 1px;
    line-height: 18px;
  `,
};
