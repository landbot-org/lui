import React, { forwardRef, useRef, useState } from 'react';
import {
  FloatingFocusManager,
  FloatingPortal,
  autoUpdate,
  flip,
  size,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useListNavigation,
  useRole,
} from '@floating-ui/react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { Box } from '../box';
import { TextField } from '../text-field';
import { Typography } from '../typography';
import { StyledSelect } from './Select.styles';
import { SelectItemProps, SelectProps } from './Select.types';
import { SelectItem } from './SelectItem';

const IntersectionTrack = ({ onIntersection }: Pick<SelectProps, 'onIntersection'>) => {
  const { loadMoreRef } = useIntersectionObserver({
    onIntersection,
  });

  return <div ref={loadMoreRef} />;
};

export const Select = forwardRef<HTMLDivElement, SelectProps>(
  (
    {
      className,
      endAdornment,
      items,
      placeholder,
      startAdornment,
      onChange,
      value,
      description,
      error,
      helperText,
      label,
      noResults = 'NO RESULTS...',
      disabled = false,
      variant = 'regular',
      styles,
      ariaLabel,
      infiniteMode = false,
      hasMore,
      onIntersection,
    }: SelectProps,
    ref,
  ) => {
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

    const click = useClick(context, { enabled: !disabled });
    const role = useRole(context, { role: 'listbox' });
    const dismiss = useDismiss(context);
    const listNav = useListNavigation(context, {
      listRef,
      activeIndex,
      onNavigate: setActiveIndex,
      virtual: true,
      loop: true,
    });

    const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions([click, role, dismiss, listNav]);

    const handleSelectItem = (item: SelectItemProps) => {
      onChange(item.value);
      setActiveIndex(null);
      setOpen(false);
    };

    return (
      <StyledSelect disabled={disabled} className={className} ref={ref} aria-disabled={disabled ? 'true' : 'false'}>
        <TextField
          disabled={disabled}
          startAdornment={startAdornment}
          endAdornment={endAdornment}
          placeholder={placeholder}
          description={description}
          error={error}
          helperText={helperText}
          label={label}
          value={items.find((item) => item.value === value)?.label ?? ''}
          readOnly
          inputGroupProps={getReferenceProps({
            ref: refs.setReference,
            onKeyDown(event) {
              if (event.key === 'Enter' && activeIndex != null && items[activeIndex]) {
                handleSelectItem(items[activeIndex]);
              }
            },
            'aria-label': ariaLabel,
          })}
          variant={variant}
          styles={styles}
        />

        <FloatingPortal>
          {open && !disabled && (
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
                <Box style={styles?.optionsContainer}>
                  <Box style={styles?.insideContainer} border={1} radius={1} p={1} backgroundColor="white.main">
                    {items.length > 0 ? (
                      items.map((item, index) => (
                        <SelectItem
                          key={item.value}
                          {...getItemProps({
                            key: item.value,
                            ref(node) {
                              listRef.current[index] = node;
                            },
                            onClick() {
                              handleSelectItem(item);
                              refs.domReference.current?.focus();
                            },
                          })}
                          active={activeIndex === index || value === item.value}
                        >
                          {item.label}
                        </SelectItem>
                      ))
                    ) : (
                      <Typography variant="text12" color="neutral.400" p={1}>
                        {noResults}
                      </Typography>
                    )}
                    {infiniteMode && hasMore && <IntersectionTrack onIntersection={onIntersection} />}
                  </Box>
                </Box>
              </div>
            </FloatingFocusManager>
          )}
        </FloatingPortal>
      </StyledSelect>
    );
  },
);

Select.displayName = 'Select';
