import { ChangeEvent, ReactNode, forwardRef, useRef, useState } from 'react';

import {
  FloatingFocusManager,
  FloatingPortal,
  autoUpdate,
  flip,
  size,
  useDismiss,
  useFloating,
  useId,
  useInteractions,
  useListNavigation,
  useRole,
} from '@floating-ui/react';

import { Box } from '../box';
import { BoxProps } from '../box/Box.types';
import { TextField } from '../text-field';
import { Typography } from '../typography';
import { AutoCompleteItem, AutocompleteProps } from './Autocomplete.types';

import { StyledOption } from './Autocomplete.styles';

interface ItemProps {
  children: ReactNode;
  active: boolean;
}

const OptionItem = forwardRef<BoxProps, ItemProps & BoxProps>(({ children, active, ...rest }, ref) => {
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
  selectedItemId,
  onChange,
  onSelectItem,
  optionColor,
  optionPlacement,
  borderColor,
  borderWidth,
  height,
  hasEnd = true,
  borderStyle,
  floatingZIndex = 1000,
  keepOpenOnNoValue = false,
}: AutocompleteProps) => {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const listRef = useRef<Array<HTMLElement | null>>([]);

  const { refs, floatingStyles, context } = useFloating<HTMLInputElement>({
    placement: optionPlacement,
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

  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    onChange(event);

    if (value) {
      setOpen(true);
      setActiveIndex(null);
    } else {
      if (!keepOpenOnNoValue) {
        setOpen(false);
      }
    }
  };

  const handleFocusInput = () => {
    setOpen(true);
  };

  const handleSelectItem = (item: AutoCompleteItem) => {
    onSelectItem(item);
    setActiveIndex(null);
    setOpen(false);
  };

  return (
    <>
      <div onMouseDown={handleFocusInput}>
        <TextField
          hasEnd={hasEnd}
          height={height}
          borderWidth={borderWidth}
          borderColor={borderColor}
          borderStyle={borderStyle}
          startAdornment={startAdornment}
          endAdornment={endAdornment}
          {...getReferenceProps({
            onChange: handleChangeInput,
            value: inputValue,
            ref: refs.setReference,
            placeholder,
            'aria-autocomplete': 'list',
            onKeyDown(event) {
              if (event.key === 'Enter' && activeIndex != null && items[activeIndex]) {
                handleSelectItem(items[activeIndex]);
              }
            },
          })}
        />
      </div>
      <FloatingPortal>
        {open && (
          <FloatingFocusManager context={context} visuallyHiddenDismiss initialFocus={-1}>
            <div
              {...getFloatingProps({
                ref: refs.setFloating,
                style: {
                  ...floatingStyles,
                  overflowY: 'auto',
                  zIndex: floatingZIndex,
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
                          handleSelectItem(item);
                          refs.domReference.current?.focus();
                        },
                      })}
                      active={activeIndex === index || selectedItemId === item.id}
                    >
                      <Typography color={optionColor}>{item.value}</Typography>
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
