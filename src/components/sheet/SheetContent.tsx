import { HTMLProps, forwardRef } from 'react';
import { FloatingFocusManager, FloatingPortal, useMergeRefs } from '@floating-ui/react';
import { StyledContent } from './Sheet.styles';
import { useSheetContext } from './SheetContext';

interface SheetContentProps extends HTMLProps<HTMLDivElement> {
  zIndex?: number;
}

export const SheetContent = forwardRef<HTMLDivElement, SheetContentProps>(({ zIndex = 1000, ...props }, propRef) => {
  const { context: floatingContext, ...context } = useSheetContext();
  const ref = useMergeRefs([context.refs.setFloating, propRef]);

  if (!floatingContext.open) return null;

  return (
    <FloatingPortal>
      <FloatingFocusManager context={floatingContext}>
        <StyledContent
          backgroundColor="white.main"
          radius={3}
          $width={context.width}
          ref={ref}
          $zIndex={zIndex}
          {...context.getFloatingProps(props)}
        >
          {props.children}
        </StyledContent>
      </FloatingFocusManager>
    </FloatingPortal>
  );
});

SheetContent.displayName = 'SheetContent';
