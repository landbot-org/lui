import React, { MutableRefObject, ReactNode, createContext, useContext } from 'react';
import { ExtendedRefs, UseFloatingReturn, useMergeRefs } from '@floating-ui/react';
import { ToastContent } from './Toast';
import { Options, ToastsType } from './Toast.types';
import { useToasts } from './useToasts';

type ContextType = {
  listRef: MutableRefObject<Array<HTMLElement | null>>;
  index: number;
  toasts: ToastsType;
  addToast: (content: ReactNode, options?: Options) => void;
  removeToast: (toastId: string) => void;
  removeAllToasts: () => void;
  refs: ExtendedRefs<Element>;
} & UseFloatingReturn;

const ToastContext = createContext<ContextType | null>(null);

export const useToastsContext = () => {
  const context = useContext(ToastContext);

  if (context == null) {
    throw new Error('Toast components must be wrapped in <ToastProvider />');
  }

  return context;
};

export function ToastProvider({ children }: { children: ReactNode }) {
  const context = useToasts();

  const ref = useMergeRefs([context.refs.setReference, context.refs.setFloating]);

  return (
    <ToastContext.Provider value={{ ...context }}>
      <div ref={ref}>
        {context.toasts.map(
          ({ id, message, variant, autoDismiss, hideIcon, icon, hideCloseButton, action, style }, index) => (
            <ToastContent
              key={id}
              toastId={id}
              variant={variant}
              autoDismiss={autoDismiss}
              ref={(node) => {
                context.listRef.current[index] = node;
              }}
              toastIndex={index}
              hideIcon={hideIcon}
              icon={icon}
              hideCloseButton={hideCloseButton}
              message={message}
              action={action}
              style={style}
            />
          ),
        )}
      </div>
      {children}
    </ToastContext.Provider>
  );
}
