import styled, { css } from 'styled-components';

import { pxToRem } from '../shared/mixins';
import { BaseSpacingProps } from './types';

const BaseSpacing = styled.div<BaseSpacingProps>`
  ${({ m }) =>
    m === undefined
      ? css`
          margin: 0px;
        `
      : css`
          margin: ${({ theme }) => pxToRem(theme.base_spacing * m)}px;
        `}

  ${({ mt }) =>
    mt !== undefined &&
    css`
      margin-top: ${({ theme }) => pxToRem(theme.base_spacing * mt)}px;
    `}

  ${({ mr }) =>
    mr !== undefined &&
    css`
      margin-right: ${({ theme }) => pxToRem(theme.base_spacing * mr)}px;
    `}

  ${({ mb }) =>
    mb !== undefined &&
    css`
      margin-bottom: ${({ theme }) => pxToRem(theme.base_spacing * mb)}px;
    `}

  ${({ ml }) =>
    ml !== undefined &&
    css`
      margin-left: ${({ theme }) => pxToRem(theme.base_spacing * ml)}px;
    `}

  ${({ mx }) =>
    mx !== undefined &&
    css`
      margin-right: ${({ theme }) => pxToRem(theme.base_spacing * mx)}px;
      margin-left: ${({ theme }) => pxToRem(theme.base_spacing * mx)}px;
    `}

  ${({ my }) =>
    my !== undefined &&
    css`
      margin-top: ${({ theme }) => pxToRem(theme.base_spacing * my)}px;
      margin-bottom: ${({ theme }) => pxToRem(theme.base_spacing * my)}px;
    `}

  ${({ p }) =>
    p === undefined
      ? css`
          padding: 0px;
        `
      : css`
          padding: ${({ theme }) => pxToRem(theme.base_spacing * p)}px;
        `}

  ${({ pt }) =>
    pt !== undefined &&
    css`
      padding-top: ${({ theme }) => pxToRem(theme.base_spacing * pt)}px;
    `}

  ${({ pr }) =>
    pr !== undefined &&
    css`
      padding-right: ${({ theme }) => pxToRem(theme.base_spacing * pr)}px;
    `}

  ${({ pb }) =>
    pb !== undefined &&
    css`
      padding-bottom: ${({ theme }) => pxToRem(theme.base_spacing * pb)}px;
    `}

  ${({ pl }) =>
    pl !== undefined &&
    css`
      padding-left: ${({ theme }) => pxToRem(theme.base_spacing * pl)}px;
    `}

  ${({ px }) =>
    px !== undefined &&
    css`
      padding-right: ${({ theme }) => pxToRem(theme.base_spacing * px)}px;
      padding-left: ${({ theme }) => pxToRem(theme.base_spacing * px)}px;
    `}

  ${({ py }) =>
    py !== undefined &&
    css`
      padding-top: ${({ theme }) => pxToRem(theme.base_spacing * py)}px;
      padding-bottom: ${({ theme }) => pxToRem(theme.base_spacing * py)}px;
    `}
`;

export default BaseSpacing;
