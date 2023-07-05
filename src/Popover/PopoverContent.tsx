import React, { ForwardedRef, HTMLProps, forwardRef } from 'react';
import { usePopoverContext } from './PopoverContext';
import { FloatingFocusManager, FloatingPortal, useMergeRefs, FloatingArrow } from '@floating-ui/react';
import { theme } from '../shared/theme';
import { StyledPopoverContent, StyledCloseButton } from './Popover.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { Box } from '../Box';

const PopoverContentBase = ({ style, ...props }: HTMLProps<HTMLDivElement>, propRef: ForwardedRef<HTMLDivElement>) => {
  {
    const {
      context: floatingContext,
      arrowRef,
      hasArrow,
      onOpenChange,
      hasCloseButton,
      ...context
    } = usePopoverContext();
    const ref = useMergeRefs([context.refs.setFloating, propRef]);

    if (!floatingContext.open) return null;

    return (
      <FloatingPortal>
        <FloatingFocusManager context={floatingContext} modal={context.modal}>
          <StyledPopoverContent
            ref={ref}
            style={{
              ...context.floatingStyles,
              ...style,
            }}
            elevation={2}
            aria-labelledby={context.labelId}
            aria-describedby={context.descriptionId}
            {...context.getFloatingProps(props)}
          >
            {hasCloseButton && onOpenChange && (
              <Box display="flex" justifyContent="flex-end" pb={1}>
                <StyledCloseButton
                  startIcon={<FontAwesomeIcon icon={faXmark} />}
                  variant="text"
                  color="blue.main"
                  onClick={() => onOpenChange(false)}
                />
              </Box>
            )}

            {props.children}

            {hasArrow && (
              <FloatingArrow
                ref={arrowRef}
                context={floatingContext}
                fill={theme.palette.white.main}
                stroke={theme.palette.neutral[300]}
                strokeWidth={1}
                tipRadius={1}
              />
            )}
          </StyledPopoverContent>
        </FloatingFocusManager>
      </FloatingPortal>
    );
  }
};

export const PopoverContent = forwardRef<HTMLDivElement, HTMLProps<HTMLDivElement>>(PopoverContentBase);
