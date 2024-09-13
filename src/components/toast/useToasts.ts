import { ReactNode, useCallback, useMemo, useRef, useState } from 'react';

import { autoUpdate, inner, useFloating } from '@floating-ui/react';

import { Options, ToastType, ToastsType } from './Toast.types';

function generateUID() {
  return Math.random().toString(36).slice(2, 11);
}

export function useToasts() {
  const [index, _] = useState(0);
  const [toasts, setToasts] = useState<ToastsType>([]);
  const listRef = useRef<Array<HTMLElement | null>>([]);

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
      showIcon: options.showIcon,
      hideCloseButton: options.hideCloseButton,
      action: options.action,
      variant: options.variant,
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

  return useMemo(
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
