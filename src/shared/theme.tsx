export interface Theme {
  base_spacing: 8;
  typography: {
    font: {
      primary: string;
    };
  };
}

export const theme: Theme = {
  base_spacing: 8,
  typography: {
    font: {
      primary:
        'Gotham Rounded SSm A, Gotham Rounded SSm B, Gotham Rounded, Helvetica, sans-serif;',
    },
  },
};
