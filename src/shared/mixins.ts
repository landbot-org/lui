import { ColorsTypes, Theme } from './theme.types';

export const pxToRem = (pixels: number, base = 16): number => pixels / base;

export const getColorFromTheme = (theme: Theme, color: ColorsTypes) => {
  const [colorCategory, colorType] = color.split('.');
  return theme.palette[colorCategory as keyof Theme['palette']][colorType];
};
