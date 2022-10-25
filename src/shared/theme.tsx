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
      primary: '\'DM Sans\', sans-serif',
    },
  },
};
