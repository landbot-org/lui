import React, { useState } from 'react';
import { act, mockResizeObserver, render, screen } from '../test-utils';
import { Select } from './Select';
import { SelectProps } from './types';

const SelectComponent = (props: Partial<SelectProps>) => {
  const [value, setValue] = useState('');
  return <Select items={[]} onChange={setValue} value={value} {...props} />;
};

const renderComponent = (props: Partial<SelectProps> = {}) => {
  return render(<SelectComponent {...props} />);
};

describe('Select', () => {
  beforeEach(() => {
    mockResizeObserver();
  });

  it('should render input with placeholder', () => {
    renderComponent({ placeholder: 'Choose an option' });

    expect(screen.getByPlaceholderText('Choose an option')).toBeVisible();
  });

  it('should render options when click on input', async () => {
    const { user } = renderComponent({
      value: '1',
      placeholder: 'Choose an option',
      items: [
        { value: '1', label: 'Option 1' },
        { value: '2', label: 'Option 2' },
        { value: '3', label: 'Option 3' },
      ],
    });

    await act(async () => user.click(screen.getByPlaceholderText('Choose an option')));

    expect(screen.getByRole('option', { name: 'Option 1', selected: true })).toBeVisible();
    expect(screen.getByRole('option', { name: 'Option 2', selected: false })).toBeVisible();
    expect(screen.getByRole('option', { name: 'Option 3', selected: false })).toBeVisible();
  });

  it('should render options when click on input', async () => {
    const { user } = renderComponent({
      placeholder: 'Choose an option',
      items: [
        { value: '1', label: 'Option 1' },
        { value: '2', label: 'Option 2' },
        { value: '3', label: 'Option 3' },
      ],
    });
    const input = screen.getByPlaceholderText('Choose an option');

    await act(async () => user.click(input));
    await act(async () => user.click(screen.getByRole('option', { name: 'Option 2' })));

    expect(input).toHaveValue('Option 2');
  });
});