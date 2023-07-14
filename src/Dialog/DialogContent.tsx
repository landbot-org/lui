import React from 'react';
import { useDialogContext } from './DialogContext';
import { FloatingFocusManager, FloatingPortal, useMergeRefs } from '@floating-ui/react';
import { DialogClose } from './DialogClose';
import { StyledContent, StyledFloatingOverlay, StyledDialogCloseWrapper } from './Dialog.styles';

export const DialogContent = React.forwardRef<HTMLDivElement, React.HTMLProps<HTMLDivElement>>((props, propRef) => {
  const { context: floatingContext, ...context } = useDialogContext();
  const ref = useMergeRefs([context.refs.setFloating, propRef]);

  if (!floatingContext.open) return null;

  return (
    <FloatingPortal>
      <StyledFloatingOverlay lockScroll>
        <FloatingFocusManager context={floatingContext}>
          <StyledContent
            backgroundColor="white.main"
            radius={3}
            $width={context.width}
            ref={ref}
            {...context.getFloatingProps(props)}
          >
            {context.hasCloseButton && (
              <StyledDialogCloseWrapper p={2}>
                <DialogClose />
              </StyledDialogCloseWrapper>
            )}
            {props.children}
          </StyledContent>
        </FloatingFocusManager>
      </StyledFloatingOverlay>
    </FloatingPortal>
  );
});

DialogContent.displayName = 'DialogContent';
