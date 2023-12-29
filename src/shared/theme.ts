import { BLUE, ERROR, INFO, NEUTRAL, ORANGE, PINK, PURPLE, SUCCESS, TEAL, WARNING, WHITE } from './palette';
import { Theme } from './theme.types';

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
    white: WHITE,
  },
  typography: {
    font: {
      // eslint-disable-next-line quotes
      primary: "'DM Sans', sans-serif",
    },
  },
};
