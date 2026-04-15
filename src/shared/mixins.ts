import { ColorsTypes, Theme } from './theme.types';

/** Converts a pixel value to rem units */
export const pxToRem = (pixels: number, base = 16): number => pixels / base;

type KeyTypeColors = keyof Theme['palette'][keyof Theme['palette']];

/** Returns a color value from the theme given a dot-notation color key */
export const getColorFromTheme = (theme: Theme, color: ColorsTypes) => {
  const [colorCategory, colorType] = color.split('.');
  return theme.palette[colorCategory as keyof Theme['palette']][colorType as KeyTypeColors];
};
