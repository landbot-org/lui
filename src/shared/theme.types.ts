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
      200: string;
      300: string;
      400: string;
      600: string;
      700: string;
    };
    orange: {
      main: string;
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
  };
  typography: {
    font: {
      primary: string;
    };
  };
}
