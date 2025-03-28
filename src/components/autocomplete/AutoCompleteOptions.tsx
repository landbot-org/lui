import { CSSProperties, Fragment, ReactNode, forwardRef } from 'react';
import { useId } from '@floating-ui/react';
import { BoxProps } from '../box/Box.types';
import { Typography } from '../typography';
import { AutocompleteProps } from './Autocomplete.types';
import { StyledOption } from './AutocompleteOptions.styles';

interface ItemProps {
  children: ReactNode;
  active: boolean;
  styles?: {
    hover?: CSSProperties;
  };
}

const OptionItem = forwardRef<BoxProps, ItemProps & BoxProps>(({ children, active, styles, ...rest }, ref) => {
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
      $hover={styles?.hover}
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
  styles?: {
    option?: CSSProperties;
    optionHover?: CSSProperties;
  };
  getItemProps: (userProps?: React.HTMLProps<HTMLElement>) => Record<string, unknown>;
  handleSelectItem: (item: any) => void;
}

export const AutoCompleteOptions = ({
  items,
  listRef,
  refs,
  selectedItemId,
  activeIndex,
  styles,
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
              ref(node) {
                listRef.current[index] = node;
              },
              onMouseDown() {
                handleSelectItem(item);
                refs.domReference.current?.focus();
              },
            })}
            active={activeIndex === index || selectedItemId === item.id}
            style={styles?.option}
            styles={{ hover: styles?.optionHover }}
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
