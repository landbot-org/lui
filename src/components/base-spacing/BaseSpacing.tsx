import { css, styled } from 'styled-components';
import { pxToRem } from '../../shared/mixins';
import { StyledBaseSpacingProps } from './BaseSpacing.types';

export const BaseSpacing = styled.div<StyledBaseSpacingProps>`
  ${({ $m }) =>
    $m === undefined
      ? css`
          margin: 0rem;
        `
      : css`
          margin: ${({ theme }) => pxToRem(theme.base_spacing * $m)}rem;
        `}

  ${({ $mt }) =>
    $mt !== undefined &&
    css`
      margin-top: ${({ theme }) => pxToRem(theme.base_spacing * $mt)}rem;
    `}

  ${({ $mr }) =>
    $mr !== undefined &&
    css`
      margin-right: ${({ theme }) => pxToRem(theme.base_spacing * $mr)}rem;
    `}

  ${({ $mb }) =>
    $mb !== undefined &&
    css`
      margin-bottom: ${({ theme }) => pxToRem(theme.base_spacing * $mb)}rem;
    `}

  ${({ $ml }) =>
    $ml !== undefined &&
    css`
      margin-left: ${({ theme }) => pxToRem(theme.base_spacing * $ml)}rem;
    `}

  ${({ $mx }) =>
    $mx !== undefined &&
    css`
      margin-right: ${({ theme }) => pxToRem(theme.base_spacing * $mx)}rem;
      margin-left: ${({ theme }) => pxToRem(theme.base_spacing * $mx)}rem;
    `}

  ${({ $my }) =>
    $my !== undefined &&
    css`
      margin-top: ${({ theme }) => pxToRem(theme.base_spacing * $my)}rem;
      margin-bottom: ${({ theme }) => pxToRem(theme.base_spacing * $my)}rem;
    `}

  ${({ $p }) =>
    $p === undefined
      ? css`
          padding: 0rem;
        `
      : css`
          padding: ${({ theme }) => pxToRem(theme.base_spacing * $p)}rem;
        `}

  ${({ $pt }) =>
    $pt !== undefined &&
    css`
      padding-top: ${({ theme }) => pxToRem(theme.base_spacing * $pt)}rem;
    `}

  ${({ $pr }) =>
    $pr !== undefined &&
    css`
      padding-right: ${({ theme }) => pxToRem(theme.base_spacing * $pr)}rem;
    `}

  ${({ $pb }) =>
    $pb !== undefined &&
    css`
      padding-bottom: ${({ theme }) => pxToRem(theme.base_spacing * $pb)}rem;
    `}

  ${({ $pl }) =>
    $pl !== undefined &&
    css`
      padding-left: ${({ theme }) => pxToRem(theme.base_spacing * $pl)}rem;
    `}

  ${({ $px }) =>
    $px !== undefined &&
    css`
      padding-right: ${({ theme }) => pxToRem(theme.base_spacing * $px)}rem;
      padding-left: ${({ theme }) => pxToRem(theme.base_spacing * $px)}rem;
    `}

  ${({ $py }) =>
    $py !== undefined &&
    css`
      padding-top: ${({ theme }) => pxToRem(theme.base_spacing * $py)}rem;
      padding-bottom: ${({ theme }) => pxToRem(theme.base_spacing * $py)}rem;
    `}
`;
