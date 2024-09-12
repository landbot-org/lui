import React, { ReactNode } from 'react';

import { ExtendedRefs, UseFloatingReturn, useMergeRefs } from '@floating-ui/react';

import { ToastContent } from './Toast';
import { Options, ToastsType } from './Toast.types';
import { useToasts } from './useToasts';

type ContextType = {
  listRef: React.MutableRefObject<Array<HTMLElement | null>>;
  index: number;
  toasts: ToastsType;
  addToast: (content: ReactNode, options?: Options) => void;
  removeToast: (toastId: string) => void;
  removeAllToasts: () => void;
  refs: ExtendedRefs<Element>;
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

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const context = useToasts();

  const ref = useMergeRefs([context.refs.setReference, context.refs.setFloating]);

  return (
    <ToastContext.Provider value={{ ...context }}>
      <div ref={ref}>
        {context.toasts.map(
          (
            {
              id,
              message,
              variant,
              autoDismiss,
              showIcon,
              icon,
              showCloseButton,
              showAction,
              actionColor,
              actionVariant,
              actionText,
              actionProps,
            },
            index,
          ) => (
            <ToastContent
              key={index}
              toastId={id}
              variant={variant}
              autoDismiss={autoDismiss}
              ref={(node) => {
                context.listRef.current[index] = node;
              }}
              i={index}
              showIcon={showIcon}
              icon={icon}
              showCloseButton={showCloseButton}
              message={message}
              showAction={showAction}
              actionColor={actionColor}
              actionText={actionText}
              actionVariant={actionVariant}
              actionProps={actionProps}
            />
          ),
        )}
      </div>
      {children}
    </ToastContext.Provider>
  );
}
