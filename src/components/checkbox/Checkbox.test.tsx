import React from 'react';

import { fireEvent, waitFor } from '@testing-library/dom';

import { render } from '../../test-utils';
import { Checkbox } from './Checkbox';

describe('Checkbox', () => {
  it('should render checkbox', () => {
    const { getByRole } = render(<Checkbox onChange={jest.fn} />);
    expect(getByRole('checkbox')).toBeInTheDocument();
  });
  it('should render checkbox checked', () => {
    const { getByRole } = render(<Checkbox checked onChange={jest.fn} />);
    expect(getByRole('checkbox')).toHaveProperty('checked', true);
  });
  it('should render checkbox disabled', () => {
    const { getByRole } = render(<Checkbox checked disabled onChange={jest.fn} />);
    expect(getByRole('checkbox')).toBeDisabled();
  });
  it('should render checkbox indeterminate', () => {
    const { getByRole } = render(<Checkbox indeterminate onChange={jest.fn} />);
    waitFor(() => {
      expect(getByRole('checkbox')).toHaveAttribute('indeterminate', true);
    });
  });
  it('should change indeterminate attribute when toogle indeterminate prop', () => {
    const { getByRole, rerender } = render(<Checkbox indeterminate onChange={jest.fn} />);
    expect(getByRole('checkbox')).toHaveProperty('indeterminate', true);
    rerender(<Checkbox onChange={jest.fn} />);
    expect(getByRole('checkbox')).toHaveProperty('indeterminate', false);
  });
  it('should render checkbox indeterminate disabled', () => {
    const { getByRole } = render(<Checkbox disabled indeterminate onChange={jest.fn} />);
    waitFor(() => {
      expect(getByRole('checkbox')).toHaveAttribute('indeterminate', true);
      expect(getByRole('checkbox')).toBeDisabled();
    });
  });
  it('should call onChange when click', () => {
    const spyOnChange = jest.fn();
    const { getByRole } = render(<Checkbox onChange={spyOnChange} />);
    fireEvent.click(getByRole('checkbox'));
    expect(spyOnChange).toHaveBeenCalled();
  });
});
