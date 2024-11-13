import { Fragment, ReactNode, forwardRef } from 'react';
import { useId } from '@floating-ui/react';
import { BoxProps } from '../box/Box.types';
import { Typography } from '../typography';
import { AutocompleteProps } from './Autocomplete.types';
import { StyledOption } from './AutocompleteOptions.styles';

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
      <Typography variant="text14" as="div">
        {children}
      </Typography>
    </StyledOption>
  );
});

OptionItem.displayName = 'OptionItemAutocomplete';

interface AutoCompleteOptionsProps extends Pick<AutocompleteProps, 'items' | 'itemRenderer'> {
  activeIndex: any;
  refs: any;
  selectedItemId: any;
  listRef: React.MutableRefObject<(HTMLElement | null)[]>;
  getItemProps: (userProps?: React.HTMLProps<HTMLElement>) => Record<string, unknown>;
  handleSelectItem: (item: any) => void;
}

export const AutoCompleteOptions = ({
  items,
  listRef,
  refs,
  selectedItemId,
  activeIndex,
  getItemProps,
  handleSelectItem,
  itemRenderer,
}: AutoCompleteOptionsProps) => {
  return (
    <>
      {items.map((item, index) =>
        item.type === 'separator' ? (
          <Fragment key={`key_separator_${index}`}>{item.children}</Fragment>
        ) : (
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
            {/* Avoid using itemRenderer?.(item) notation.
            In case itemRenderer is defined but renders as null, it will show item.value */}
            {itemRenderer ? itemRenderer(item) : item.value}
          </OptionItem>
        ),
      )}
    </>
  );
};
