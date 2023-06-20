import {
  autoUpdate,
  flip,
  FloatingFocusManager,
  FloatingPortal,
  size,
  useDismiss,
  useFloating,
  useInteractions,
  useListNavigation,
  useRole,
} from '@floating-ui/react';
import React, { useId, useRef, useState } from 'react';
import { Box } from '../Box';
import { BoxProps } from '../Box/types';
import { TextField } from '../TextField';
import { Typography } from '../Typography';
import { StyledOption } from './Autocomplete.styles';
import { AutocompleteProps } from './types';

interface ItemProps {
  children: React.ReactNode;
  active: boolean;
}

const OptionItem = React.forwardRef<BoxProps, ItemProps & BoxProps>(({ children, active, ...rest }, ref) => {
  const id = useId();

  return (
    <StyledOption
      p={1}
      radius={1}
      backgroundColor={active ? 'blue.100' : undefined}
      ref={ref}
      role="option"
      id={id}
      aria-selected={active}
      {...rest}
      style={{
        ...rest.style,
      }}
    >
      <Typography variant="text14">{children}</Typography>
    </StyledOption>
  );
});

OptionItem.displayName = 'OptionItemAutocomplete';

export const Autocomplete = ({
  endAdornment,
  inputValue,
  items,
  placeholder,
  startAdornment,
  onChange,
  onSelectItem,
}: AutocompleteProps) => {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const listRef = useRef<Array<HTMLElement | null>>([]);

  const { refs, floatingStyles, context } = useFloating<HTMLInputElement>({
    whileElementsMounted: autoUpdate,
    open,
    onOpenChange: setOpen,
    middleware: [
      flip({ padding: 10 }),
      size({
        apply({ rects, availableHeight, elements }) {
          Object.assign(elements.floating.style, {
            width: `${rects.reference.width}px`,
            maxHeight: `${availableHeight}px`,
          });
        },
        padding: 10,
      }),
    ],
  });

  const role = useRole(context, { role: 'listbox' });
  const dismiss = useDismiss(context);
  const listNav = useListNavigation(context, {
    listRef,
    activeIndex,
    onNavigate: setActiveIndex,
    virtual: true,
    loop: true,
  });

  const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions([role, dismiss, listNav]);

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    onChange(event);

    if (value) {
      setOpen(true);
      setActiveIndex(0);
    } else {
      setOpen(false);
    }
  };

  const handleFocusInput = () => {
    setOpen(true);
  };

  return (
    <>
      <TextField
        startAdornment={startAdornment}
        endAdornment={endAdornment}
        {...getReferenceProps({
          onChange: handleChangeInput,
          onFocus: handleFocusInput,
          value: inputValue,
          ref: refs.setReference,
          placeholder,
          'aria-autocomplete': 'list',
          onKeyDown(event) {
            if (event.key === 'Enter' && activeIndex != null && items[activeIndex]) {
              onSelectItem(items[activeIndex]);
              setActiveIndex(null);
              setOpen(false);
            }
          },
        })}
      />
      <FloatingPortal>
        {open && (
          <FloatingFocusManager context={context} initialFocus={-1} visuallyHiddenDismiss>
            <div
              {...getFloatingProps({
                ref: refs.setFloating,
                style: {
                  ...floatingStyles,
                  overflowY: 'auto',
                },
              })}
            >
              <Box border={1} radius={1} p={1} backgroundColor="white.main">
                {items.length > 0 ? (
                  items.map((item, index) => (
                    <OptionItem
                      key={item.id}
                      {...getItemProps({
                        key: item.id,
                        ref(node) {
                          listRef.current[index] = node;
                        },
                        onClick() {
                          onSelectItem(item);
                          setOpen(false);
                          refs.domReference.current?.focus();
                        },
                      })}
                      active={activeIndex === index}
                    >
                      {item.value}
                    </OptionItem>
                  ))
                ) : (
                  <Typography variant="text12" color="neutral.400" p={1}>
                    NO RESULTS...
                  </Typography>
                )}
              </Box>
            </div>
          </FloatingFocusManager>
        )}
      </FloatingPortal>
    </>
  );
};
