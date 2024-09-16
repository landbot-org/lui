import { CSSProperties, ReactNode } from 'react';
import { ButtonColorTypes, ButtonProps, ButtonVariants } from '../button';

export type ToastVariant = 'success' | 'info' | 'warning' | 'error';

export type Options = {
  variant?: ToastVariant;
  autoDismiss?: boolean;
  hideIcon?: boolean;
  icon?: ReactNode;
  hideCloseButton?: boolean;
  action?: {
    variant?: ButtonVariants;
    color?: ButtonColorTypes;
    props?: ButtonProps;
    text?: string;
  };
  style?: CSSProperties;
};

export type ToastType = Options & {
  message: ReactNode;
  id: string;
};

export type ToastsType = Array<ToastType>;
