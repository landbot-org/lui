import { ReactNode } from 'react';

import { ButtonColorTypes, ButtonProps, ButtonVariants } from '../button';

export type ToastVariant = 'success' | 'info' | 'warning' | 'error';

export type Options = {
  variant?: ToastVariant;
  autoDismiss?: boolean;
  id?: string;
  showIcon?: boolean;
  icon?: ReactNode;
  showCloseButton?: boolean;
  showAction?: boolean;
  actionVariant?: ButtonVariants;
  actionColor?: ButtonColorTypes;
  actionProps?: ButtonProps;
  actionText?: string;
};

export type ToastType = Options & {
  variant: ToastVariant;
  message: ReactNode;
  id: string;
  showIcon: boolean;
  icon?: ReactNode;
  showCloseButton: boolean;
  showAction: boolean;
  actionVariant: ButtonVariants;
  actionColor: ButtonColorTypes;
  actionProps: ButtonProps;
  actionText: string;
};

export type ToastsType = Array<ToastType>;
