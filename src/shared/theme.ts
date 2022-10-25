import { Theme } from './theme.types';
import { BLUE, ERROR, INFO, NEUTRAL, ORANGE, PINK, PURPLE, SUCCESS, TEAL, WARNING } from './palette';

export const theme: Theme = {
  base_spacing: 8,
  palette: {
    neutral: NEUTRAL,
    blue: BLUE,
    pink: PINK,
    teal: TEAL,
    purple: PURPLE,
    orange: ORANGE,
    success: SUCCESS,
    info: INFO,
    warning: WARNING,
    error: ERROR,
  },
  typography: {
    font: {
      primary: '\'DM Sans\', sans-serif',
    },
  },
};
