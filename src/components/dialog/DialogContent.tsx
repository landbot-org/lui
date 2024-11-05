import { HTMLProps, forwardRef } from 'react';
import { FloatingFocusManager, FloatingPortal, useMergeRefs } from '@floating-ui/react';
import { Overlay } from '../overlay';
import { StyledContent, StyledDialogCloseWrapper } from './Dialog.styles';
import { DialogClose } from './DialogClose';
import { useDialogContext } from './DialogContext';

interface DialogContentProps extends HTMLProps<HTMLDivElement> {
  zIndex?: number;
}

export const DialogContent = forwardRef<HTMLDivElement, DialogContentProps>(({ zIndex = 1000, ...props }, propRef) => {
  const { context: floatingContext, ...context } = useDialogContext();
  const ref = useMergeRefs([context.refs.setFloating, propRef]);

  if (!floatingContext.open) return null;

  return (
    <FloatingPortal>
      <Overlay zIndex={zIndex} lockScroll>
        <FloatingFocusManager context={floatingContext}>
          <StyledContent
            backgroundColor="white.main"
            radius={3}
            $width={context.width}
            ref={ref}
            $zIndex={zIndex}
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
      </Overlay>
    </FloatingPortal>
  );
});

DialogContent.displayName = 'DialogContent';
