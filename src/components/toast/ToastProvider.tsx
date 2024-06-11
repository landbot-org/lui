import React, { ReactNode } from 'react';

import { ExtendedRefs, Placement, UseFloatingReturn, useMergeRefs } from '@floating-ui/react';

import { Toast } from './Toast';
import { Options, ToastsType } from './Toast.types';
import { useToasts } from './useToasts';

type ContextType = {
  listRef: React.MutableRefObject<Array<HTMLElement | null>>;
  index: number;
  toasts: ToastsType;
  addToast: (content: ReactNode, options?: Options, callback?: (id: string) => void) => void;
  removeToast: (toastId: string) => void;
  refs: ExtendedRefs<Element>;
  autoDismissTimeout: number;
} & UseFloatingReturn;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ToastContext = React.createContext<ContextType>(null as any);

export const useToastsContext = () => {
  const context = React.useContext(ToastContext);

  if (context == null) {
    throw new Error('Toast components must be wrapped in <ToastProvider />');
  }

  return context;
};

export function ToastProvider({
  placement,
  autoDismissTimeout = 3000,
  children,
}: {
  placement?: Placement;
  autoDismissTimeout?: number;
  children: React.ReactNode;
}) {
  const context = useToasts({ placement });

  const ref = useMergeRefs([context.refs.setReference, context.refs.setFloating]);

  return (
    <ToastContext.Provider value={{ ...context, autoDismissTimeout }}>
      <div ref={ref}>
        {context.toasts.map(({ id, content, appearance, autoDismiss }, index) => (
          <Toast
            key={index}
            toastId={id}
            appearance={appearance}
            autoDismiss={autoDismiss}
            ref={(node) => {
              context.listRef.current[index] = node;
            }}
            i={index}
          >
            {content}
          </Toast>
        ))}
      </div>
      {children}
    </ToastContext.Provider>
  );
}
