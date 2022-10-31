import { getColorFromTheme } from './mixins';
import { theme } from './theme';
import { ColorsTypes } from './theme.types';

describe('mixins', () => {
  it.each([
    ['blue.100', theme.palette.blue[100]],
    ['pink.300', theme.palette.pink[300]],
  ])('getColorFromTheme(theme, %i)', (color, expected) => {
    expect(getColorFromTheme(theme, color as ColorsTypes)).toBe(expected);
  });
});
