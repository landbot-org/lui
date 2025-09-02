import { ChangeEvent, useId, useRef, useState } from 'react';
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
import { FormHelperText } from '../form-helper-text';
import { FormLabel } from '../form-label';
import { TextField } from '../text-field';
import { Typography } from '../typography';
import { AutoCompleteOptions } from './AutoCompleteOptions';
import { AutoCompleteItemOption, AutocompleteProps } from './Autocomplete.types';
import { AutocompleteNoResults } from './AutocompleteNoResults';

export const Autocomplete = ({
  endAdornment,
  error,
  inputValue,
  items,
  label,
  description,
  id,
  helperText,
  placeholder,
  startAdornment,
  selectedItemId,
  placement = 'bottom',
  prenventCloseOnEmptySearch,
  noResults,
  preventOpen,
  styles,
  itemsContainerFooter,
  onFocus,
  onBlur,
  onChange,
  onSelectItem,
  itemRenderer,
  disabled,
  'aria-labelledby': arialLabelledBy,
}: AutocompleteProps) => {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const autoId = useId();

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

  const showPopover = !disabled && !preventOpen && open;

  return (
    <>
      <div onMouseDown={handleFocusInput}>
        {(label || description) && (
          <FormLabel htmlFor={id ?? autoId}>
            {label && (
              <Typography variant="text14" fontWeight={700}>
                {label}
              </Typography>
            )}
            {description && <Typography variant="text14">{description}</Typography>}
          </FormLabel>
        )}
        <TextField
          id={id ?? autoId}
          error={error}
          disabled={disabled}
          startAdornment={startAdornment}
          endAdornment={endAdornment}
          styles={styles?.textfield}
          {...getReferenceProps({
            onFocus,
            onBlur,
            onChange: handleChangeInput,
            value: inputValue,
            ref: refs.setReference,
            placeholder,
            'aria-autocomplete': 'list',
            'aria-labelledby': arialLabelledBy,
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
      {helperText && (
        <FormHelperText variant="text12" color={error ? 'error.main' : 'neutral.main'}>
          {helperText}
        </FormHelperText>
      )}
      <FloatingPortal>
        {showPopover && (
          <FloatingFocusManager context={context} visuallyHiddenDismiss initialFocus={-1}>
            <div
              {...getFloatingProps({
                ref: refs.setFloating,
                style: {
                  ...floatingStyles,
                  overflowY: 'auto',
                  zIndex: 1000,
                  ...styles?.popover,
                },
              })}
            >
              <Box border={1} radius={1} p={1} backgroundColor="white.main" style={styles?.popoverContainer}>
                {items.length > 0 ? (
                  <>
                    <Box style={styles?.popoverItemsContainer}>
                      <AutoCompleteOptions
                        activeIndex={activeIndex}
                        refs={refs}
                        selectedItemId={selectedItemId}
                        listRef={listRef}
                        getItemProps={getItemProps}
                        handleSelectItem={handleSelectItem}
                        items={items}
                        itemRenderer={itemRenderer}
                        styles={{ optionHover: styles?.optionHover, option: styles?.option }}
                      />
                    </Box>
                    {itemsContainerFooter}
                  </>
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
