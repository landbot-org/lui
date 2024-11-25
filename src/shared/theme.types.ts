export interface Theme {
  base_spacing: 8;
  palette: {
    neutral: {
      main: string;
      50: string;
      100: string;
      200: string;
      300: string;
      400: string;
      600: string;
      700: string;
      800: string;
      900: string;
    };
    blue: {
      main: string;
      50: string;
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      800: string;
      900: string;
    };
    pink: {
      main: string;
      50: string;
      100: string;
      200: string;
      300: string;
      400: string;
      600: string;
      700: string;
    };
    teal: {
      main: string;
      200: string;
      400: string;
      600: string;
      700: string;
    };
    purple: {
      main: string;
      50: string;
      100: string;
      200: string;
      300: string;
      400: string;
      600: string;
      700: string;
    };
    orange: {
      main: string;
      100: string;
      200: string;
      400: string;
      600: string;
      700: string;
    };
    success: {
      dark: string;
      main: string;
      light: string;
    };
    info: {
      dark: string;
      main: string;
      light: string;
    };
    warning: {
      dark: string;
      main: string;
      light: string;
    };
    error: {
      dark: string;
      main: string;
      light: string;
    };
    white: {
      main: string;
    };
    meta: {
      main: string;
    };
    whatsapp: {
      main: string;
      secondary: string;
      light: string;
      tertiary: string;
      background: string;
    };
  };
  typography: {
    font: {
      primary: string;
    };
  };
}

type NeutralColorsTypes =
  | 'neutral.main'
  | 'neutral.50'
  | 'neutral.100'
  | 'neutral.200'
  | 'neutral.300'
  | 'neutral.400'
  | 'neutral.600'
  | 'neutral.700'
  | 'neutral.800'
  | 'neutral.900';
type BlueColorsTypes =
  | 'blue.main'
  | 'blue.50'
  | 'blue.100'
  | 'blue.200'
  | 'blue.300'
  | 'blue.400'
  | 'blue.500'
  | 'blue.600'
  | 'blue.800'
  | 'blue.900';
type PinkColorsTypes =
  | 'pink.main'
  | 'pink.50'
  | 'pink.100'
  | 'pink.200'
  | 'pink.300'
  | 'pink.400'
  | 'pink.600'
  | 'pink.700';
type TealColorsTypes = 'teal.main' | 'teal.200' | 'teal.400' | 'teal.600' | 'teal.700';
type PurpleColorsTypes =
  | 'purple.main'
  | 'purple.50'
  | 'purple.100'
  | 'purple.200'
  | 'purple.300'
  | 'purple.400'
  | 'purple.600'
  | 'purple.700';
type OrangeColorsTypes = 'orange.main' | 'orange.100' | 'orange.200' | 'orange.400' | 'orange.600' | 'orange.700';
type SuccessColorsTypes = 'success.dark' | 'success.main' | 'success.light';
type InfoColorsTypes = 'info.dark' | 'info.main' | 'info.light';
type WarningColorsTypes = 'warning.dark' | 'warning.main' | 'warning.light';
type ErrorColorsTypes = 'error.dark' | 'error.main' | 'error.light';
type WhiteColorsTypes = 'white.main';
type MetaColorsTypes = 'meta.main';
type WhatsappColorsTypes =
  | 'whatsapp.main'
  | 'whatsapp.secondary'
  | 'whatsapp.light'
  | 'whatsapp.tertiary'
  | 'whatsapp.background';

export type ColorsTypes =
  | NeutralColorsTypes
  | BlueColorsTypes
  | PinkColorsTypes
  | TealColorsTypes
  | PurpleColorsTypes
  | OrangeColorsTypes
  | SuccessColorsTypes
  | InfoColorsTypes
  | WarningColorsTypes
  | ErrorColorsTypes
  | WhiteColorsTypes
  | MetaColorsTypes
  | WhatsappColorsTypes;
