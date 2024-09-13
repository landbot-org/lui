import { HTMLAttributes, ReactNode, forwardRef, useCallback, useEffect, useState } from 'react';
import { FloatingPortal, useTransitionStyles } from '@floating-ui/react';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition, faCircleInfo, faTriangleExclamation } from '@fortawesome/pro-regular-svg-icons';
import { faXmark } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box } from '../box';
import { Button, ButtonColorTypes, ButtonProps, ButtonVariants } from '../button';
import { Icon } from '../icon';
import { CloseButtonWrapper, Message, ToastIcon, ToastPositionAndLayout } from './Toast.styles';
import { ToastVariant } from './Toast.types';
import { useToastsContext } from './ToastProvider';
import { AUTO_DISMISS_TIMEOUT_MS } from './constants';

type ToastContentProps = {
  toastIndex: number;
  toastId: string;
  variant?: ToastVariant;
  autoDismiss?: boolean;
  message: ReactNode;
  showIcon?: boolean;
  icon?: ReactNode;
  hideCloseButton?: boolean;
  action?: {
    variant?: ButtonVariants;
    color?: ButtonColorTypes;
    props?: ButtonProps;
    text?: string;
  };
} & HTMLAttributes<HTMLDivElement>;

const ICON_FROM_VARIANT: Record<ToastVariant, IconDefinition> = {
  success: faCheck,
  info: faCircleInfo,
  warning: faTriangleExclamation,
  error: faXmark,
};

export const ToastContent = forwardRef<HTMLDivElement, ToastContentProps>(
  (
    { toastIndex, toastId, variant = 'success', autoDismiss, message, showIcon, icon, hideCloseButton, action },
    propRef,
  ) => {
    const [timerId, setTimerId] = useState<number | null>(null);
    const { context, removeToast } = useToastsContext();
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

    const handleClose = useCallback(() => {
      removeToast(toastId);
    }, [removeToast, toastId]);

    useEffect(() => {
      const startTimer = () => {
        const id = window.setTimeout(() => {
          removeToast(toastId);
        }, AUTO_DISMISS_TIMEOUT_MS);

        setTimerId(id);
      };

      const stopTimer = () => {
        if (timerId) {
          clearTimeout(timerId);
          setTimerId(null);
        }
      };

      if (autoDismiss && !timerId) {
        startTimer();
      }
      return () => {
        if (timerId) {
          stopTimer();
        }
      };
    }, [autoDismiss, removeToast, toastId, timerId]);

    return (
      <FloatingPortal>
        <ToastPositionAndLayout ref={propRef} $top={toastIndex * 100} $variant={variant} style={{ ...styles }}>
          <Box display="flex" alignItems="center" gap={16}>
            {showIcon && Boolean(icon) ? (
              <>{icon}</>
            ) : (
              <ToastIcon
                aria-label="toast-icon"
                $variant={variant}
                icon={<FontAwesomeIcon icon={ICON_FROM_VARIANT[variant]} />}
              />
            )}
            <Box display="flex" flexGrow={1} flexShrink={1} flexBasis="0%">
              <Message>{message}</Message>
            </Box>
            {action && (
              <Button
                size="small"
                variant={action.variant || 'contained'}
                color={action.color || 'purple.main'}
                {...(action.props || {})}
              >
                {action.text}
              </Button>
            )}
            {!hideCloseButton && (
              <CloseButtonWrapper>
                <Button
                  color="blue.main"
                  variant="text"
                  size="small"
                  startIcon={<Icon icon={<FontAwesomeIcon icon={faXmark} />} />}
                  onClick={handleClose}
                  aria-label="toast-close"
                ></Button>
              </CloseButtonWrapper>
            )}
          </Box>
        </ToastPositionAndLayout>
      </FloatingPortal>
    );
  },
);

ToastContent.displayName = 'Toast';
