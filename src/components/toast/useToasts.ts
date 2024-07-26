import React, { ReactNode, useCallback } from 'react';

import { Placement, autoUpdate, inner, useFloating } from '@floating-ui/react';

import { Options, ToastType, ToastsType } from './Toast.types';

export function generateUEID() {
  const first = ('000' + ((Math.random() * 46656) | 0).toString(36)).slice(-3);
  const second = ('000' + ((Math.random() * 46656) | 0).toString(36)).slice(-3);
  return `${first}${second}`;
}

export function useToasts({ placement = 'bottom' }: { placement?: Placement }) {
  const index = React.useState(0)[0];
  const [toasts, setToasts] = React.useState<ToastsType>([]);
  const listRef = React.useRef<Array<HTMLElement | null>>([]);

  const data = useFloating({
    placement,
    open: true,
    whileElementsMounted: autoUpdate,
    middleware: [
      inner({
        listRef,
        index,
      }),
    ],
  });

  const addToast = useCallback((content: ReactNode, options: Options = {}) => {
    const id = options?.id ?? generateUEID();
    const newToast = { id, content, ...options } as ToastType;
    setToasts((prev) => [...prev, newToast]);
  }, []);

  const removeToast = useCallback((toastId: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== toastId));
  }, []);

  return React.useMemo(
    () => ({
      listRef,
      index,
      toasts,
      addToast,
      removeToast,
      ...data,
    }),
    [listRef, index, toasts, addToast, removeToast, data],
  );
}
