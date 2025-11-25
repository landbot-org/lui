import {
  BLUE,
  ERROR,
  INFO,
  META,
  NEUTRAL,
  ORANGE,
  PINK,
  PURPLE,
  SUCCESS,
  TEAL,
  WARNING,
  WHATSAPP,
  WHITE,
} from './palette';
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
    meta: META,
    whatsapp: WHATSAPP,
  },
  typography: { font: { primary: "'DM Sans', sans-serif" } },
};
