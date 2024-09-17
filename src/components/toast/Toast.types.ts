import { CSSProperties, ReactNode } from 'react';

export type ToastVariant = 'success' | 'info' | 'warning' | 'error';

export type Options = {
  variant?: ToastVariant;
  autoDismiss?: boolean;
  hideIcon?: boolean;
  icon?: ReactNode;
  hideCloseButton?: boolean;
  action?: ReactNode;
  style?: CSSProperties;
};

export type ToastType = Options & {
  message: ReactNode;
  id: string;
};

export type ToastsType = Array<ToastType>;
