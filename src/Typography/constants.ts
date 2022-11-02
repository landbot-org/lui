import { css } from 'styled-components';
import { Theme } from '../shared/theme.types';
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
  body1: 'p',
  body2: 'p',
  caption: 'span',
  overline: 'span',
};

export const STYLES: Record<TypographyVariants, ReturnType<typeof css>> = {
  h1: css`
    color: ${({ theme }: { theme: Theme }) => theme.palette.blue[900]};
    font-size: 3rem;
    font-weight: 400;
    letter-spacing: -1px;
    line-height: 60px;
  `,
  h2: css`
    color: ${({ theme }: { theme: Theme }) => theme.palette.blue[900]};
    font-size: 2.5rem;
    font-weight: 400;
    letter-spacing: -0.5px;
    line-height: 50px;
  `,
  h3: css`
    color: ${({ theme }: { theme: Theme }) => theme.palette.blue[900]};
    font-size: 2rem;
    font-weight: 500;
    letter-spacing: -0.5px;
    line-height: 40px;
  `,
  h4: css`
    color: ${({ theme }: { theme: Theme }) => theme.palette.blue[900]};
    font-size: 1.75rem;
    font-weight: 500;
    letter-spacing: 0px;
    line-height: 35px;
  `,
  h5: css`
    color: ${({ theme }: { theme: Theme }) => theme.palette.blue[900]};
    font-size: 1.5rem;
    font-weight: 500;
    letter-spacing: 0px;
    line-height: 30px;
  `,
  h6: css`
    color: ${({ theme }: { theme: Theme }) => theme.palette.blue[900]};
    font-size: 1.375rem;
    font-weight: 500;
    letter-spacing: 0px;
    line-height: 28px;
  `,
  subtitle1: css`
    color: ${({ theme }: { theme: Theme }) => theme.palette.blue[900]};
    font-size: 1.25rem;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 28px;
  `,
  subtitle2: css`
    color: ${({ theme }: { theme: Theme }) => theme.palette.blue[900]};
    font-size: 1.125rem;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 28px;
  `,
  body1: css`
    color: ${({ theme }: { theme: Theme }) => theme.palette.blue[900]};
    font-size: 1rem;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 24px;
  `,
  body2: css`
    color: ${({ theme }: { theme: Theme }) => theme.palette.blue[900]};
    font-size: 0.875rem;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 22px;
  `,
  caption: css`
    color: ${({ theme }: { theme: Theme }) => theme.palette.blue[900]};
    font-size: 0.75rem;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 18px;
  `,
  overline: css`
    color: ${({ theme }: { theme: Theme }) => theme.palette.blue[900]};
    font-size: 0.75rem;
    font-weight: 400;
    letter-spacing: 1px;
    line-height: 18px;
    text-transform: uppercase;
  `,
};
