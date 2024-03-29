import type { Theme } from '../../shared/theme.types';

export const getBackgroundColorFromState = ({
  checked,
  disabled,
  theme,
  $indeterminate,
}: {
  checked?: boolean;
  disabled?: boolean;
  theme: Theme;
  $indeterminate?: boolean;
}) => {
  if (disabled && $indeterminate) {
    return theme.palette.purple[400];
  }
  if (!disabled && $indeterminate) {
    return theme.palette.purple.main;
  }
  if (checked && !disabled) {
    return theme.palette.purple.main;
  }
  if (disabled) {
    return theme.palette.neutral[300];
  }
  return 'white';
};

export const getColorFromState = ({
  checked,
  disabled,
  theme,
}: {
  checked?: boolean;
  disabled?: boolean;
  theme: Theme;
}) => {
  if (checked && disabled) {
    return encodeURIComponent(theme.palette.neutral[400]);
  }
  if (checked && !disabled) {
    return 'white';
  }
  return 'transparent';
};

export const getBorderColorFromState = ({
  checked,
  disabled,
  theme,
  $indeterminate,
}: {
  checked?: boolean;
  disabled?: boolean;
  theme: Theme;
  $indeterminate?: boolean;
}) => {
  if (disabled && $indeterminate) {
    return theme.palette.purple[400];
  }
  if (!disabled && $indeterminate) {
    return theme.palette.purple.main;
  }
  if ((checked && disabled) || !checked) {
    return theme.palette.neutral[400];
  }
  return theme.palette.purple.main;
};
