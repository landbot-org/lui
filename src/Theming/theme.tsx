import React from "react";
import {
  BLUE_COLORS,
  BLUE_ENUM,
  GREEN_COLORS,
  GREEN_ENUM,
  NEUTRAL_COLORS,
  NEUTRAL_ENUM,
  ORANGE_COLORS,
  ORANGE_ENUM,
  PINK_COLORS,
  PINK_ENUM,
  PURPLE_COLORS,
  PURPLE_ENUM,
  STATUS_COLORS,
  STATUS_ENUM,
} from "./colorDefinitions";

export const COLORS = {
  ...BLUE_ENUM,
  ...GREEN_ENUM,
  ...NEUTRAL_ENUM,
  ...ORANGE_ENUM,
  ...PINK_ENUM,
  ...PURPLE_ENUM,
  ...STATUS_ENUM,
} as const;

export type ColorVariants = typeof COLORS[keyof typeof COLORS];

export interface Theme {
  color: Record<ColorVariants, string>;
}

export const theme: Theme = {
  color: {
    ...BLUE_COLORS,
    ...GREEN_COLORS,
    ...NEUTRAL_COLORS,
    ...ORANGE_COLORS,
    ...PINK_COLORS,
    ...PURPLE_COLORS,
    ...STATUS_COLORS,
  },
};

export const LUIThemeProvider = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => <>{children}</>;
