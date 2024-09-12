import React, { ReactNode, useCallback } from 'react';

import { autoUpdate, inner, useFloating } from '@floating-ui/react';

import { Options, ToastType, ToastsType } from './Toast.types';

function generateUID() {
  return Math.random().toString(36).slice(2, 11);
}

export function useToasts() {
  const index = React.useState(0)[0];
  const [toasts, setToasts] = React.useState<ToastsType>([]);
  const listRef = React.useRef<Array<HTMLElement | null>>([]);

  const data = useFloating({
    placement: 'bottom',
    open: true,
    whileElementsMounted: autoUpdate,
    middleware: [
      inner({
        listRef,
        index,
      }),
    ],
  });

  const addToast = useCallback((message: ReactNode, options: Options = {}) => {
    const newToast: ToastType = {
      id: generateUID(),
      message,
      showIcon: options.showIcon || true,
      showCloseButton: options.showCloseButton || true,
      showAction: options.showAction || false,
      actionColor: options.actionColor || 'purple.main',
      actionProps: options.actionProps || {},
      actionVariant: options.actionVariant || 'contained',
      variant: 'success',
      actionText: options.actionText || '',
      ...options,
    };
    setToasts((prev) => [...prev, newToast]);
  }, []);

  const removeToast = useCallback((toastId: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== toastId));
  }, []);

  const removeAllToasts = useCallback(() => {
    setToasts([]);
  }, []);

  return React.useMemo(
    () => ({
      listRef,
      index,
      toasts,
      addToast,
      removeToast,
      removeAllToasts,
      ...data,
    }),
    [listRef, index, toasts, addToast, removeToast, data, removeAllToasts],
  );
}
