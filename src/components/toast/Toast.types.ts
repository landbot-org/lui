import { ReactNode } from 'react';

export type ToastVariant = 'success' | 'info' | 'warning' | 'error';

export type Options = {
  appearance?: ToastVariant;
  autoDismiss?: boolean;
  id?: string;
  onDismiss?: (id: string) => void;
  [key: string]: unknown;
};

export type ToastType = Options & {
  appearance: ToastVariant;
  content: ReactNode;
  id: string;
};

export type ToastsType = Array<ToastType>;

export interface ToastProps {
  open?: boolean;
  variant: ToastVariant;
}
