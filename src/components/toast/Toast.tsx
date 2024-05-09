import React from 'react';

import { FloatingPortal, useTransitionStyles } from '@floating-ui/react';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Button } from '../button';
import { Icon } from '../icon';
import { ToastVariant } from './Toast.types';
import { useToastsContext } from './ToastProvider';

const getColor = (appearance?: ToastVariant) => {
  switch (appearance) {
    case 'info':
      return '#CDF0FE';
    case 'success':
      return '#ECFCD3';
    case 'error':
      return '#FFE2E5';
    case 'warning':
      return '#FEFACF';
    default:
      return '#ffffff';
  }
};

const getCountDownColor = (appearance?: ToastVariant) => {
  switch (appearance) {
    case 'info':
      return '#00B4D8';
    case 'success':
      return '#5CB85C';
    case 'error':
      return '#D9534F';
    case 'warning':
      return '#F0AD4E';
    default:
      return '#ffffff';
  }
};

type ToastContentProps = {
  i: number;
  toastId: string;
  appearance?: ToastVariant;
  autoDismiss?: boolean;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

export const Toast = React.forwardRef<HTMLDivElement, ToastContentProps>(
  ({ i, toastId, appearance, autoDismiss, children }, propRef) => {
    const [timerId, setTimerId] = React.useState<number | null>(null);
    const { context, removeToast, autoDismissTimeout } = useToastsContext();
    const { styles } = useTransitionStyles(context, {
      duration: 300,
      initial: () => ({
        opacity: 0,
      }),
      open: ({ side }) => ({
        opacity: 1,
        transform: {
          top: 'translateY(-0.5rem)',
          right: 'translateX(0.5rem)',
          bottom: 'translateY(0.5rem)',
          left: 'translateX(-0.5rem)',
        }[side],
      }),
    });

    const startTimer = React.useCallback(() => {
      const id = window.setTimeout(() => {
        removeToast(toastId);
      }, autoDismissTimeout);
      setTimerId(id);
    }, [autoDismissTimeout, removeToast, toastId]);

    const stopTimer = React.useCallback(() => {
      if (timerId) {
        clearTimeout(timerId);
        setTimerId(null);
      }
    }, [timerId]);

    React.useEffect(() => {
      if (autoDismiss) {
        startTimer();
      }
      return () => {
        if (timerId) {
          stopTimer();
        }
      };
    }, [autoDismiss, startTimer, stopTimer, timerId]);

    return (
      <FloatingPortal>
        {/* TODO: Create styled */}
        <style>
          {`@keyframes autoDismiss {
            from {
              width: 100%;
            }
            to {
              width: 0%;
            }
          }`}
        </style>
        <div
          ref={propRef}
          style={{
            width: '300px',
            backgroundColor: getColor(appearance),
            padding: '1rem',
            borderRadius: 8,
            boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
            position: 'absolute',
            right: 0,
            left: 0,
            top: i * 75,
            margin: 'auto',
            display: 'flex',
            overflow: 'hidden',
            ...styles,
          }}
        >
          {children}
          <div style={{ position: 'absolute', right: '10px' }}>
            <Button
              size="small"
              color="blue.main"
              variant="text"
              onClick={() => {
                removeToast(toastId);
              }}
              startIcon={<Icon icon={<FontAwesomeIcon icon={faXmark} />} />}
            />
          </div>
          <div
            style={{
              animation: `autoDismiss ${autoDismissTimeout}ms linear`,
              backgroundColor: getCountDownColor(appearance),
              position: 'absolute',
              height: '3px',
              width: 0,
              top: 0,
              left: 0,
              opacity: autoDismiss ? 1 : 0,
            }}
          />
        </div>
      </FloatingPortal>
    );
  },
);

Toast.displayName = 'Toast';
