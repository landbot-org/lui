import { css } from 'styled-components';

import type { Theme } from '../shared/theme.types';
import {
  ACTIVE_MAPPING,
  CONTAINED_HOVER_BACKGROUND_MAPPING,
  DEFAULT_HOVER_BACKGROUND_MAPPING,
} from './Button.constants';
import { ButtonVariants, ColorTypes } from './Button.types';

export const getButtonVariantStyles = (
  theme: Theme,
  color: ColorTypes,
  variant: ButtonVariants,
  disabled: boolean,
  isLoading: boolean,
) =>
  ({
    contained: css`
      color: ${getTypographyColorContained(theme, disabled, isLoading)};
      background-color: ${getBackgroundColor(theme, color, disabled)};
      border-color: transparent;
      border-radius: 4px;
      &:hover {
        color: ${getTypographyColorContained(theme, disabled, isLoading)};
        background-color: ${getHoverBackgroundColor(variant, color, disabled)};
      }
      &:active {
        background-color: ${getActiveColor(variant, color, disabled)};
      }
    `,
    outlined: css`
      color: ${getTypographyColorDefault(theme, color, disabled, isLoading)};
      background-color: transparent;
      border: 1px solid ${getBorderColor(theme, color, disabled)};
      border-radius: 4px;
      &:hover {
        color: ${getTypographyColorDefault(theme, color, disabled, isLoading)};
        background-color: ${getHoverBackgroundColor(variant, color, disabled)};
      }
      &:active {
        border-color: ${getActiveColor(variant, color, disabled)};
      }
    `,
    text: css`
      color: ${getTypographyColorDefault(theme, color, disabled, isLoading)};
      background-color: transparent;
      border-color: transparent;
      border-radius: 4px;
      &:hover {
        color: ${getTypographyColorDefault(theme, color, disabled, isLoading)};
        background-color: ${getHoverBackgroundColor(variant, color, disabled)};
      }
    `,
  })[variant];

export const getTypographyColorContained = (theme: Theme, disabled: boolean, isLoading: boolean) => {
  if (isLoading) {
    return theme.palette.white.main;
  }

  if (disabled) {
    return theme.palette.neutral[200];
  }

  return theme.palette.white.main;
};

export const getTypographyColorDefault = (theme: Theme, color: ColorTypes, disabled: boolean, isLoading: boolean) => {
  if (isLoading) {
    return theme.palette.white.main;
  }

  if (disabled) {
    return theme.palette.neutral[300];
  }

  return {
    'pink.main': theme.palette.pink.main,
    'blue.main': theme.palette.blue.main,
    'purple.main': theme.palette.purple.main,
    'white.main': theme.palette.white.main,
  }[color];
};

export const getBackgroundColor = (theme: Theme, color: ColorTypes, disabled?: boolean) => {
  if (disabled) {
    return theme.palette.neutral[300];
  }

  return {
    'pink.main': theme.palette.pink.main,
    'blue.main': theme.palette.blue.main,
    'purple.main': theme.palette.purple.main,
    'white.main': theme.palette.neutral[400],
  }[color];
};

export const getBorderColor = (theme: Theme, color: ColorTypes, disabled?: boolean) => {
  if (disabled) {
    return theme.palette.neutral[300];
  }

  return {
    'pink.main': theme.palette.pink.main,
    'blue.main': theme.palette.blue.main,
    'purple.main': theme.palette.purple.main,
    'white.main': theme.palette.white.main,
  }[color];
};

export const getHoverBackgroundColor = (variant: ButtonVariants, color: ColorTypes, disabled?: boolean) => {
  if (disabled) {
    return null;
  }
  return {
    contained: CONTAINED_HOVER_BACKGROUND_MAPPING[color],
    outlined: DEFAULT_HOVER_BACKGROUND_MAPPING[color],
    text: DEFAULT_HOVER_BACKGROUND_MAPPING[color],
  }[variant];
};

export const getActiveColor = (variant: ButtonVariants, color: ColorTypes, disabled?: boolean) => {
  if (disabled) {
    return null;
  }
  return {
    contained: ACTIVE_MAPPING[color],
    outlined: ACTIVE_MAPPING[color],
    text: ACTIVE_MAPPING[color],
  }[variant];
};
