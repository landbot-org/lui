import { mockResizeObserver, render, screen } from '../../test-utils';
import { Box } from '../box';
import { Typography } from '../typography';
import { Autocomplete } from './Autocomplete';
import { AutoCompleteItemOption, AutocompleteProps } from './Autocomplete.types';

const CustomRender = ({ item }: { item: AutoCompleteItemOption }) => (
  <Box>
    <Typography>Custom {item.value}</Typography>
  </Box>
);

const renderComponent = (props: Partial<AutocompleteProps> = {}) =>
  render(<Autocomplete items={[]} onChange={jest.fn()} onSelectItem={jest.fn()} {...props} />);

describe('Autocomplete', () => {
  beforeEach(() => {
    mockResizeObserver();
  });

  it('should render input with placeholder', () => {
    renderComponent({ placeholder: 'Write something here' });

    expect(screen.getByPlaceholderText('Write something here')).toBeVisible();
  });
  it('should render items when start typing', async () => {
    const { user } = renderComponent({
      placeholder: 'Write something here',
      items: [
        { id: '1', value: 'Option 1' },
        { id: '2', value: 'Option 2' },
        { id: '3', value: 'Option 3' },
      ],
    });

    await user.type(screen.getByPlaceholderText('Write something here'), '1');

    expect(screen.getByRole('option', { name: 'Option 1' })).toBeVisible();
  });
  it('should render option selected when there are  when start typing', async () => {
    const { user } = renderComponent({
      selectedItemId: '1',
      placeholder: 'Write something here',
      items: [
        { id: '1', value: 'Option 1' },
        { id: '2', value: 'Option 2' },
        { id: '3', value: 'Option 3' },
      ],
    });

    await user.type(screen.getByPlaceholderText('Write something here'), '1');

    expect(screen.getByRole('option', { name: 'Option 1', selected: true })).toBeVisible();
    expect(screen.getByRole('option', { name: 'Option 2', selected: false })).toBeVisible();
    expect(screen.getByRole('option', { name: 'Option 3', selected: false })).toBeVisible();
  });
  it('should render no results when start typing and there are not items', async () => {
    const { user } = renderComponent({
      placeholder: 'Write something here',
      items: [],
    });

    await user.type(screen.getByPlaceholderText('Write something here'), '1');

    expect(screen.getByText('NO RESULTS...')).toBeVisible();
  });

  it('allows to render no selectable elements', async () => {
    const onSelectItem = jest.fn();
    const { user } = renderComponent({
      selectedItemId: '1',
      placeholder: 'Write something here',
      items: [
        { id: '1', value: 'Option 1' },
        { type: 'separator', children: <div>SEPARATOR</div> },
        { id: '2', value: 'Option 2' },
      ],
      onSelectItem,
    });

    await user.type(screen.getByPlaceholderText('Write something here'), '1');
    await user.click(screen.getByText('SEPARATOR'));

    expect(onSelectItem).not.toHaveBeenCalled();
  });

  describe('Custom render', () => {
    it('should render items when start typing', async () => {
      const { user } = renderComponent({
        placeholder: 'Write something here',
        items: [
          { id: '1', value: 'Option 1' },
          { id: '2', value: 'Option 2' },
          { id: '3', value: 'Option 3' },
        ],
        itemRenderer: (item) => <CustomRender item={item} />,
      });

      await user.type(screen.getByPlaceholderText('Write something here'), '1');

      expect(screen.getByRole('option', { name: 'Custom Option 1' })).toBeVisible();
    });

    it('should trigger a callback when selecting an option', async () => {
      const onSelectItem = jest.fn();
      const selectOption = { id: '1', value: 'Option 1', extra: 'Pepe' };
      const { user } = renderComponent({
        placeholder: 'Write something here',
        items: [selectOption, { id: '2', value: 'Option 2' }, { id: '3', value: 'Option 3' }],
        itemRenderer: (item) => <CustomRender item={item} />,
        onSelectItem,
      });

      await user.type(screen.getByPlaceholderText('Write something here'), '1');
      await user.click(screen.getByRole('option', { name: 'Custom Option 1' }));

      expect(onSelectItem).toHaveBeenCalledWith(selectOption);
    });

    it('allows to customize render on no results', async () => {
      const { user } = renderComponent({
        placeholder: 'Write something here',
        items: [],
        noResults: <div>CUSTOM RENDER</div>,
      });

      await user.type(screen.getByPlaceholderText('Write something here'), '1');

      expect(screen.getByText('CUSTOM RENDER')).toBeVisible();
    });
  });
});
