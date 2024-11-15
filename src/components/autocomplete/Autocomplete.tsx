import { ChangeEvent, useRef, useState } from 'react';
import {
  FloatingFocusManager,
  FloatingPortal,
  autoUpdate,
  flip,
  size,
  useDismiss,
  useFloating,
  useInteractions,
  useListNavigation,
  useRole,
} from '@floating-ui/react';
import { Box } from '../box';
import { TextField } from '../text-field';
import { AutoCompleteOptions } from './AutoCompleteOptions';
import { AutoCompleteItemOption, AutocompleteProps } from './Autocomplete.types';
import { AutocompleteNoResults } from './AutocompleteNoResults';

export const Autocomplete = ({
  endAdornment,
  inputValue,
  items,
  placeholder,
  startAdornment,
  selectedItemId,
  placement = 'bottom',
  prenventCloseOnEmptySearch,
  noResults,
  onFocus,
  onBlur,
  onChange,
  onSelectItem,
  itemRenderer,
}: AutocompleteProps) => {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const listRef = useRef<Array<HTMLElement | null>>([]);

  const { refs, floatingStyles, context } = useFloating<HTMLInputElement>({
    placement,
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
    } else if (!prenventCloseOnEmptySearch) {
      setOpen(false);
    }
  };

  const handleFocusInput = () => {
    setOpen(true);
  };

  const handleSelectItem = (item: AutoCompleteItemOption) => {
    onSelectItem(item);
    setActiveIndex(null);
    setOpen(false);
  };

  return (
    <>
      <div onMouseDown={handleFocusInput}>
        <TextField
          startAdornment={startAdornment}
          endAdornment={endAdornment}
          {...getReferenceProps({
            onFocus,
            onBlur,
            onChange: handleChangeInput,
            value: inputValue,
            ref: refs.setReference,
            placeholder,
            'aria-autocomplete': 'list',
            onKeyDown(event) {
              if (
                event.key === 'Enter' &&
                activeIndex != null &&
                items[activeIndex] &&
                items[activeIndex].type !== 'separator'
              ) {
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
                  zIndex: 1000,
                },
              })}
            >
              <Box border={1} radius={1} p={1} backgroundColor="white.main">
                {items.length > 0 ? (
                  <AutoCompleteOptions
                    activeIndex={activeIndex}
                    refs={refs}
                    selectedItemId={selectedItemId}
                    listRef={listRef}
                    getItemProps={getItemProps}
                    handleSelectItem={handleSelectItem}
                    items={items}
                    itemRenderer={itemRenderer}
                  />
                ) : (
                  <AutocompleteNoResults>{noResults}</AutocompleteNoResults>
                )}
              </Box>
            </div>
          </FloatingFocusManager>
        )}
      </FloatingPortal>
    </>
  );
};
