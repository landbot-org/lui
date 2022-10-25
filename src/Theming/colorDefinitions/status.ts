export const STATUS_ENUM = {
  SUCCESS: 'success',
  SUCCESS600: 'success600',
  SUCCESS100: 'success100',

  WARNING: 'warning',
  WARNING700: 'warning700',
  WARNING100: 'warning100',

  ERROR: 'error',
  ERROR700: 'error700',
  ERROR100: 'error100',

  ALERT: 'alert',
} as const;

export const STATUS_COLORS = {
  success: '#74BC21',
  success600: '#458710',
  success100: '#F0FBD2',

  warning: '#FCCC2D',
  warning700: '#B58816',
  warning100: '#FEF9D4',

  error: '#DD0E0E',
  error700: '#BE0A19',
  error100: '#FFC799',

  alert: '#DD0E0E',
} as const;
