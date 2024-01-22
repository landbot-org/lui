import { CSSProperties, ReactNode } from 'react';

export type SlideDownProps = {
  children?: ReactNode;
  visible?: boolean;
  duration?: number;
  style?: CSSProperties;
};
